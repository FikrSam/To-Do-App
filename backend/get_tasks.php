<?php
// backend/get_tasks.php
header('Content-Type: application/json');
include 'db.php';

$sql = "SELECT id, text, completed FROM tasks ORDER BY created_at DESC";
$result = $conn->query($sql);

$tasks = [];
if ($result) {
    while ($row = $result->fetch_assoc()) {
        $tasks[] = $row;
    }
}

echo json_encode($tasks);
?>
