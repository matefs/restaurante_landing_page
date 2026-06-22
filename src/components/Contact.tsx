import { SectionTag } from './ui/SectionTag';
import { Reveal } from './ui/Reveal';
import { WhatsAppIcon, InstagramIcon } from './ui/icons';

export const Contact = () => (
  <section id="reservas" className="py-32 text-white text-center relative overflow-hidden">
    <img
      src="/vantaggio_lugar_rua.jpg"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-[#0d0c0b]/70" />
    <div className="absolute inset-0" style={{
      background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(184,151,62,0.35) 0%, transparent 70%)',
    }} />

    <Reveal className="max-w-4xl mx-auto px-6 relative z-10">
      <SectionTag light>Reservas</SectionTag>
      <h2 className="text-4xl md:text-8xl font-serif mb-8 md:mb-10 leading-tight">Reserve sua Mesa.</h2>
      <p className="text-white/60 font-light text-lg md:text-xl mb-8 md:mb-16 italic max-w-2xl mx-auto">
        Garanta seu lugar no melhor rodízio de Canasvieiras. Funcionamos todos os dias das 18h às 23h30.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto justify-center">
        <a
          href="https://wa.me/5548984552026"
          target="_blank"
          rel="noopener noreferrer"
          className="golden-button"
        >
          <WhatsAppIcon />
          <span className="golden-text">Reservar pelo WhatsApp</span>
        </a>
        <a
          href="https://instagram.com/vantaggiorestaurante"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-12 py-4 bg-white/10 border border-white/20 text-white rounded-md font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-[#1c1b1b] hover:text-[#e8dfc8] transition-all inline-flex items-center justify-center gap-2"
        >
          <InstagramIcon />
          @vantaggiorestaurante
        </a>
      </div>
    </Reveal>
  </section>
);
