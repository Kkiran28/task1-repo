import { useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { FilterBar } from "./components/FilterBar";
import { SearchBar } from "./components/SearchBar";
import { StatsCard } from "./components/StatsCard";


function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const completed = tasks.filter(task => task.completed).length;
const incomplete = tasks.filter(task => !task.completed).length;
  // ➤ ADD TASK
  const handleSubmit = (data) => {
    const newTask = {
      id: Date.now().toString(),
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      priority: data.priority,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((prev) => [newTask, ...prev]);
  };

  // ➤ TOGGLE COMPLETE
  const handleToggle = (id, value) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: value } : task
      )
    );
  };

  // ➤ DELETE TASK
  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // ➤ EDIT (basic for now)
  const handleEdit = (task) => {
    setEditingTask(task);
    console.log("Editing task:", task);
  };
 
const filteredTasks = tasks.filter((task) => {
  const matchesFilter =
    filter === "completed"
      ? task.completed
      : filter === "active"
      ? !task.completed
      : true;

  const matchesSearch =
    task.title.toLowerCase().includes(searchTerm.toLowerCase());

  return matchesFilter && matchesSearch;
});

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 flex flex-col items-center p-4 gap-4">

      {/* FORM */}
      <div className="w-full max-w-xl">
        <TaskForm
          onSubmit={handleSubmit}
          initialTask={editingTask}
          onCancel={() => setEditingTask(null)}
        />
      </div>
      
      {/* SEARCH BAR (ADD THIS) */}
<div className="w-full max-w-xl">
  <SearchBar
    searchTerm={searchTerm}
    onSearchChange={setSearchTerm}
  />
</div>

      {/* FILTER */}
<div className="w-full max-w-xl">
  <FilterBar currentFilter={filter} onFilterChange={setFilter} />
</div>  
{/* STATS */}
      <div className="w-full max-w-xl">
  <StatsCard completed={completed} incomplete={incomplete} />
</div>    
      {/* LIST / EMPTY STATE */}
      <div className="w-full max-w-xl">
        {filteredTasks.length === 0 ? (
          <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center">
            <p className="text-white/80 text-sm">
              ✨ No tasks found. Create one to get started!
            </p>
          </div>
        ) : (
          <TaskList
            tasks={filteredTasks}
            onToggle={handleToggle}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>

    </div>
  );
}

export default App;