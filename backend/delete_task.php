<?php
// backend/delete_task.php
header('Content-Type: application/json');
include 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['id'])) {
    echo json_encode(['success' => false, 'message' => 'Task ID required']);
    exit;
}

$id = (int)$data['id'];

$sql = "DELETE FROM tasks WHERE id = $id";
if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to delete']);
}
?>
