<?php
// Include the database connection
include "../../config.php";

// Error handling
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Ensure the request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["message" => "Invalid request method."]);
    exit;
}

// Parse the input data (assuming JSON payload)
$rawData = file_get_contents('php://input');
$data = json_decode($rawData, true);

// Check for JSON parsing errors
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(["message" => "Invalid JSON payload."]);
    exit;
}

// Validate required fields
$requiredFields = ['username', 'password', 'role'];

foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(["message" => "Missing required field: $field"]);
        exit;
    }
}

// Sanitize input
$username = $conn->real_escape_string($data['username']);
$password = $data['password'];
$role = $conn->real_escape_string($data['role']);

// Validate role
$validRoles = ['super_admin', 'editor', 'viewer'];
if (!in_array($role, $validRoles)) {
    http_response_code(400);
    echo json_encode(["message" => "Invalid role provided."]);
    exit;
}

// Check if username already exists
$checkStmt = $conn->prepare("SELECT COUNT(*) FROM admins WHERE username = ?");
$checkStmt->bind_param("s", $username);
$checkStmt->execute();
$checkStmt->bind_result($count);
$checkStmt->fetch();
$checkStmt->close();

if ($count > 0) {
    http_response_code(409);
    echo json_encode(["message" => "Error: Admin '$username' already exists."]);
    exit;
}

// Hash the password
$hashedPassword = password_hash($password, PASSWORD_BCRYPT);

// Start transaction
$conn->begin_transaction();

try {
    // Insert new admin
    $stmt = $conn->prepare("INSERT INTO admins (username, password, role, created_at, last_login, account_status) VALUES (?, ?, ?, NOW(), NULL, 'active')");
    $stmt->bind_param("sss", $username, $hashedPassword, $role);

    if (!$stmt->execute()) {
        throw new Exception("Error inserting admin: " . $stmt->error);
    }

    $conn->commit();
    http_response_code(201);
    echo json_encode(["message" => "Admin '$username' created successfully."]);

} catch (Exception $e) {
    $conn->rollback();
    http_response_code(500);
    echo json_encode(["message" => "Failed to create admin.", "error" => $e->getMessage()]);
}

// Close database connection
$stmt->close();
$conn->close();
?>
