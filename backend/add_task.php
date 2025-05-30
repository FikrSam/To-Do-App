<?php
// backend/add_task.php
header('Content-Type: application/json');
include 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['text']) || trim($data['text']) === '') {
    echo json_encode(['success' => false, 'message' => 'Task text is required']);
    exit;
}

$text = $conn->real_escape_string(trim($data['text']));

$sql = "INSERT INTO tasks (text) VALUES ('$text')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true, 'id' => $conn->insert_id]);
} else {
    echo json_encode(['success' => false, 'message' => 'Database insert failed']);
}
?>
