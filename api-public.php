<?php

// Allow requests from any origin
header("Access-Control-Allow-Origin: *");

// Allow specific HTTP methods
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

// Allow headers like Content-Type
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Set content type to JSON
header("Content-Type: application/json; charset=UTF-8");


header('Content-Type: application/json');
$conn = new mysqli("sql205.infinityfree.com", "if0_38202731", "5RGJzQp9IrMTN", "if0_38202731_culturlingua_public");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM inicios";
$result = $conn->query($sql);

$data = array();
while($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>
