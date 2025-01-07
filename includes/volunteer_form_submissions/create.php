<?php
// Include the database connection
include '../config.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["message" => "Invalid request method."]);
    exit;
}

// Parse the input data (assuming JSON payload)
$rawData = file_get_contents('php://input');
//error_log("Raw input data: " . $rawData); // Log the raw input data
$data = json_decode($rawData, true);

// Check for JSON parsing errors
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(401); // Bad Request
    echo json_encode(["message" => "Invalid JSON payload."]);
    exit;
}

// Validate required fields
$requiredFields = [
    'complete_name', 'nick_name', 'age', 'birthdate', 'email', 'contact_number', 
    'locality', 'occupation', 'facebook_link', 'availability_date1', 'team'
];

foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        http_response_code(402); // Bad Request
        echo json_encode(["message" => "Please provide all required fields."]);
        exit;
    }
}

// Sanitize input
$complete_name = $conn->real_escape_string($data['complete_name']);
$nick_name = $conn->real_escape_string($data['nick_name']);
$age = (int) $data['age'];
$birthdate = $conn->real_escape_string($data['birthdate']);
$email = $conn->real_escape_string($data['email']);
$contact_number = $conn->real_escape_string($data['contact_number']);
$locality = $conn->real_escape_string($data['locality']);
$occupation = $conn->real_escape_string($data['occupation']);
$affiliation = isset($data['affiliation']) ? $conn->real_escape_string($data['affiliation']) : null;
$facebook_link = $conn->real_escape_string($data['facebook_link']);
$availability_date1 = $conn->real_escape_string($data['availability_date1']);
$availability_date2 = isset($data['availability_date2']) ? $conn->real_escape_string($data['availability_date2']) : null;
$availability_date3 = isset($data['availability_date3']) ? $conn->real_escape_string($data['availability_date3']) : null;
$questions = $conn->real_escape_string($data['questions']);
$team = $conn->real_escape_string($data['team']); // New field for 'team'

// Start a transaction
$conn->begin_transaction();

try {
    // Insert the volunteer form submission
    $sql = "INSERT INTO volunteer_form_submissions (
                complete_name, nick_name, age, birthdate, email, contact_number, locality, occupation, 
                affiliation, facebook_link, availability_date1, availability_date2, availability_date3, 
                questions, team
            ) VALUES (
                '$complete_name', '$nick_name', $age, '$birthdate', '$email', '$contact_number', '$locality', 
                '$occupation', '$affiliation', '$facebook_link', '$availability_date1', '$availability_date2', 
                '$availability_date3', '$questions', '$team'
            )";

    if (!$conn->query($sql)) {
        throw new Exception("Error creating volunteer form submission: " . $conn->error);
    }

    // Commit the transaction
    $conn->commit();

    http_response_code(201); // Created
    echo json_encode(["message" => "Volunteer form submission created successfully."]);

} catch (Exception $e) {
    // Rollback the transaction on error
    $conn->rollback();
    http_response_code(500); // Internal Server Error
    echo json_encode(["message" => "Failed to create volunteer form submission.", "error" => $e->getMessage()]);
}

// Close the database connection
$conn->close();
?>
