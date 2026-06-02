import { TaskCard } from './TaskCard';

export const TaskList = ({ tasks, onToggle, onEdit, onDelete }) => {
    if (tasks.length === 0) {
        return (
            <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center">
                <p className="text-white/80 text-sm">✨ No tasks found. Create one to get started!</p>
            </div>
        );
    }

    return (
        <div className="space-y-2">
            {tasks.map(task => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};
export default TaskList;