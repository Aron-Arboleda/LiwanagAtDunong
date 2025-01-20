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
$requiredFields = ['volunteer_form_submission_id', 'complete_name', 'nick_name', 'age', 'birthdate', 'email', 'contact_number', 'locality', 'occupation', 'facebook_link', 'availability_date1', 'team'];

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
$questions = isset($data['questions']) ? $conn->real_escape_string($data['questions']) : null;
$is_archived = isset($data['is_archived']) ? (bool) $data['is_archived'] : false;
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
    $stmt = $conn->prepare("UPDATE volunteer_form_submissions SET complete_name = ?, nick_name = ?, age = ?, birthdate = ?, email = ?, contact_number = ?, locality = ?, occupation = ?, affiliation = ?, facebook_link = ?, availability_date1 = ?, availability_date2 = ?, availability_date3 = ?, questions = ?, is_archived = ?, team = ? WHERE volunteer_form_submission_id = ?");
    $stmt->bind_param("ssisssssssssssssi", $complete_name, $nick_name, $age, $birthdate, $email, $contact_number, $locality, $occupation, $affiliation, $facebook_link, $availability_date1, $availability_date2, $availability_date3, $questions, $is_archived, $team, $volunteer_form_submission_id);
    
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
