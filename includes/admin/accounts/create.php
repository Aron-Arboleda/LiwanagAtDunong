<?php
include "../../config.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    $username = $_POST['username'];
    $password = $_POST['password'];
    $role = $_POST['role'];

    // Check if username already exists
    $checkStmt = $conn->prepare("SELECT COUNT(*) FROM admins WHERE username = ?");
    $checkStmt->bind_param("s", $username);
    $checkStmt->execute();
    $checkStmt->bind_result($count);
    $checkStmt->fetch();
    $checkStmt->close();

    if ($count > 0) {
        echo "Error: Admin '$username' already exists.";
    } else {
        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

        // Insert new admin
        $stmt = $conn->prepare("INSERT INTO admins (username, password, role, created_at, last_login, account_status) VALUES (?, ?, ?, NOW(), NULL, 'active')");
        $stmt->bind_param("sss", $username, $hashedPassword, $role);

        if ($stmt->execute()) {
            echo "Admin '$username' created successfully.";
        } else {
            echo "Error inserting '$username': " . $stmt->error;
        }

        $stmt->close();
    }
}
?>