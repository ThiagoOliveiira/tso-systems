import { motion } from 'motion/react';
import { Smartphone, CheckCircle2 } from 'lucide-react';

const stacks = [
  { name: 'Flutter & Dart', focus: 'Excelência multi-plataforma com componentes de UI de alta fidelidade.' },
  { name: 'Sistemas Web', focus: 'Aplicações React modernas integradas a backends escaláveis em Node.js ou Go.' },
  { name: 'Cloud Native', focus: 'Infraestrutura AWS / GCP focada em custo-benefício e segurança.' },
  { name: 'Clean Architecture', focus: 'Domain-Driven Design (DDD) para manter sistemas fáceis de evoluir.' },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-10 md:mb-12 tracking-tight uppercase">
                A Base de <br />
                <span className="text-zinc-500 italic font-serif normal-case tracking-normal">Sistemas Confiáveis.</span>
              </h2>
              
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                {stacks.map((stack, i) => (
                  <motion.div
                    key={stack.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-6 group p-4 sm:p-6 glass-card rounded-2xl"
                  >
                    <div className="w-8 h-8 shrink-0 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                      <CheckCircle2 size={16} className="text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white mb-1 uppercase tracking-wide text-[10px] sm:text-xs">{stack.name}</h4>
                      <p className="text-zinc-500 text-[11px] sm:text-sm font-light leading-snug sm:leading-relaxed">{stack.focus}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-cyan-500/5 blur-[100px] rounded-full" />
              <div className="relative z-10 glass rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 border-white/[0.03]">
                <div className="flex flex-col items-center md:flex-row text-center md:text-left gap-5 mb-8 md:mb-12">
                  <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl bg-white text-zinc-950 flex items-center justify-center font-black text-2xl shadow-2xl">TO</div>
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-black text-white leading-none">Thiago Oliveira</h3>
                    <p className="text-cyan-400 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em]">Especialista Principal @ TSO Systems</p>
                  </div>
                </div>

                <div className="space-y-8 md:space-y-10">
                  <p className="text-zinc-300 text-base md:text-xl leading-relaxed italic font-serif text-center md:text-left">
                    "Na TSO Systems, não apenas escrevemos código. Arquitetamos soluções que resolvem problemas reais de negócio. Nosso foco é construir experiências Web e Mobile que os usuários amam e os desenvolvedores confiam."
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 md:p-8 bg-zinc-900/50 rounded-2xl md:rounded-3xl border border-white/5 flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
                      <div className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest mb-1">Arquitetura</div>
                      <div className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">Escalabilidade</div>
                    </div>
                    <div className="p-6 md:p-8 bg-zinc-900/50 rounded-2xl md:rounded-3xl border border-white/5 flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
                      <div className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest mb-1">Execução</div>
                      <div className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">Performance</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
