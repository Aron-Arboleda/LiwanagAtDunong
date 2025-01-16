<?php
// Include the database connection
include '../config.php';

// Error handling
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check if the request method is POST (for deleting records)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get POST data
    $submissionId = $_POST['id'] ?? null;

    // Validate input
    if (is_null($submissionId)) {
        http_response_code(400);
        echo json_encode(["message" => "Missing required parameters."]);
        exit;
    }

    // Delete query
    $deleteSql = "DELETE FROM volunteer_form_submissions WHERE volunteer_form_submission_id = ?";
    if ($stmt = $conn->prepare($deleteSql)) {
        $stmt->bind_param('i', $submissionId);
        if ($stmt->execute()) {
            echo json_encode(["message" => "Record deleted successfully."]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Error deleting record."]);
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
