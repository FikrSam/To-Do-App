# My To-Do List App

A simple to-do list web application using HTML, CSS, JavaScript, PHP, and MySQL.

## Features

- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Task completion summary


## How to Use

1. **Clone the repository** (or copy the project folder):
   ```
   git clone https://github.com/FikrSam/To-Do-App.git
   ```

2. **Set up the MySQL database**:
   - Create a database named `todo_app` in your MySQL server.
   - Run the following SQL command to create the `tasks` table:
     ```sql
     CREATE TABLE tasks (
       id INT AUTO_INCREMENT PRIMARY KEY,
       text VARCHAR(255) NOT NULL,
       completed BOOLEAN NOT NULL DEFAULT 0,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );
     ```

3. **Configure the database connection**:
   - Open `backend/db.php`.
   - Update the `$user` and `$pass` variables to match your local MySQL credentials:
     ```php
     $user = 'your_username';
     $pass = 'your_password';
     ```

**Option A: Using PHP's built in server**
4. **Start a local server**:
   - You can use PHP’s built-in server. Open a terminal in the `To-Do app` directory and run:
     ```
     php -S localhost:8000
     ```
   - Then visit `http://localhost:8000` in your browser.

**Option B: Using XAMPP**
4. **Set up with XAMPP**:
   - Make sure XAMPP is installed and running (start Apache and MySQL from the XAMPP control panel).
   - Move or copy the entire To-Do app folder to your htdocs directory:
      ```
      C:\xampp\htdocs\To-Do-App
      ```
   - Open your browser and go to:
      ```
      http://localhost/To-Do-App
      ```
   - Ensure your database is created as described in Step 2.

5. **Add, complete, or delete tasks**:
   - Use the input box to add a new task.
   - Click the checkbox to mark it complete.
   - Click the × button to delete it.


## Project Structure

```
To-Do app/
│
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── backend/
│   ├── db.php
│   ├── add_task.php
│   ├── delete_task.php
│   ├── get_tasks.php
│   └── toggle_task.php
└── sql/
    └── schema.sql
```
