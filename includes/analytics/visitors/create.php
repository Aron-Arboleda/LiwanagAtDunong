<?php
include "../../config.php";

// Enable error reporting for debugging (Remove in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Get visitor information
$ip_address = $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN';
$user_agent = substr($_SERVER['HTTP_USER_AGENT'] ?? 'UNKNOWN', 0, 500); // Limit size to prevent attacks

try {
    // Start transaction
    $conn->begin_transaction();

    // Check if the IP has already been recorded today
    $stmt = $conn->prepare("SELECT COUNT(*) FROM visitors WHERE ip_address = ? AND DATE(visit_time) = CURDATE()");
    if (!$stmt) {
        throw new Exception("Prepare failed: " . $conn->error);
    }
    
    $stmt->bind_param("s", $ip_address);
    $stmt->execute();
    $stmt->bind_result($count);
    $stmt->fetch();
    $stmt->close();

    if ($count == 0) {
        // Insert a new record if the visitor is unique for the day
        $stmt = $conn->prepare("INSERT INTO visitors (ip_address, user_agent) VALUES (?, ?)");
        if (!$stmt) {
            throw new Exception("Prepare failed: " . $conn->error);
        }

        $stmt->bind_param("ss", $ip_address, $user_agent);
        
        if (!$stmt->execute()) {
            throw new Exception("Execute failed: " . $stmt->error);
        }

        $stmt->close();
    }

    // Commit transaction
    $conn->commit();

    echo json_encode(["success" => true, "message" => "Visitor recorded successfully."]);

} catch (Exception $e) {
    // Rollback on error
    $conn->rollback();

    // Log error to a file (recommended for production)
    error_log("[" . date("Y-m-d H:i:s") . "] Visitor tracking error: " . $e->getMessage() . PHP_EOL, 3, "../../logs/errors.log");

    // Send error response
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Server error. Please try again later."]);
} finally {
    // Close database connection
    $conn->close();
}
?>
