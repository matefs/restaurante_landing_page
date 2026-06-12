import { motion } from 'framer-motion';

interface SectionTagProps {
  children: React.ReactNode;
  light?: boolean;
}

export const SectionTag = ({ children, light = false }: SectionTagProps) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-3 mb-6"
  >
    <span className={`w-8 h-px ${light ? 'bg-white/50' : 'bg-[#c9a96e]'}`}></span>
    <span className={`text-[10px] font-bold uppercase tracking-[0.4em] ${light ? 'text-white/60' : 'text-[#c9a96e]'}`}>
      {children}
    </span>
  </motion.div>
);
