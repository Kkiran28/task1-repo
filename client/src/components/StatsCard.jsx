export const StatsCard = ({ completed, incomplete }) => {
  return (
    <div className="grid grid-cols-2 gap-3 mb-4">
      <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
        <p className="text-white/80 text-xs font-medium">✅ Completed</p>
        <p className="text-3xl font-bold text-yellow-300">{completed}</p>
      </div>
      <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
        <p className="text-white/80 text-xs font-medium">🔄 Incomplete</p>
        <p className="text-3xl font-bold text-pink-300">{incomplete}</p>
      </div>
    </div>
  );
};