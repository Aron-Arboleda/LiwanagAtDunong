<?php
// Include the database connection
include "../config.php";

// Error handling
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
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

// Sanitize input
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

// Agreement fields (default TRUE)
$liwanag_at_dunong_agreement = isset($data['liwanag_at_dunong_agreement']) ? (int) $data['liwanag_at_dunong_agreement'] : 1;
$goals_and_objectives_agreement = isset($data['goals_and_objectives_agreement']) ? (int) $data['goals_and_objectives_agreement'] : 1;
$tasks_activities_agreement = isset($data['tasks_activities_agreement']) ? (int) $data['tasks_activities_agreement'] : 1;
$transportation_agreement = isset($data['transportation_agreement']) ? (int) $data['transportation_agreement'] : 1;
$itinerary_agreement = isset($data['itinerary_agreement']) ? (int) $data['itinerary_agreement'] : 1;
$no_cancellation_agreement = isset($data['no_cancellation_agreement']) ? (int) $data['no_cancellation_agreement'] : 1;
$transpo_contribution_agreement = isset($data['transpo_contribution_agreement']) ? (int) $data['transpo_contribution_agreement'] : 1;

// Insert query
$stmt = $conn->prepare("
    INSERT INTO volunteer_form_submissions (
        complete_name, nick_name, birthdate, email, contact_number, current_address, occupation, affiliations, facebook_link, 
        date_available, transportation, manila_pickup_place, other_pickup_location, allergies, medical_conditions, team, 
        liwanag_at_dunong_agreement, goals_and_objectives_agreement, tasks_activities_agreement, transportation_agreement, 
        itinerary_agreement, no_cancellation_agreement, transpo_contribution_agreement
    ) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
");

$stmt->bind_param(
    "ssssssssssssssssiiiiiii",
    $complete_name, $nick_name, $birthdate, $email, $contact_number, $current_address, $occupation, $affiliations, 
    $facebook_link, $date_available, $transportation, $manila_pickup_place, $other_pickup_location, $allergies, 
    $medical_conditions, $team, $liwanag_at_dunong_agreement, $goals_and_objectives_agreement, $tasks_activities_agreement, 
    $transportation_agreement, $itinerary_agreement, $no_cancellation_agreement, $transpo_contribution_agreement
);

if ($stmt->execute()) {
    http_response_code(201);
    echo json_encode(["message" => "Submission created successfully."]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Failed to create submission.", "error" => $stmt->error]);
}

// Close resources
$stmt->close();
$conn->close();
?>
