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
    <header
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-500 px-6 md:px-16 py-5 flex justify-between items-center rounded-2xl"
      style={{
        border: '1px solid transparent',
        ...(scrolled ? {
          background: 'rgba(15, 12, 10, 0.45)',
          backdropFilter: 'blur(28px) saturate(160%)',
          WebkitBackdropFilter: 'blur(28px) saturate(160%)',
          borderColor: 'rgba(201,169,110,0.10)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.04)',
        } : {}),
      }}
    >
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
