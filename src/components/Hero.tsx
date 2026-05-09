import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Smartphone, Code2, Cpu } from 'lucide-react';

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={targetRef} className="min-h-[120vh] flex items-start pt-28 md:pt-44 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <motion.div
            style={{ y: yText, opacity }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 pr-4 pl-[17px] py-2 rounded-full glass mb-16 border-white/[0.08]"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] animate-pulse" />
              <span className="text-[10px] font-bold text-cyan-200 uppercase tracking-[0.4em] leading-none">
                Engenharia de Excelência Digital
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-10 text-white uppercase">
              Construindo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-zinc-500 italic font-serif normal-case">Software</span> <br />
              que escala.
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl mb-12 leading-relaxed font-light px-1 sm:px-0 mx-auto lg:mx-0">
              A <span className="text-white font-medium font-sans">TSO Systems</span> é uma consultoria de elite focada na intersecção entre design sofisticado e infraestrutura web/mobile de <span className="text-white font-medium font-sans">alta performance.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center w-full sm:w-auto">
              <motion.a 
                href="#contact"
                whileHover={{ y: -4, scale: 1.02, boxShadow: "0 25px 30px -10px rgb(6 182 212 / 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-12 py-5 bg-white text-black text-center font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl transition-all"
              >
                Inicie Sua Visão
              </motion.a>
              <motion.a 
                href="#services"
                whileHover={{ y: -4, scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-12 py-5 glass border-white/[0.08] text-white text-center font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl transition-all"
              >
                Nossas Soluções
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            style={{ y: yCard, scale }}
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            style={{ perspective: "1500px" }}
            className="hidden lg:block relative lg:translate-x-8"
          >
            <div className="relative p-1 glass-card rounded-[3.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-white/[0.01]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-white/[0.02]" />
              
              <div className="relative z-10 p-12 space-y-8">
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.05]">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">Sistema_Ativo // 0xAF42</div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-6 glass border-white/[0.05] rounded-2xl space-y-4"
                  >
                     <Smartphone className="text-cyan-400" size={20} />
                     <div className="space-y-1">
                       <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Arq_Mobile</div>
                       <div className="text-white font-bold">iOS / Android</div>
                     </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-6 glass border-white/[0.05] rounded-2xl space-y-4"
                  >
                     <Code2 className="text-zinc-400" size={20} />
                     <div className="space-y-1">
                       <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Core_Frontend</div>
                       <div className="text-white font-bold">React / Next</div>
                     </div>
                  </motion.div>
                </div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 glass border-white/[0.05] rounded-2xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                      <Cpu className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg leading-tight">Infraestrutura Backend</div>
                      <div className="text-zinc-500 text-xs font-mono mt-1 tracking-wider uppercase">Latência: 24ms // Edge Global</div>
                    </div>
                  </div>
                  <div className="text-emerald-400 text-xs font-mono animate-pulse">● ESTÁVEL</div>
                </motion.div>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-[80px] rounded-full -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 blur-[80px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
