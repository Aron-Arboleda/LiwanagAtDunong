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
    // Prepare SQL statement to get the number of visitors per day (last 7 days)
    $stmt = $conn->prepare("
        SELECT DATE(visit_time) AS visit_date, COUNT(*) AS visitor_count
        FROM visitors
        GROUP BY DATE(visit_time)
        ORDER BY visit_date DESC
        LIMIT 7
    ");
    
    if (!$stmt) {
        throw new Exception("Failed to prepare statement: " . $conn->error);
    }

    // Execute query for daily visitors
    if (!$stmt->execute()) {
        throw new Exception("Failed to execute query: " . $stmt->error);
    }

    $result = $stmt->get_result();

    // Fetch daily visitor data
    $stats = [];
    while ($row = $result->fetch_assoc()) {
        $stats[] = $row;
    }

    // Prepare SQL statement to get the total number of visitors
    $totalVisitorsStmt = $conn->prepare("SELECT COUNT(*) AS total_visitors FROM visitors");

    if (!$totalVisitorsStmt) {
        throw new Exception("Failed to prepare statement for total visitors: " . $conn->error);
    }

    // Execute query for total visitors
    if (!$totalVisitorsStmt->execute()) {
        throw new Exception("Failed to execute query for total visitors: " . $totalVisitorsStmt->error);
    }

    $totalVisitorsResult = $totalVisitorsStmt->get_result();
    $totalVisitors = 0;
    
    if ($totalVisitorsResult) {
        $totalVisitorsRow = $totalVisitorsResult->fetch_assoc();
        $totalVisitors = $totalVisitorsRow['total_visitors'];
    }

    // Close statements & connection
    $stmt->close();
    $totalVisitorsStmt->close();
    $conn->close();

    // Send success response with daily data and total visitor count
    echo json_encode([
        "success" => true,
        "message" => "Daily visitor trends retrieved successfully.",
        "data" => $stats,
        "total_visitors" => $totalVisitors
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
