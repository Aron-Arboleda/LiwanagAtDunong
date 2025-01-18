<?php
// Include the database connection
include '../config.php';

// Error handling
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check if the request method is GET (for retrieving records)
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(["message" => "Invalid request method."]);
    exit;
}

// Database table name
$tableName = 'volunteer_form_submissions';

// Fetch only unarchived records (is_archived = FALSE)
$sqlRecords = "
    SELECT * 
    FROM $tableName
    WHERE is_archived = FALSE
";
$recordsResult = $conn->query($sqlRecords);
$records = [];
if ($recordsResult) {
    while ($row = $recordsResult->fetch_assoc()) {
        $records[] = $row;
    }
}

// Return records as JSON
echo json_encode([
    "records" => $records
]);

// Close the database connection
$conn->close();
?>
