<?php
// Include the database connection
include '../config.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Parse the input data (JSON payload)
$rawData = file_get_contents('php://input');
$data = json_decode($rawData, true);

// Check for JSON parsing errors
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400); // Bad Request
    echo json_encode(["message" => "Invalid JSON payload."]);
    exit;
}

// Validate the input data
if (!isset($data['updates']) || !is_array($data['updates'])) {
    http_response_code(400); // Bad Request
    echo json_encode(["message" => "Invalid or missing 'updates' field."]);
    exit;
}

// Start a transaction
$conn->begin_transaction();

try {
    foreach ($data['updates'] as $update) {
        // Validate required fields for each update
        if (!isset($update['id']) || !isset($update['followers_count'])) {
            throw new Exception("Each update must include 'id' and 'followers_count'.");
        }

        $id = (int)$update['id'];
        $followersCount = (int)$update['followers_count'];

        // Update the followers count for the specified ID
        $sql = "UPDATE social_platforms SET followers_count = ?, last_updated = CURRENT_TIMESTAMP WHERE id = ?";
        $stmt = $conn->prepare($sql);

        if (!$stmt) {
            throw new Exception("Error preparing statement: " . $conn->error);
        }

        $stmt->bind_param("ii", $followersCount, $id);

        if (!$stmt->execute()) {
            throw new Exception("Error updating followers count for ID $id: " . $stmt->error);
        }

        $stmt->close();
    }

    // Commit the transaction
    $conn->commit();

    // Return a success response
    http_response_code(200); // OK
    echo json_encode(["message" => "Followers count updated successfully."]);

} catch (Exception $e) {
    // Rollback the transaction on error
    $conn->rollback();
    http_response_code(500); // Internal Server Error
    echo json_encode([
        "message" => "Failed to update followers count.",
        "error" => $e->getMessage()
    ]);
}

// Close the database connection
$conn->close();
?>
