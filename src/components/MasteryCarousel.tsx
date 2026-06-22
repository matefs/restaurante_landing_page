import { useRef } from 'react';
import { MoveLeft, MoveRight } from 'lucide-react';
import { SectionTag } from './ui/SectionTag';
import { Reveal } from './ui/Reveal';

const steps = [
  {
    t: "Mini Hambúrgueres",
    d: "O carro-chefe da casa. Artesanais e preparados na hora, com ingredientes selecionados e sabores que surpreendem.",
    s: "/Fotos%20pro_/IMG_1901.jpg",
    alt: "Mini hambúrgueres artesanais gourmet do Vantaggio Restaurante",
  },
  {
    t: "Pizzas",
    d: "Salgadas e doces, com recheio generoso e massa quentinha saindo direto do forno para a sua mesa.",
    s: "/Fotos%20pro_/IMG_1908.jpg",
    alt: "Pizza artesanal com tomate e manjericão do Vantaggio Restaurante",
  },
  {
    t: "Acompanhamentos",
    d: "Gratinados, saladas e acompanhamentos que completam o trio perfeito do nosso rodízio.",
    s: "/Fotos%20pro_/IMG_1927.jpg",
    alt: "Acompanhamentos e gratinados incluídos no rodízio do Vantaggio",
  },
  {
    t: "Ambiente",
    d: "Salão climatizado, música ao vivo em dias selecionados e área kids. O lugar ideal para toda a família curtir juntos.",
    s: "/ambiente_vantaggio.jpg",
    alt: "Ambiente do Vantaggio Restaurante em Canasvieiras",
  },
];

export const MasteryCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({ left: direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="cardapio" className="py-24 bg-[#201f1f] overflow-hidden">
      <Reveal className="max-w-7xl mx-auto px-6 md:px-16 mb-12 flex justify-between items-end">
        <div>
          <SectionTag>Cardápio</SectionTag>
          <h2 className="text-5xl font-serif font-bold text-[#e8dfc8] mt-4">O Rodízio Triplo</h2>
        </div>
        <div className="hidden md:flex gap-3">
          <button onClick={() => scroll('left')} className="p-4 bg-[#1c1b1b] border border-[#2e2b27] rounded-md text-[#e8dfc8] hover:bg-[#b8973e] hover:text-[#e5e2e1] transition-all">
            <MoveLeft size={20} />
          </button>
          <button onClick={() => scroll('right')} className="p-4 bg-[#1c1b1b] border border-[#2e2b27] rounded-md text-[#e8dfc8] hover:bg-[#b8973e] hover:text-[#e5e2e1] transition-all">
            <MoveRight size={20} />
          </button>
        </div>
      </Reveal>

      <div ref={scrollRef} className="flex gap-6 px-6 md:px-16 overflow-x-auto no-scrollbar scroll-smooth pb-12">
        {steps.map((step, i) => (
          <div
            key={i}
            className="min-w-[300px] md:min-w-[450px] shrink-0 group bg-[#1c1b1b] rounded-xl overflow-hidden relative"
            style={{ boxShadow: '0 0 0 1.5px rgba(201,169,110,0.5), 0 0 28px rgba(201,169,110,0.12)' }}
          >
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{ background: 'radial-gradient(circle at 70% 55%, rgba(201,169,110,0.32) 0%, rgba(201,169,110,0.08) 40%, transparent 65%)' }}
            />
            <div style={{ height: '260px', overflow: 'hidden' }}>
              <img
                src={step.s} alt={step.alt} loading="lazy" decoding="async"
                style={{ width: '100%', height: '260px', objectFit: 'cover', objectPosition: 'center 10%', display: 'block' }}
              />
            </div>
            <div className="p-8 relative z-20">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#c9a96e] mb-2 block">0{i + 1}</span>
              <h3 className="text-2xl font-serif text-[#e8dfc8] mb-3">{step.t}</h3>
              <p className="text-[#9e9890] font-light text-sm leading-relaxed">{step.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
