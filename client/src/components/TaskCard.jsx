const isOverdue = (task) => {
    if (!task.dueDate || task.completed) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(task.dueDate);
    due.setHours(0, 0, 0, 0);
    return due < today;
};

export const TaskCard = ({ task, onToggle, onEdit, onDelete }) => {
    const overdue = isOverdue(task);

    return (
        <div className={`backdrop-blur-xl rounded-2xl p-3 flex items-start justify-between transition
            ${overdue 
                ? 'bg-red-500/20 border border-red-400 shadow-lg shadow-red-500/20'
                : 'bg-white/15 border border-white/20 hover:border-white/40'
            }`}>
            <div className="flex items-start gap-3 flex-1">
                <input
                    type="checkbox"
                    checked={task.completed || false}
                    onChange={() => onToggle(task.id, !task.completed)}
                    className="mt-1 w-4 h-4 rounded cursor-pointer accent-yellow-300"
                />
                <div className="flex-1">
                    <h4 className={`text-sm font-semibold ${task.completed ? 'text-white/60 line-through' : 'text-white'}`}>
                        {task.title}
                    </h4>
                    
                    {overdue && (
                        <div className="mt-1">
                            <span className="bg-red-500 text-white text-[10px] px-2 py-1 rounded-full font-semibold">
                                ⚠ OVERDUE
                            </span>
                        </div>
                    )}
                    
                    {task.description && (
                        <p className="text-white/70 text-xs mt-1">{task.description}</p>
                    )}
                    
                    <div className="flex flex-wrap gap-3 mt-2 text-xs text-white/60">
                        {task.dueDate && (
                            <span className={overdue ? 'text-red-300 font-semibold' : ''}>
                                📅 Due: {new Date(task.dueDate).toLocaleDateString()}
                            </span>
                        )}
                        {task.priority && (
                            <span>🏷️ {task.priority}</span>
                        )}
                        <span>📅 Created: {new Date(task.createdAt).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center gap-2 ml-2">
                <button onClick={() => onEdit(task)} className="text-blue-300 font-bold text-lg hover:text-blue-100 transition">
                    ✏️
                </button>
                <button onClick={() => onDelete(task.id)} className="text-red-400 font-bold text-xl hover:text-red-300 transition">
                    ✕
                </button>
            </div>
        </div>
    );
};
export default TaskCard;