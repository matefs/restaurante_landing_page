import { Star } from 'lucide-react';
import { SectionTag } from './ui/SectionTag';
import { Reveal } from './ui/Reveal';
import { GoogleLogo } from './ui/GoogleLogo';

const reviews = [
  {
    name: "Rafael Silva",
    city: "Florianópolis",
    text: "Local excelente, com música ao vivo e valor justo. Muitas variedades: pizzas, mini hambúrgueres e massas. Foi uma ótima experiência, com certeza voltarei mais vezes!",
  },
  {
    name: "Gabriela Gruber",
    city: "Florianópolis",
    text: "O melhor rodízio que eu e meu marido já fomos na vida! Sensacional! Atendimento ótimo, as pizzas maravilhosas, muito gostoso, o que pedimos veio. Pizza quentinha, recheio generoso! Vale muito a pena!",
  },
  {
    name: "Fernando Rodrigues",
    city: "Florianópolis",
    text: "Local agradável, atendimento muito bom, música ao vivo (não cobra adicional). Pode estacionar na frente. Rodízio de hambúrguer top demais, pizza, massas e no final ainda teve açaí.",
  },
];

export const Testimonials = () => (
  <section className="py-24 bg-[#b8973e] px-6 md:px-16 relative">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="p-6 md:p-10 border border-white/10 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-500 h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#f4b06a" className="text-[#f4b06a]" />)}
                  </div>
                  <GoogleLogo className="text-sm opacity-80" />
                </div>
                <p className="text-white/80 italic font-light leading-relaxed text-lg mb-8">"{rev.text}"</p>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-[10px] uppercase tracking-widest">{rev.name}</p>
                  <p className="text-[#f4b06a] text-[9px] uppercase tracking-[0.2em] mt-1">{rev.city}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white/40">G</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
