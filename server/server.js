const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();
const PORT = 3000;

// DATA FILE PATH
const DATA_FILE = path.join(__dirname, "data", "tasks.json");

// Middleware
app.use(express.json());

// Read Tasks
const readTasks = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Write Tasks
const writeTasks = (tasks) => {
  fs.writeFileSync(
    DATA_FILE,
    JSON.stringify(tasks, null, 2)
  );
};

console.log("DATA FILE:", DATA_FILE);

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully!");
});

// Get All Tasks
app.get("/api/tasks", (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// Create Task
app.post("/api/tasks", (req, res) => {
  const { title, description, dueDate, priority } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      error: "Title is required",
    });
  }

  const tasks = readTasks();

  const newTask = {
    id: Date.now().toString(),
    title: title.trim(),
    description: description || "",
    dueDate: dueDate || null,
    priority: priority || "medium",
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);

  writeTasks(tasks);

  res.status(201).json(newTask);
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});