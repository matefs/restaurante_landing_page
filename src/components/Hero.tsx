import { CheckCircle2, UtensilsCrossed } from 'lucide-react';
import { SectionTag } from './ui/SectionTag';
import { Reveal } from './ui/Reveal';
import { WhatsAppIcon } from './ui/icons';

export const Hero = () => (
  <section className="pt-32 pb-16 min-h-[85vh] flex items-center px-6 md:px-16 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-7">
        <Reveal>
          <SectionTag>Canasvieiras, Florianópolis</SectionTag>
          <h1 className="font-serif text-6xl md:text-8xl text-[#e8dfc8] leading-[1] font-bold tracking-tight mb-8">
            O Melhor <br />
            <span className="text-[#c9a96e] italic font-normal">Rodízio Triplo.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#9e9890] max-w-xl font-light leading-relaxed mb-10">
            Mini hambúrgueres artesanais, pizzas e massas sem limite. Venha viver a experiência do{' '}
            <span className="text-[#c9a96e] italic font-medium underline decoration-1 underline-offset-4">1º rodízio de mini hambúrguer gourmet</span> de Canasvieiras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
        </Reveal>
      </div>
      <div className="lg:col-span-5 hidden lg:block relative">
        <div className="aspect-[4/5] bg-[#2a2a2a] rounded-xl overflow-hidden shadow-2xl relative">
          <img
            src="/Fotos%20pro_/IMG_1844.jpg"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
            alt="Mini hambúrgueres artesanais do Vantaggio Restaurante em Canasvieiras"
          />
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
        <div className="absolute -bottom-10 -left-10 bg-[#1c1b1b] p-6 rounded-xl shadow-xl z-20 border border-[#2e2b27]/20">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#c9a96e]" size={24} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#e8dfc8]">Pioneiros em Mini Hambúrguer Gourmet</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
