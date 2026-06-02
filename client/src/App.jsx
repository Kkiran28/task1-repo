import { TaskForm } from "./components/TaskForm";

function App() {
  const handleSubmit = (data) => {
    console.log("Task Data:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <TaskForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;