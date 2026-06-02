export const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="🔍 Search tasks by title..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded-xl bg-white/90 px-4 py-2 text-gray-800 outline-none focus:ring-2 focus:ring-yellow-300 transition"
      />
    </div>
  );
};