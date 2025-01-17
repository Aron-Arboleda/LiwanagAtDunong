<?php
// Include the database connection
include '../config.php';

// Error handling
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check if the request method is POST (for deleting records)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get POST data and decode JSON
    $data = json_decode(file_get_contents('php://input'), true);
    $submissionIds = $data['ids'] ?? [];

    // Validate input
    if (empty($submissionIds) || !is_array($submissionIds)) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid or missing required parameters."]);
        exit;
    }

    // Create placeholders for prepared statement
    $placeholders = implode(',', array_fill(0, count($submissionIds), '?'));
    $deleteSql = "DELETE FROM volunteer_form_submissions WHERE volunteer_form_submission_id IN ($placeholders)";

    if ($stmt = $conn->prepare($deleteSql)) {
        // Bind parameters dynamically
        $types = str_repeat('i', count($submissionIds)); // 'i' for integer
        $stmt->bind_param($types, ...$submissionIds);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Records deleted successfully."]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Error deleting records."]);
        }
        $stmt->close();
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to prepare statement."]);
    }
} else {
    // Method not allowed
    http_response_code(405);
    echo json_encode(["message" => "Invalid request method. Use POST for deleting."]);
}

// Close the database connection
$conn->close();
?>
