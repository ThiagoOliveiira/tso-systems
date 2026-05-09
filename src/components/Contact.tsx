import { motion } from 'motion/react';
import { Mail, MessageSquare, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="h-1 w-20 bg-cyan-500 mb-10 mx-auto lg:mx-0" />
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-none mb-10 uppercase">
                Sessão de <br />
                <span className="text-zinc-500 italic font-serif normal-case tracking-normal">Descoberta Estratégica.</span>
              </h2>
              <p className="text-zinc-500 text-balance text-base md:text-lg leading-relaxed mb-12 lg:mb-16 font-light">
                Interessado em levar sua infraestrutura digital para o próximo nível? Vamos discutir sua visão e como podemos arquitetar o futuro da sua empresa.
              </p>

              <div className="grid gap-8 lg:gap-10 w-full">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8 group text-center sm:text-left">
                  <div className="w-12 h-12 shrink-0 rounded-xl glass border-white/[0.05] flex items-center justify-center group-hover:border-cyan-500/50 transition-all shadow-xl group-hover:shadow-cyan-500/10">
                    <Mail size={18} className="text-cyan-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold">Comunicação_Direta</div>
                    <a href="mailto:hello@tsosystems.com" className="text-base sm:text-lg font-bold text-white hover:text-cyan-400 transition-colors break-all">hello@tsosystems.com</a>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8 group text-center sm:text-left">
                  <div className="w-12 h-12 shrink-0 rounded-xl glass border-white/[0.05] flex items-center justify-center group-hover:border-cyan-500/50 transition-all shadow-xl group-hover:shadow-cyan-500/10">
                    <Linkedin size={18} className="text-cyan-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold">Acesso_Rede</div>
                    <a href="https://www.linkedin.com/in/thiago-oliveira-3a93a1181/" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-bold text-white hover:text-cyan-400 transition-colors">Thiago Oliveira</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border-white/[0.03] shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em] ml-1">Identidade_Completa</label>
                    <input 
                      type="text" 
                      placeholder="Nome completo..." 
                      className="w-full bg-zinc-950/50 border border-white/[0.05] rounded-2xl px-6 py-4 md:py-5 focus:outline-none focus:border-cyan-500/50 transition-all text-white placeholder:text-zinc-800 font-light"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em] ml-1">Canal_Email</label>
                    <input 
                      type="email" 
                      placeholder="E-mail corporativo..." 
                      className="w-full bg-zinc-950/50 border border-white/[0.05] rounded-2xl px-6 py-4 md:py-5 focus:outline-none focus:border-cyan-500/50 transition-all text-white placeholder:text-zinc-800 font-light"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em] ml-1">Detalhes_Breves</label>
                  <textarea 
                    rows={4}
                    placeholder="Descreva os desafios técnicos..." 
                    className="w-full bg-zinc-950/50 border border-white/[0.05] rounded-2xl px-6 py-4 md:py-5 focus:outline-none focus:border-cyan-500/50 transition-all text-white placeholder:text-zinc-800 font-light resize-none"
                  />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.01, backgroundColor: "#fff", color: "#000" }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-5 glass border-white/[0.1] text-white font-black uppercase tracking-[0.4em] text-[10px] rounded-2xl transition-all shadow-xl"
                >
                  Enviar_Transmissão
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
