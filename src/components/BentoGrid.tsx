import { Beef, ShieldCheck, Users, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionTag } from './ui/SectionTag';
import { Reveal } from './ui/Reveal';

const goldBorder = 'linear-gradient(135deg, #f5d050 0%, #c9a96e 25%, #7a5218 50%, #c9a96e 75%, #f0c040 100%)';

const Lightspot = ({ color = 'rgba(201,169,110,0.18)', position = '25% 15%' }: { color?: string; position?: string }) => (
  <div
    className="absolute inset-0 pointer-events-none z-0"
    style={{ background: `radial-gradient(circle at ${position}, ${color} 0%, transparent 58%)` }}
  />
);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export const BentoGrid = () => (
  <section id="ambiente" className="py-24 bg-[#131313] px-6 md:px-16">
    <div className="max-w-7xl mx-auto">
      <Reveal>
        <SectionTag>Destaques</SectionTag>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#e8dfc8] mb-12">Os Pilares da Experiência</h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[650px]">

        {/* Main card */}
        <motion.div className="md:col-span-2 md:row-span-2" {...fadeUp(0.05)}>
          <div className="h-full" style={{ background: goldBorder, padding: '1.5px', borderRadius: '13px' }}>
            <div className="bg-[#1c1b1b] rounded-xl p-6 md:p-10 flex flex-col justify-between overflow-hidden relative group h-full">
              <img src="/Fotos%20pro_/IMG_1902.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-50" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#c9a96e] flex items-center justify-center rounded-lg mb-6">
                  <Beef className="text-white" size={24} />
                </div>
                <h3 className="text-2xl md:text-4xl font-serif text-white leading-tight mb-4">1º Rodízio de<br />Mini Hambúrguer</h3>
                <p className="text-white/60 font-light text-base md:text-lg max-w-xs leading-relaxed">
                  Pioneiros em Canasvieiras no rodízio de mini hambúrgueres artesanais gourmet. Cada hambúrguer preparado com ingredientes selecionados e muito sabor.
                </p>
              </div>
              <div className="relative z-10 mt-8 pt-8 border-t border-white/10">
                <span className="text-[10px] font-bold text-[#c9a96e] uppercase tracking-[0.3em]">Pioneiros em Canasvieiras</span>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a96e]/10 rounded-full blur-[100px] -mr-32 -mt-32" />
            </div>
          </div>
        </motion.div>

        {/* Sem cobranças */}
        <motion.div className="md:col-span-2" {...fadeUp(0.12)}>
          <div className="h-full" style={{ background: goldBorder, padding: '1.5px', borderRadius: '13px' }}>
            <div className="bg-[#201f1f] rounded-xl p-8 flex flex-col justify-between group overflow-hidden relative h-full">
              <Lightspot color="rgba(201,169,110,0.14)" position="80% 10%" />
              <div className="flex justify-between items-start relative z-10">
                <ShieldCheck className="text-[#c9a96e]" size={32} />
                <div className="text-right">
                  <p className="text-[10px] font-bold text-[#e8dfc8] uppercase tracking-widest">Diferencial</p>
                  <p className="text-2xl font-serif text-[#e8dfc8]">Sem Cobranças Extras</p>
                </div>
              </div>
              <p className="text-[#9e9890] text-sm font-light mt-4 relative z-10">Sem taxa de serviço e sem couvert artístico nos dias de música ao vivo. Só o prazer de comer muito bem pelo preço justo.</p>
            </div>
          </div>
        </motion.div>

        {/* Área Kids */}
        <motion.div {...fadeUp(0.19)}>
          <div className="h-full" style={{ background: goldBorder, padding: '1.5px', borderRadius: '13px', minHeight: '160px' }}>
            <div className="rounded-xl flex flex-col justify-end text-center group transition-all duration-500 relative overflow-hidden h-full">
              <Lightspot color="rgba(255,255,255,0.10)" position="50% 5%" />
              <img src="/area-kids.PNG" alt="Área Kids" className="absolute inset-0 w-full h-full object-cover" />
              <div className="relative z-10 flex flex-row items-center justify-center gap-2 px-4 py-4 bg-black/60 w-full">
                <Users className="text-[#c9a96e]" size={22} />
                <span className="font-bold text-[9px] uppercase tracking-[0.3em] text-[#e8dfc8]">Área Kids</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Música ao Vivo */}
        <motion.div {...fadeUp(0.26)}>
          <div className="h-full" style={{ background: goldBorder, padding: '1.5px', borderRadius: '13px' }}>
            <div className="rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden group h-full" style={{ minHeight: '160px' }}>
              <img src="/ambiente_vantaggio.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-70" />
              <Music className="text-[#e8dfc8] relative z-10" size={28} />
              <span className="font-bold text-[9px] uppercase tracking-[0.3em] text-[#e8dfc8] relative z-10">Música ao Vivo</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);
