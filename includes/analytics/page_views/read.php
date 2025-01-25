<?php
// Enable error reporting for debugging (remove in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Include database connection
include "../../config.php";

// Set response header for JSON output
header("Content-Type: application/json");

try {
    // Prepare SQL statement
    $stmt = $conn->prepare("SELECT page_url, COUNT(*) AS views FROM page_views GROUP BY page_url");
    
    if (!$stmt) {
        throw new Exception("Failed to prepare statement: " . $conn->error);
    }

    // Execute query
    $stmt->execute();
    $result = $stmt->get_result();

    // Fetch data
    $stats = [];
    while ($row = $result->fetch_assoc()) {
        $stats[] = $row;
    }

    // Close statement & connection
    $stmt->close();
    $conn->close();

    // Send success response
    echo json_encode([
        "success" => true,
        "message" => "Statistics retrieved successfully.",
        "data" => $stats
    ]);
} catch (Exception $e) {
    // Handle errors
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "An error occurred while fetching statistics.",
        "error" => $e->getMessage()
    ]);
}
?>
