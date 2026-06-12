import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { WhatsAppIcon } from './ui/icons';

interface HeaderProps {
  setIsDrawerOpen: (open: boolean) => void;
}

export const Header = ({ setIsDrawerOpen }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-16 py-5 flex justify-between items-center ${scrolled ? 'bg-[#131313]/90 backdrop-blur-xl border-b border-[#2e2b27]/40 shadow-sm' : 'bg-transparent'}`}>
      <div className="flex items-center gap-6">
        <button onClick={() => setIsDrawerOpen(true)} className="p-2 -ml-2 lg:hidden text-[#e8dfc8]">
          <Menu size={24} />
        </button>
        <img
          src="/vantaggiorestaurante_logo.png"
          alt="Vantaggio Restaurante"
          className="h-10 w-auto rounded-full"
        />
      </div>

      <nav className="hidden lg:flex gap-10 items-center">
        {[
          { label: 'Cardápio', href: '#cardapio' },
          { label: 'Ambiente', href: '#ambiente' },
          { label: 'Eventos', href: '#eventos' },
          { label: 'Reservas', href: '#reservas' },
        ].map((item) => (
          <a key={item.label} href={item.href} className="text-[10px] font-bold text-[#9e9890] hover:text-[#c9a96e] transition-all uppercase tracking-[0.25em]">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="hidden sm:block">
        <a
          href="https://wa.me/5548984552026"
          target="_blank"
          rel="noopener noreferrer"
          className="golden-button"
        >
          <WhatsAppIcon />
          <span className="golden-text">Fazer Reserva</span>
        </a>
      </div>
    </header>
  );
};
