export const FilterBar = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { value: 'all', label: 'All', count: null },
    { value: 'completed', label: 'Completed', count: null },
    { value: 'active', label: 'Active', count: null }
  ];

  return (
    <div className="flex items-center justify-between bg-white/10 p-2 rounded-xl border border-white/20 mb-4">
      <span className="text-white text-xs font-medium">📋 Show:</span>
      <div className="flex gap-2">
        {filters.map(filter => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition
              ${currentFilter === filter.value
                ? "bg-white text-purple-700 shadow-md"
                : "bg-white/20 text-white hover:bg-white/30"
              }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};
export default FilterBar;
