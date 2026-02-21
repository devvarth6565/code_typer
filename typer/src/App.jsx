import Header from './components/Header';
import StatsBoard from './components/StatsBoard';
import TypingArea from './components/TypingArea';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-slate-300 flex justify-center py-12 px-6">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <Header />
        
        <main className="w-full mt-10">
          <StatsBoard />
          <TypingArea />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;