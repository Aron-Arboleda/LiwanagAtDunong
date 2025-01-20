<?php
include "../../config.php";

// Enable error reporting for debugging
ini_set('display_errors', 1);
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
$requiredFields = ['admin_id', 'username', 'role', 'account_status'];

foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(["message" => "Missing required field: $field"]);
        exit;
    }
}

// Extract and sanitize inputs
$admin_id = (int) $data['admin_id'];
$username = $conn->real_escape_string($data['username']);
$role = $conn->real_escape_string($data['role']);
$account_status = $conn->real_escape_string($data['account_status']);
$password = isset($data['password']) ? $data['password'] : null;

// Check if admin exists
$checkStmt = $conn->prepare("SELECT COUNT(*) FROM admins WHERE admin_id = ?");
$checkStmt->bind_param("i", $admin_id);
$checkStmt->execute();
$checkStmt->bind_result($count);
$checkStmt->fetch();
$checkStmt->close();

if ($count == 0) {
    http_response_code(404);
    echo json_encode(["message" => "Error: Admin with ID '$admin_id' does not exist."]);
    exit;
}

// Start transaction
$conn->begin_transaction();
try {
    if (empty($password)) {
        // Update without password
        $stmt = $conn->prepare("UPDATE admins SET username = ?, role = ?, account_status = ? WHERE admin_id = ?");
        $stmt->bind_param("sssi", $username, $role, $account_status, $admin_id);
    } else {
        // Hash the new password before updating
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
        $stmt = $conn->prepare("UPDATE admins SET username = ?, password = ?, role = ?, account_status = ? WHERE admin_id = ?");
        $stmt->bind_param("ssssi", $username, $hashedPassword, $role, $account_status, $admin_id);
    }
    
    if (!$stmt->execute()) {
        throw new Exception("Error updating admin: " . $stmt->error);
    }
    
    $conn->commit();
    http_response_code(200);
    echo json_encode(["message" => "Admin '$username' updated successfully."]);

} catch (Exception $e) {
    $conn->rollback();
    http_response_code(500);
    echo json_encode(["message" => "Failed to update admin.", "error" => $e->getMessage()]);
}

// Close database connection
$stmt->close();
$conn->close();
?>
