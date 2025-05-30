// assets/js/script.js

const taskForm = document.getElementById('task-form');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const taskSummary = document.getElementById('task-summary');

async function fetchTasks() {
  const res = await fetch('backend/get_tasks.php');
  const tasks = await res.json();
  renderTasks(tasks);
}

function renderTasks(tasks) {
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'task-item';

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed == 1;
    checkbox.className = 'task-checkbox';
    checkbox.addEventListener('change', () => toggleTask(task.id));

    // Task text
    const span = document.createElement('span');
    span.textContent = task.text;
    span.className = 'task-text';
    if (task.completed == 1) span.classList.add('task-completed');

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '&times;';
    deleteBtn.title = 'Delete Task';
    deleteBtn.addEventListener('click', () => deleteTask(task.id));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });

  const completedCount = tasks.filter(t => t.completed == 1).length;
  const totalCount = tasks.length;
  taskSummary.textContent = totalCount
    ? `${completedCount} of ${totalCount} tasks completed`
    : 'No tasks yet!';
}

async function addTask(text) {
  if (text.trim() === '') return;

  const res = await fetch('backend/add_task.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });

  const data = await res.json();
  if (data.success) {
    newTaskInput.value = '';
    fetchTasks();
  } else {
    alert('Failed to add task');
  }
}

async function toggleTask(id) {
  const res = await fetch('backend/toggle_task.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });

  const data = await res.json();
  if (data.success) {
    fetchTasks();
  } else {
    alert('Failed to toggle task');
  }
}

async function deleteTask(id) {
  const res = await fetch('backend/delete_task.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });

  const data = await res.json();
  if (data.success) {
    fetchTasks();
  } else {
    alert('Failed to delete task');
  }
}

taskForm.addEventListener('submit', e => {
  e.preventDefault();
  addTask(newTaskInput.value);
});

// Initial load
fetchTasks();
