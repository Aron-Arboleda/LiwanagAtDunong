<?php
include "../config.php";

// Enable error reporting for debugging
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Ensure the request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["message" => "Invalid request method."]);
    exit;
}

// Parse the input data (assuming JSON payload)
$rawData = file_get_contents('php://input');
$data = json_decode($rawData, true);

// Check for JSON parsing errors
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(["message" => "Invalid JSON payload."]);
    exit;
}

// Validate required fields
$requiredFields = ['volunteer_form_submission_id', 'complete_name', 'nick_name', 'birthdate', 'email', 'contact_number', 'current_address', 'occupation', 'facebook_link', 'date_available', 'transportation', 'team'];

foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(["message" => "Missing required field: $field"]);
        exit;
    }
}

// Extract and sanitize inputs
$volunteer_form_submission_id = (int) $data['volunteer_form_submission_id'];
$complete_name = $conn->real_escape_string($data['complete_name']);
$nick_name = $conn->real_escape_string($data['nick_name']);
$birthdate = $conn->real_escape_string($data['birthdate']);
$email = $conn->real_escape_string($data['email']);
$contact_number = $conn->real_escape_string($data['contact_number']);
$current_address = $conn->real_escape_string($data['current_address']);
$occupation = $conn->real_escape_string($data['occupation']);
$affiliations = isset($data['affiliations']) ? $conn->real_escape_string($data['affiliations']) : null;
$facebook_link = $conn->real_escape_string($data['facebook_link']);
$date_available = $conn->real_escape_string($data['date_available']);
$transportation = $conn->real_escape_string($data['transportation']);
$manila_pickup_place = isset($data['manila_pickup_place']) ? $conn->real_escape_string($data['manila_pickup_place']) : null;
$other_pickup_location = isset($data['other_pickup_location']) ? $conn->real_escape_string($data['other_pickup_location']) : null;
$allergies = isset($data['allergies']) ? $conn->real_escape_string($data['allergies']) : null;
$medical_conditions = isset($data['medical_conditions']) ? $conn->real_escape_string($data['medical_conditions']) : null;
$team = $conn->real_escape_string($data['team']);

// Check if submission exists
$checkStmt = $conn->prepare("SELECT COUNT(*) FROM volunteer_form_submissions WHERE volunteer_form_submission_id = ?");
$checkStmt->bind_param("i", $volunteer_form_submission_id);
$checkStmt->execute();
$checkStmt->bind_result($count);
$checkStmt->fetch();
$checkStmt->close();

if ($count == 0) {
    http_response_code(404);
    echo json_encode(["message" => "Error: Volunteer form submission with ID '$volunteer_form_submission_id' does not exist."]);
    exit;
}

// Start transaction
$conn->begin_transaction();
try {
    $stmt = $conn->prepare("UPDATE volunteer_form_submissions SET complete_name = ?, nick_name = ?, birthdate = ?, email = ?, contact_number = ?, current_address = ?, occupation = ?, affiliations = ?, facebook_link = ?, date_available = ?, transportation = ?, manila_pickup_place = ?, other_pickup_location = ?, allergies = ?, medical_conditions = ?, team = ? WHERE volunteer_form_submission_id = ?");
    $stmt->bind_param("ssssssssssssssssi", $complete_name, $nick_name, $birthdate, $email, $contact_number, $current_address, $occupation, $affiliations, $facebook_link, $date_available, $transportation, $manila_pickup_place, $other_pickup_location, $allergies, $medical_conditions, $team, $volunteer_form_submission_id);
    
    if (!$stmt->execute()) {
        throw new Exception("Error updating volunteer form submission: " . $stmt->error);
    }
    
    $conn->commit();
    http_response_code(200);
    echo json_encode(["message" => "Volunteer form submission updated successfully."]);

} catch (Exception $e) {
    $conn->rollback();
    http_response_code(500);
    echo json_encode(["message" => "Failed to update volunteer form submission.", "error" => $e->getMessage()]);
}

// Close database connection
$stmt->close();
$conn->close();
?>