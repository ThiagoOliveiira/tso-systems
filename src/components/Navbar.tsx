import { motion } from 'motion/react';
import { Terminal, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Capacidades', href: '#services' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 md:gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 bg-white text-black flex items-center justify-center rounded-lg md:rounded-xl shadow-2xl group-hover:bg-cyan-400 group-hover:scale-105 transition-all duration-500">
            <Terminal size={18} className="md:size-[22px] stroke-[2.5px]" />
          </div>
          <span className="text-lg md:text-xl font-black tracking-tighter text-white uppercase">
            TSO <span className="text-zinc-500 group-hover:text-cyan-400 transition-colors">Systems</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2.5 glass border-white/[0.1] text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-xl transition-all inline-block"
          >
            Connect_Agora
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-zinc-950 border-b border-white/5 p-8 space-y-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full py-5 bg-white text-black text-center font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl active:scale-95 transition-transform"
          >
            Iniciar_Descoberta
          </a>
        </motion.div>
      )}
    </nav>
  );
}
