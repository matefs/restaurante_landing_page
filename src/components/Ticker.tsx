import { Beef, Pizza, ChefHat, ShieldCheck, Music, Users, Clock, MapPin, Gift, Car, Star, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const items: { text: string; Icon: LucideIcon }[] = [
  { text: 'Hambúrgueres Artesanais', Icon: Beef },
  { text: 'Pizzas Salgadas & Doces', Icon: Pizza },
  { text: 'Massas Frescas', Icon: ChefHat },
  { text: 'Sem Taxa de Serviço', Icon: ShieldCheck },
  { text: 'Música ao Vivo', Icon: Music },
  { text: 'Área Kids', Icon: Users },
  { text: 'Todos os Dias das 18h às 23h30', Icon: Clock },
  { text: 'Canasvieiras, Florianópolis', Icon: MapPin },
  { text: 'Aniversariante não Paga', Icon: Gift },
  { text: 'Estacionamento Gratuito', Icon: Car },
  { text: 'Rodízio Triplo Incrível', Icon: Award },
  { text: 'Hambúrgueres Artesanais', Icon: Star },
];

export const Ticker = () => (
  <div className="bg-[#b8973e] py-10 border-y border-white/5 overflow-hidden">
    <div className="flex animate-marquee whitespace-nowrap gap-8">
      {[...items, ...items].map(({ text, Icon }, i) => (
        <div
          key={i}
          className="inline-flex shrink-0 items-center gap-3 px-8 py-4 rounded-lg relative overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {/* Fixed lightspot */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18) 0%, transparent 60%)',
            }}
          />
          <Icon size={14} className="text-white/90 relative z-10 shrink-0" />
          <span className="text-white/85 font-bold text-[11px] uppercase tracking-[0.28em] relative z-10 whitespace-nowrap">{text}</span>
        </div>
      ))}
    </div>
  </div>
);
