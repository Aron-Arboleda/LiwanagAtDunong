<?php
include '../config.php'; // Include database connection

// Enable error reporting for debugging
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Check if request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Ensure required parameters exist
    if (!isset($data['id']) || empty($data['updates']) || !is_array($data['updates'])) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid request data."]);
        exit;
    }

    $submissionId = $data['id'];
    $updates = $data['updates'];

    // Build SQL query dynamically
    $columns = array_keys($updates);
    $placeholders = implode(" = ?, ", $columns) . " = ?";
    $values = array_values($updates);
    $values[] = $submissionId; // Append ID at the end

    $sql = "UPDATE volunteer_form_submissions SET $placeholders WHERE volunteer_form_submission_id = ?";

    $stmt = $conn->prepare($sql);
    if ($stmt) {
        $stmt->bind_param(str_repeat('s', count($updates)) . 'i', ...$values);
        $stmt->execute();
        echo json_encode(["message" => "Record updated successfully."]);
        $stmt->close();
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to prepare statement."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Invalid request method."]);
}

$conn->close();
?>
