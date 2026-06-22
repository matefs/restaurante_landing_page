import { Star } from 'lucide-react';
import { SectionTag } from './ui/SectionTag';
import { Reveal } from './ui/Reveal';
import { GoogleLogo } from './ui/GoogleLogo';

const reviews = [
  {
    name: "Rafael Silva",
    city: "Florianópolis",
    text: "Local excelente, com música ao vivo e valor justo. Muitas variedades: pizzas, mini hambúrgueres e massas. Foi uma ótima experiência, com certeza voltarei mais vezes!",
    spot: '18% 14%',
  },
  {
    name: "Gabriela Gruber",
    city: "Florianópolis",
    text: "O melhor rodízio que eu e meu marido já fomos na vida! Sensacional! Atendimento ótimo, as pizzas maravilhosas, muito gostoso, o que pedimos veio. Pizza quentinha, recheio generoso! Vale muito a pena!",
    spot: '78% 10%',
  },
  {
    name: "Fernando Rodrigues",
    city: "Florianópolis",
    text: "Local agradável, atendimento muito bom, música ao vivo (não cobra adicional). Pode estacionar na frente. Rodízio de hambúrguer top demais, pizza, massas e no final ainda teve açaí.",
    spot: '30% 8%',
  },
];

const goldBorder = 'linear-gradient(135deg, #f5d050 0%, #c9a96e 25%, #7a5218 50%, #c9a96e 75%, #f0c040 100%)';

export const Testimonials = () => (
  <section className="py-24 px-6 md:px-16 relative" style={{ background: 'linear-gradient(160deg, #e8c060 0%, #c9a96e 40%, #b8973e 75%, #d4aa52 100%)' }}>
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-20 text-center md:text-left gap-8">
        <div>
          <SectionTag light>Clientes</SectionTag>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4">O Que Dizem Nossos Clientes</h2>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-3 bg-white/5 px-6 py-4 rounded-xl border border-white/10">
            <GoogleLogo className="text-base" />
            <div className="h-8 w-px bg-white/10 mx-2" />
            <div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#f4b06a" className="text-[#f4b06a]" />)}
              </div>
              <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest mt-1">4.9/5 • Avaliações Google</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, i) => (
          <Reveal key={i} delay={i * 0.1}>
            {/* Gradient border wrapper */}
            <div style={{ background: goldBorder, padding: '1.5px', borderRadius: '17px' }}>
              <div
                className="relative overflow-hidden rounded-2xl flex flex-col justify-between"
                style={{ background: '#181614', boxShadow: '0 8px 40px rgba(0,0,0,0.45)' }}
              >
                {/* Fixed lightspot — more visible */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at ${rev.spot}, rgba(201,169,110,0.28) 0%, rgba(201,169,110,0.06) 40%, transparent 65%)`,
                  }}
                />

                <div className="relative z-10 p-8 md:p-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={14} fill="#c9a96e" className="text-[#c9a96e]" />
                      ))}
                    </div>
                    <GoogleLogo className="text-sm opacity-50" />
                  </div>
                  <p className="text-[#d0c8b4] italic font-light leading-relaxed text-base md:text-lg">
                    "{rev.text}"
                  </p>
                </div>

                <div className="relative z-10 px-8 md:px-10 pb-8 pt-5 border-t border-[#c9a96e]/12 flex items-center justify-between">
                  <div>
                    <p className="text-[#e8dfc8] font-bold text-[10px] uppercase tracking-widest">{rev.name}</p>
                    <p className="text-[#c9a96e] text-[9px] uppercase tracking-[0.2em] mt-1">{rev.city}</p>
                  </div>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold"
                    style={{
                      background: 'rgba(201,169,110,0.12)',
                      border: '1px solid rgba(201,169,110,0.3)',
                      color: 'rgba(201,169,110,0.8)',
                    }}
                  >
                    G
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
