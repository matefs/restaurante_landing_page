import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#b8973e]/80 backdrop-blur-md z-[60]"
        />
        <motion.aside
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed left-0 top-0 h-full z-[70] w-full max-w-sm bg-[#131313] p-12 flex flex-col"
        >
          <div className="flex justify-between items-center mb-20">
            <span className="font-serif text-3xl font-bold text-[#e8dfc8]">Vantaggio</span>
            <button onClick={onClose} className="p-3 bg-[#201f1f] rounded-md"><X size={24} /></button>
          </div>
          <nav className="flex flex-col gap-10">
            {[
              { label: 'Cardápio', href: '#cardapio' },
              { label: 'Ambiente', href: '#ambiente' },
              { label: 'Eventos', href: '#eventos' },
              { label: 'Reservas', href: '#reservas' },
            ].map((item) => (
              <a key={item.label} href={item.href} onClick={onClose} className="text-5xl font-serif text-[#e8dfc8] hover:text-[#c9a96e]">
                {item.label}
              </a>
            ))}
          </nav>
        </motion.aside>
      </>
    )}
  </AnimatePresence>
);
