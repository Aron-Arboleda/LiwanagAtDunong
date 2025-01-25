<?php
include "../../config.php";

$page_url = $_POST['page_url'] ?? '';
$ip_address = $_SERVER['REMOTE_ADDR'];

$stmt = $conn->prepare("INSERT INTO page_views (page_url, ip_address) VALUES (?, ?)");
$stmt->bind_param("ss", $page_url, $ip_address);
$stmt->execute();
$stmt->close();
$conn->close();

echo json_encode(["success" => true]);
?>
