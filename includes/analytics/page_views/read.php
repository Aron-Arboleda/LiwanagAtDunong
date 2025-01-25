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
    // Get the current date and subtract months for last 4 months
    $currentMonth = date('Y-m'); // Current month
    $previousMonths = [];
    for ($i = 0; $i < 4; $i++) {
        $previousMonths[] = date('Y-m', strtotime($currentMonth . " -$i month"));
    }

    // Prepare SQL statement to get monthly page views
    $placeholders = implode(',', array_fill(0, count($previousMonths), '?'));
    $stmt = $conn->prepare("
        SELECT 
            DATE_FORMAT(visit_time, '%Y-%m') AS month,
            COUNT(*) AS views
        FROM page_views
        WHERE DATE_FORMAT(visit_time, '%Y-%m') IN ($placeholders)
        GROUP BY month
        ORDER BY month DESC
    ");
    
    if (!$stmt) {
        throw new Exception("Failed to prepare statement: " . $conn->error);
    }

    // Bind parameters (last 4 months)
    $stmt->bind_param(str_repeat('s', count($previousMonths)), ...$previousMonths);
    $stmt->execute();
    $result = $stmt->get_result();

    // Initialize the stats array with 0 views for each of the last 4 months
    $stats = array_fill_keys($previousMonths, 0);

    // Fetch data and update stats
    while ($row = $result->fetch_assoc()) {
        $stats[$row['month']] = (int)$row['views'];
    }

    // Close statement & connection
    $stmt->close();
    $conn->close();

    // Send success response
    echo json_encode([
        "success" => true,
        "message" => "Monthly page views retrieved successfully.",
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
