import { useState, useEffect } from 'react';

export const TaskForm = ({ initialTask, onSubmit, onCancel }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('');
    const [titleError, setTitleError] = useState('');

    useEffect(() => {
        if (initialTask) {
            setTitle(initialTask.title);
            setDescription(initialTask.description || '');
            setDueDate(initialTask.dueDate?.split('T')[0] || '');
            setPriority(initialTask.priority || '');
        }
    }, [initialTask]);

    const handleSubmit = () => {
        if (!title.trim()) {
            setTitleError('Title is required');
            return;
        }

        onSubmit({
            title: title.trim(),
            description,
            dueDate,
            priority
        });

        if (!initialTask) {
            setTitle('');
            setDescription('');
            setDueDate('');
            setPriority('');
        }

        setTitleError('');
    };

    return (
        <div className="bg-white/20 backdrop-blur-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 border border-white/30 shadow-xl rounded-3xl p-5 mb-4">
            <div className="space-y-4">

                {/* TITLE */}
                <div>
                    <label className="text-white text-sm font-medium">Task Title *</label>
                    <input
                        type="text"
                        placeholder="Enter task name"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            if (titleError) setTitleError('');
                        }}
                        className="mt-1 w-full rounded-xl bg-white/95 px-3 py-2 text-gray-800 outline-none 
                        focus:ring-2 focus:ring-indigo-400 transition"
                    />
                    {titleError && (
                        <p className="text-red-300 text-xs mt-1">{titleError}</p>
                    )}
                </div>

                {/* DESCRIPTION */}
                <div>
                    <label className="text-white text-sm font-medium">Description</label>
                    <textarea
                        rows="2"
                        placeholder="Add task details"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 w-full rounded-xl bg-white/95 px-3 py-2 text-gray-800 outline-none 
                        focus:ring-2 focus:ring-indigo-400 transition"
                    />
                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 gap-3">

                    {/* DATE */}
                    <div>
                        <label className="text-white text-sm font-medium">Due Date</label>
                        <input
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            className="mt-1 w-full rounded-xl bg-white/95 px-3 py-2 text-gray-800 outline-none 
                            focus:ring-2 focus:ring-indigo-400 transition"
                        />
                    </div>

                    {/* PRIORITY */}
                    <div>
                        <label className="text-white text-sm font-medium">Priority</label>
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className="mt-1 w-full rounded-xl bg-white/95 px-3 py-2 text-gray-800 outline-none 
                            focus:ring-2 focus:ring-indigo-400 transition"
                        >
                            <option value="">Select priority</option>
                            <option value="high">🔥 High</option>
                            <option value="medium">⚡ Medium</option>
                            <option value="low">🧊 Low</option>
                        </select>
                    </div>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 pt-2">

                    {/* MAIN BUTTON (MATCHES FULL UI BACKGROUND THEME) */}
                    <button
                        onClick={handleSubmit}
                        className="flex-1 rounded-xl bg-gradient-to-r from-yellow-300 to-pink-200 via-purple-600 to-pink-500 
                        py-2 font-bold text-white shadow-lg hover:shadow-purple-500/40 hover:scale-[1.02] transition"
                    >
                        {initialTask ? 'Update Task' : '+ Add Task'}
                    </button>

                    {/* CANCEL BUTTON */}
                    {initialTask && (
                        <button
                            onClick={onCancel}
                            className="px-4 rounded-xl bg-white/25 text-white py-2 font-semibold 
                            hover:bg-white/35 transition"
                        >
                            Cancel
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
};