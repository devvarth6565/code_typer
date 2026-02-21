export default function Header() {
    return (
      <header className="flex justify-between items-center w-full">
        <div className="flex items-center text-5xl font-bold tracking-tight">
          <span className="text-yellow-400">{'<Coder'}</span>
          <span className="text-white">{'Typer'}</span>
          <span className="text-white ml-4">{'/>'}</span>
        </div>
        <button className="px-5 py-2 border border-slate-600 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
          Login
        </button>
      </header>
    );
  }