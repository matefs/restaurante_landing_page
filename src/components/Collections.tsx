import { SectionTag } from './ui/SectionTag';
import { WhatsAppIcon } from './ui/icons';

export const Collections = () => (
  <section id="eventos" className="py-24 bg-[#131313] px-6 md:px-16">
    <div className="max-w-7xl mx-auto">
      <SectionTag>Especialidades</SectionTag>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

        {/* Mini Hambúrgueres — card principal */}
        <div className="group relative overflow-hidden rounded-xl h-[380px] md:h-[500px] bg-[#1a1917]">
          <img
            src="/Fotos%20pro_/IMG_1836.JPG"
            loading="lazy" decoding="async"
            className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-[2s]"
            alt="Mini Hambúrgueres Artesanais"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0d]/95 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <span className="bg-[#1a6b3c]/30 border border-[#1a6b3c]/60 text-[#a8d5b5] text-[9px] font-bold px-4 py-2 rounded-md uppercase tracking-widest mb-4 inline-block">
              Carro-chefe da Casa
            </span>
            <h3 className="text-3xl font-serif font-bold text-white mb-5">Mini Hambúrgueres</h3>
            <a
              href="https://wa.me/5548984552026"
              target="_blank"
              rel="noopener noreferrer"
              className="golden-button"
            >
              <WhatsAppIcon />
              <span className="golden-text">Reservar Mesa</span>
            </a>
          </div>
        </div>

        {/* Pizzas */}
        <div className="group relative overflow-hidden rounded-xl h-[380px] md:h-[500px] bg-[#1a1917]">
          <img
            src="/Fotos%20pro_/IMG_1955.jpg"
            loading="lazy" decoding="async"
            className="w-full h-full object-cover transition-all duration-700"
            alt="Pizzas"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0d]/85 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <span className="bg-[#b31422]/20 border border-[#b31422]/40 text-[#e8a0a8] text-[9px] font-bold px-4 py-2 rounded-md uppercase tracking-widest mb-4 inline-block">
              Forno a Lenha
            </span>
            <h4 className="text-2xl font-serif text-white mb-2">Pizzas</h4>
            <p className="text-white/50 text-sm font-light">Salgadas e doces, saindo direto do forno.</p>
          </div>
        </div>

        {/* Acompanhamentos */}
        <div className="group relative overflow-hidden rounded-xl h-[380px] md:h-[500px] bg-[#1a1917]">
          <img
            src="/Fotos%20pro_/IMG_1927.jpg"
            loading="lazy" decoding="async"
            className="w-full h-full object-cover transition-all duration-700"
            alt="Acompanhamentos"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0d]/85 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <span className="bg-[#c9a96e]/20 border border-[#c9a96e]/40 text-[#e8dfc8] text-[9px] font-bold px-4 py-2 rounded-md uppercase tracking-widest mb-4 inline-block">
              Incluído no Rodízio
            </span>
            <h4 className="text-2xl font-serif text-white mb-2">Acompanhamentos</h4>
            <p className="text-white/50 text-sm font-light">Saladas, sopas, massas e muito mais.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
);
