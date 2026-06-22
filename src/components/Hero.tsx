import { UtensilsCrossed } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionTag } from './ui/SectionTag';
import { WhatsAppIcon } from './ui/icons';

const WordReveal = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => (
  <span className={className} aria-label={text}>
    {text.split(' ').map((word, i) => (
      <motion.span
        key={i}
        className="inline-block"
        initial={{ opacity: 0, y: 28, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.7, delay: delay + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        {word}{i < text.split(' ').length - 1 ? ' ' : ''}
      </motion.span>
    ))}
  </span>
);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export const Hero = () => (
  <section className="pt-32 pb-16 min-h-[85vh] flex items-center justify-center px-6 md:px-16 overflow-hidden relative">

    {/* Floating burger image — background */}
    <motion.img
      src="/77fa377f-9511-44af-8741-2ebcf17c892e.png"
      alt=""
      aria-hidden="true"
      className="absolute pointer-events-none select-none"
      style={{ width: 520, maxWidth: '80vw', opacity: 0.82 }}
      animate={{ y: [0, -18, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Vignette */}
    <div className="absolute inset-0 pointer-events-none" style={{
      background: 'radial-gradient(ellipse 65% 75% at 50% 50%, transparent 0%, #131313 68%)',
    }} />

    {/* Content */}
    <motion.div
      className="relative z-10 text-center max-w-4xl mx-auto"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <SectionTag>Canasvieiras, Florianópolis</SectionTag>
      </motion.div>

      <h1 className="font-serif text-6xl md:text-8xl text-[#e8dfc8] leading-[1.05] font-bold tracking-tight mb-8 mt-6">
        <WordReveal text="O Melhor" delay={0.2} />
        <br />
        <WordReveal
          text="Rodízio Triplo."
          className="text-[#c9a96e] italic font-normal"
          delay={0.45}
        />
      </h1>

      <motion.p
        className="text-xl md:text-2xl text-[#9e9890] max-w-xl mx-auto font-light leading-relaxed mb-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        Mini hambúrgueres artesanais, pizzas e massas sem limite. Venha viver a experiência do{' '}
        <span className="text-[#c9a96e] italic font-medium underline decoration-1 underline-offset-4">
          1º rodízio de mini hambúrguer gourmet
        </span>{' '}
        de Canasvieiras.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
      >
        <a href="#cardapio" className="golden-button">
          <UtensilsCrossed size={15} />
          <span className="golden-text">Ver o Cardápio</span>
        </a>
        <a
          href="https://wa.me/5548984552026"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-10 py-5 border border-[#2e2b27] text-[#e8dfc8] rounded-md font-bold uppercase text-[10px] tracking-[0.2em] hover:border-[#c9a96e] transition-all text-center inline-flex items-center justify-center gap-2"
        >
          <WhatsAppIcon />
          Fazer Reserva
        </a>
      </motion.div>
    </motion.div>
  </section>
);
