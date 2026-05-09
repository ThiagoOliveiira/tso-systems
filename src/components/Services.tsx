import { motion } from 'motion/react';
import { Layers, Zap, ShieldCheck, Database, Globe, Smartphone } from 'lucide-react';

const services = [
  {
    title: 'Sistemas Mobile (Flutter)',
    desc: 'Arquitetura e desenvolvimento de aplicações móveis de alto desempenho para iOS e Android, focadas em escala e UX.',
    icon: Smartphone,
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10'
  },
  {
    title: 'Plataformas Web',
    desc: 'Construção de aplicações web modernas e dashboards complexos que suportam alto volume de dados e usuários.',
    icon: Layers,
    color: 'text-sky-500',
    bg: 'bg-sky-500/10'
  },
  {
    title: 'Engenharia de Backend',
    desc: 'Criação de APIs resilientes e arquiteturas de servidor robustas para sustentar ecossistemas digitais.',
    icon: Zap,
    color: 'text-slate-400',
    bg: 'bg-slate-500/10'
  },
  {
    title: 'Arquitetura de Software',
    desc: 'Definição de bases técnicas sólidas utilizando Clean Architecture e Domain-Driven Design (DDD).',
    icon: ShieldCheck,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'Infraestrutura Cloud',
    desc: 'Implementação de ambientes Cloud (AWS/GCP) seguros, escaláveis e com foco em alta disponibilidade.',
    icon: Database,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/15'
  },
  {
    title: 'Sistemas Customizados',
    desc: 'Desenvolvimento end-to-end de soluções digitais exclusivas, projetadas para as necessidades do seu negócio.',
    icon: Globe,
    color: 'text-sky-400',
    bg: 'bg-sky-500/15'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 mb-16 md:mb-28 gap-12 items-center lg:items-end text-center lg:text-left">
          <div className="lg:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-8 max-w-4xl leading-[0.95] mx-auto lg:mx-0"
            >
              CRIANDO <br />
              <span className="text-zinc-500 uppercase tracking-tighter">Resiliência Digital.</span>
            </motion.h2>
            <div className="h-[2px] w-32 bg-cyan-500 mx-auto lg:mx-0" />
          </div>
          <div className="lg:col-span-4 lg:pb-3">
            <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-light border-l lg:border-l border-white/5 pl-0 lg:pl-8 border-none lg:border-solid">
              Expertise técnica que elimina a complexidade, permitindo que sua visão ganhe vida através de infraestrutura estável e interfaces fluidas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="p-5 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] glass-card group relative overflow-hidden flex flex-col items-center sm:items-start text-center sm:text-left h-full"
            >
              {/* Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.03] to-transparent blur-3xl group-hover:from-cyan-500/10 transition-all duration-700" />
              
              <div className={`w-10 h-10 sm:w-14 sm:h-14 bg-zinc-900 border border-white/[0.05] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-8 group-hover:border-cyan-500/30 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-500`}>
                <service.icon className="text-zinc-400 group-hover:text-cyan-400 transition-colors w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <h3 className="text-white font-extrabold text-sm sm:text-lg md:text-xl mb-2 sm:mb-4 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{service.title}</h3>
              <p className="text-zinc-500 text-[11px] sm:text-xs md:text-sm leading-snug sm:leading-relaxed font-light flex-grow">
                {service.desc}
              </p>

              <div className="mt-4 sm:mt-8 pt-4 sm:pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:flex">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Explorar_Módulo</span>
                <div className="w-6 h-6 rounded-full border border-zinc-800 flex items-center justify-center">
                   <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
