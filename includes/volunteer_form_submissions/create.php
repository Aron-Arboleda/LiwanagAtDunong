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
//error_log("Raw input data: " . $rawData); 
$data = json_decode($rawData, true);
// Log the raw input data

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

// Sanitize input and handle empty strings as NULL
$complete_name = !empty($data['complete_name']) ? $conn->real_escape_string($data['complete_name']) : null;
$nick_name = !empty($data['nick_name']) ? $conn->real_escape_string($data['nick_name']) : null;
$age = (int) $data['age'];
$birthdate = !empty($data['birthdate']) ? $conn->real_escape_string($data['birthdate']) : null;
$email = !empty($data['email']) ? $conn->real_escape_string($data['email']) : null;
$contact_number = !empty($data['contact_number']) ? $conn->real_escape_string($data['contact_number']) : null;
$locality = !empty($data['locality']) ? $conn->real_escape_string($data['locality']) : null;
$occupation = !empty($data['occupation']) ? $conn->real_escape_string($data['occupation']) : null;
$affiliation = isset($data['affiliation']) && !empty($data['affiliation']) ? $conn->real_escape_string($data['affiliation']) : null;
$facebook_link = !empty($data['facebook_link']) ? $conn->real_escape_string($data['facebook_link']) : null;
$availability_date1 = !empty($data['availability_date1']) ? $conn->real_escape_string($data['availability_date1']) : null;
$availability_date2 = isset($data['availability_date2']) && !empty($data['availability_date2']) ? $conn->real_escape_string($data['availability_date2']) : null;
$availability_date3 = isset($data['availability_date3']) && !empty($data['availability_date3']) ? $conn->real_escape_string($data['availability_date3']) : null;
$questions = !empty($data['questions']) ? $conn->real_escape_string($data['questions']) : null;
$team = !empty($data['team']) ? $conn->real_escape_string($data['team']) : null;

// Start a transaction
$conn->begin_transaction();

try {
    // Insert the volunteer form submission
    $sql = "INSERT INTO volunteer_form_submissions (
                complete_name, nick_name, age, birthdate, email, contact_number, locality, occupation, affiliation, facebook_link, availability_date1, availability_date2, availability_date3, questions, team
            ) VALUES (
                " . ($complete_name ? "'$complete_name'" : 'NULL') . ", 
                " . ($nick_name ? "'$nick_name'" : 'NULL') . ", 
                $age, 
                " . ($birthdate ? "'$birthdate'" : 'NULL') . ", 
                " . ($email ? "'$email'" : 'NULL') . ", 
                " . ($contact_number ? "'$contact_number'" : 'NULL') . ", 
                " . ($locality ? "'$locality'" : 'NULL') . ", 
                " . ($occupation ? "'$occupation'" : 'NULL') . ", 
                " . ($affiliation ? "'$affiliation'" : 'NULL') . ", 
                " . ($facebook_link ? "'$facebook_link'" : 'NULL') . ", 
                " . ($availability_date1 ? "'$availability_date1'" : 'NULL') . ", 
                " . ($availability_date2 ? "'$availability_date2'" : 'NULL') . ", 
                " . ($availability_date3 ? "'$availability_date3'" : 'NULL') . ", 
                " . ($questions ? "'$questions'" : 'NULL') . ", 
                " . ($team ? "'$team'" : 'NULL') . "
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
