<?php
// Include the database connection
include '../config.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check if the request method is GET
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["message" => "Invalid request method."]);
    exit;
}

// Start a transaction
$conn->begin_transaction();

try {
    // Fetch all follower counts, including the id
    $sql = "SELECT id, platform_name, followers_count, last_updated FROM social_platforms";
    $result = $conn->query($sql);

    if (!$result) {
        throw new Exception("Error fetching follower data: " . $conn->error);
    }

    // Collect data into an array
    $followersData = [];
    while ($row = $result->fetch_assoc()) {
        $followersData[] = [
            "id" => (int)$row["id"],
            "platform_name" => $row["platform_name"],
            "followers_count" => (int)$row["followers_count"],
            "last_updated" => $row["last_updated"]
        ];
    }

    // Commit the transaction
    $conn->commit();

    // Return the data as JSON
    http_response_code(200); // OK
    echo json_encode([
        "message" => "Follower data retrieved successfully.",
        "data" => $followersData
    ]);

} catch (Exception $e) {
    // Rollback the transaction on error
    $conn->rollback();
    http_response_code(500); // Internal Server Error
    echo json_encode([
        "message" => "Failed to retrieve follower data.",
        "error" => $e->getMessage()
    ]);
}

// Close the database connection
$conn->close();
?>
