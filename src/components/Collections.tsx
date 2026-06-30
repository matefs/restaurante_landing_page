import { SectionTag } from './ui/SectionTag';
import { Reveal } from './ui/Reveal';
import { WhatsAppIcon } from './ui/icons';

const gradientBorder = 'linear-gradient(135deg, #f5d050 0%, #c9a96e 25%, #7a5218 50%, #c9a96e 75%, #f0c040 100%)';

const CollectionCard = ({
  src, alt, badge, badgeStyle, title, description, children,
}: {
  src: string; alt: string; badge: string; badgeStyle: string;
  title: string; description?: string; children?: React.ReactNode;
}) => (
  <div style={{ background: gradientBorder, padding: '1.5px', borderRadius: '13px', flex: 1 }}>
    <div className="group relative overflow-hidden rounded-xl h-[380px] md:h-[500px] bg-[#1a1917] w-full">
      <img
        src={src} loading="lazy" decoding="async"
        className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-[2s]"
        alt={alt}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0d]/95 via-black/20 to-transparent" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 72% 10%, rgba(201,169,110,0.22) 0%, transparent 52%)' }} />
      <div className="absolute bottom-0 left-0 p-8">
        <span className={`${badgeStyle} text-[9px] font-bold px-4 py-2 rounded-md uppercase tracking-widest mb-4 inline-block`}>
          {badge}
        </span>
        <h3 className="text-3xl font-serif font-bold text-white mb-3">{title}</h3>
        {description && <p className="text-white/55 text-sm font-light mb-5 max-w-xs leading-relaxed">{description}</p>}
        {children}
      </div>
    </div>
  </div>
);

export const Collections = () => (
  <section id="eventos" className="py-24 bg-[#131313] px-6 md:px-16">
    <div className="max-w-7xl mx-auto">
      <Reveal>
        <SectionTag>Especialidades</SectionTag>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

        <Reveal delay={0.05}>
          <CollectionCard
            src="/Fotos%20pro_/IMG_1836.JPG"
            alt="Mini Hambúrgueres Artesanais"
            badge="Carro-chefe da Casa"
            badgeStyle="bg-[#1a6b3c]/30 border border-[#1a6b3c]/60 text-[#a8d5b5]"
            title="Mini Hambúrgueres"
            description="Artesanais e preparados na hora, com ingredientes selecionados e sabores que surpreendem."
          >
            <a href="https://wa.me/5548984552026" target="_blank" rel="noopener noreferrer" className="golden-button">
              <WhatsAppIcon />
              <span className="golden-text">Reservar Mesa</span>
            </a>
          </CollectionCard>
        </Reveal>

        <Reveal delay={0.12}>
          <CollectionCard
            src="/Fotos%20pro_/IMG_1955.jpg"
            alt="Pizzas"
            badge="Forno a Lenha"
            badgeStyle="bg-[#b31422]/20 border border-[#b31422]/40 text-[#e8a0a8]"
            title="Pizzas"
            description="Salgadas e doces, com recheio generoso e massa quentinha saindo direto do forno para a sua mesa."
          />
        </Reveal>

        <Reveal delay={0.19}>
          <CollectionCard
            src="/Fotos%20pro_/IMG_1927.jpg"
            alt="Acompanhamentos"
            badge="Incluído no Rodízio"
            badgeStyle="bg-[#c9a96e]/20 border border-[#c9a96e]/40 text-[#e8dfc8]"
            title="Acompanhamentos"
            description="Gratinados, saladas e acompanhamentos que completam o trio perfeito do nosso rodízio."
          />
        </Reveal>

      </div>
    </div>
  </section>
);
