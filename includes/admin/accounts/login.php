<?php
// Include the database connection
include '../../config.php';

ini_set('session.cookie_lifetime', 259200); // 3 days 
ini_set('session.gc_maxlifetime', 259200);
ini_set('session.cookie_path', '/'); // Makes session cookies accessible site-wide

// Start session
session_start();

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["message" => "Invalid request method."]);
    exit;
}

// Parse the input data (assuming JSON payload)
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (empty($data['username']) || empty($data['password'])) {
    http_response_code(400); // Bad Request
    echo json_encode(["message" => "Please provide username and password."]);
    exit;
}

// Sanitize input
$username = $conn->real_escape_string($data['username']); // Using 'username' from the payload
$password = $data['password']; // Do not hash yet, as we are verifying against stored hashed password

// Query to find the user by username
$sql = "SELECT admin_id, username, password, role, account_status FROM admins WHERE username = ?";

try {
    // Prepare statement
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verify password
        if (password_verify($password, $user['password'])) {
            // Check if account is active
            if ($user['account_status'] === 'active') {
                // Regenerate session ID for security
                // session_regenerate_id(true);

                // Store user details in the session
                $_SESSION['user_id'] = $user['admin_id'];
                $_SESSION['user_username'] = $user['username'];
                $_SESSION['user_role'] = $user['role'];

                // Update last login time to now
                $last_login = date('Y-m-d H:i:s');
                $update_sql = "UPDATE admins SET last_login = ? WHERE admin_id = ?";
                $update_stmt = $conn->prepare($update_sql);
                $update_stmt->bind_param("si", $last_login, $user['admin_id']);
                $update_stmt->execute();
                $update_stmt->close();

                // Return success response
                http_response_code(200); // OK
                echo json_encode([
                    "message" => "Login successful.",
                    "data" => [
                        "user" => [
                            "user_id" => $user['admin_id'],
                            "user_username" => $user['username'],
                            "user_role" => $user['role']
                        ]
                    ]
                ]);
            } else {
                http_response_code(403); // Forbidden
                echo json_encode(["message" => "Your account is disabled. Please contact support."]);
            }
        } else {
            http_response_code(401); // Unauthorized
            echo json_encode(["message" => "Invalid username or password."]);
        }
    } else {
        http_response_code(401); // Unauthorized
        echo json_encode(["message" => "Invalid username or password."]);
    }
} catch (Exception $e) {
    http_response_code(500); // Internal Server Error
    echo json_encode(["message" => "An error occurred during login.", "error" => $e->getMessage()]);
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
