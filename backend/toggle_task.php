<?php
// backend/toggle_task.php
header('Content-Type: application/json');
include 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['id'])) {
    echo json_encode(['success' => false, 'message' => 'Task ID required']);
    exit;
}

$id = (int)$data['id'];

// Fetch current completed state
$result = $conn->query("SELECT completed FROM tasks WHERE id = $id");
if ($result->num_rows === 0) {
    echo json_encode(['success' => false, 'message' => 'Task not found']);
    exit;
}
$row = $result->fetch_assoc();
$newStatus = $row['completed'] ? 0 : 1;

$sql = "UPDATE tasks SET completed = $newStatus WHERE id = $id";
if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true, 'completed' => $newStatus]);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to update']);
}
?>
