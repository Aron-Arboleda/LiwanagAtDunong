<?php
// Include the database connection
include '../config.php';

// Error handling
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check if the request method is POST (for updating records)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get POST data
    $submissionId = $_POST['id'] ?? null;
    $column = $_POST['column'] ?? null;
    $newValue = $_POST['value'] ?? null;

    // Validate input
    if (is_null($submissionId) || is_null($column) || is_null($newValue)) {
        http_response_code(400);
        echo json_encode(["message" => "Missing required parameters."]);
        exit;
    }

    // Update query
    $updateSql = "UPDATE volunteer_form_submissions SET $column = ? WHERE volunteer_form_submission_id = ?";
    if ($stmt = $conn->prepare($updateSql)) {
        $stmt->bind_param('si', $newValue, $submissionId);
        if ($stmt->execute()) {
            echo json_encode(["message" => "Record updated successfully."]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Error updating record."]);
        }
        $stmt->close();
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to prepare statement."]);
    }
} else {
    // Method not allowed
    http_response_code(405);
    echo json_encode(["message" => "Invalid request method. Use POST for updating."]);
}

// Close the database connection
$conn->close();
?>
