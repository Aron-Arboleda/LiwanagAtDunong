<?php
include "../../config.php";

// Set the response type to JSON
header('Content-Type: application/json');

// Check if the request method is GET
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Query to select all records from the admins table
    $sql = "SELECT admin_id, username, role, created_at, last_login, account_status FROM admins";

    try {
        // Prepare and execute the query
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // Fetch all records as an associative array
            $admins = [];
            while ($row = $result->fetch_assoc()) {
                $admins[] = $row;
            }

            // Return the admins as a JSON response
            echo json_encode([
                "message" => "Admins fetched successfully.",
                "data" => $admins
            ]);
        } else {
            echo json_encode([
                "message" => "No admins found.",
                "data" => []
            ]);
        }
    } catch (Exception $e) {
        // Handle any errors
        echo json_encode([
            "message" => "Error fetching admins.",
            "error" => $e->getMessage()
        ]);
    }
} else {
    // If the method is not GET, return method not allowed
    http_response_code(405); // Method Not Allowed
    echo json_encode(["message" => "Invalid request method. Only GET is allowed."]);
}

// Close the connection
$conn->close();
?>
