<?php

include '../../config.php';

ini_set('session.cookie_lifetime', 259200); // 3 days 
ini_set('session.gc_maxlifetime', 259200);
ini_set('session.cookie_path', '/'); // Makes session cookies accessible site-wide
// ini_set('session.cookie_samesite', 'None');
// ini_set('session.cookie_secure', true); // Only if using HTTPS
// Start session
session_start();

// Check if user is logged in and if session is valid
if (isset($_SESSION['user_id'])) {
    // Session is valid, now check for user data in the database
    $user_id = $_SESSION['user_id'];

    // Query to get the user details from the admins table
    $sql = "SELECT admin_id, username, role, account_status, last_login FROM admins WHERE admin_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user) {
        // Check if account is active
        if ($user['account_status'] == 'active') {
            // Return user data if account is active
            echo json_encode([
                "loggedIn" => true,
                "message" => "User is logged in.",
                "user" => [
                    "user_id" => $user['admin_id'],
                    "user_username" => $user['username'],
                    "user_role" => $user['role'],
                    "user_last_login" => $user['last_login']
                ]
            ]);
        } else {
            // If account is disabled
            echo json_encode([
                "loggedIn" => false,
                "message" => "Your account is disabled. Please contact support."
            ]);
        }
    } else {
        // If user not found in the database
        echo json_encode([
            "loggedIn" => false,
            "message" => "User not found in the database. Please log in again."
        ]);
    }
} else {
    // Session is not valid, return false with an error message
    echo json_encode([
        "loggedIn" => false,
        "message" => "Session expired. Please log in again."
    ]);
}
?>
