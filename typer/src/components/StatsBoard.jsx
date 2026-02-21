export default function StatsBoard() {
  return (
    <div className="flex flex-col gap-5 w-full text-xl mb-6">
      <div className="flex items-center gap-8">
        <div>
          <span className="text-slate-400">Time: </span>
          <span className="text-yellow-400">30s</span>
        </div>
        <div>
          <span className="text-slate-400">WPM: </span>
          <span className="text-white">0</span>
        </div>
        <div>
          <span className="text-slate-400">Acc: </span>
          <span className="text-white">100%</span>
        </div>
      </div>
      
      <div className="flex gap-3">
        {/* Active Tab */}
        <button className="px-4 py-1.5 bg-slate-800 border border-slate-600 rounded-md text-yellow-400 font-semibold">JS</button>
        {/* Inactive Tabs */}
        <button className="px-4 py-1.5 border border-slate-700 rounded-md text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">Python</button>
        <button className="px-4 py-1.5 border border-slate-700 rounded-md text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">C++</button>
      </div>
    </div>
  );
}