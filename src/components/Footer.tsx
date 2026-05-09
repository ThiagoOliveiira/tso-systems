import { Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 border-t border-zinc-900 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-xl shadow-2xl group-hover:bg-cyan-400 group-hover:scale-105 transition-all duration-500">
            <Terminal size={22} className="stroke-[2.5px]" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white uppercase">
            TSO <span className="text-zinc-500 group-hover:text-cyan-400 transition-colors">Systems</span>
          </span>
        </div>

        <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-left">
          © {currentYear} TSO Systems. Thiago Oliveira & Parceiros.
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-[10px] uppercase tracking-widest font-bold">
          <a href="#" className="text-zinc-500 hover:text-cyan-400 transition-colors">Privacidade</a>
          <a href="#" className="text-zinc-500 hover:text-cyan-400 transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
