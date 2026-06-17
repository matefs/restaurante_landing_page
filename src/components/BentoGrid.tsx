import { Beef, ShieldCheck, Users, Music } from 'lucide-react';
import { SectionTag } from './ui/SectionTag';

export const BentoGrid = () => (
  <section id="ambiente" className="py-24 bg-[#131313] px-6 md:px-16">
    <div className="max-w-7xl mx-auto">
      <SectionTag>Destaques</SectionTag>
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#e8dfc8] mb-12">Os Pilares da Experiência</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[650px]">
        <div className="md:col-span-2 md:row-span-2 bg-[#b8973e] rounded-xl p-6 md:p-10 flex flex-col justify-between overflow-hidden relative group">
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

        <div className="md:col-span-2 bg-[#201f1f] rounded-xl p-8 flex flex-col justify-between border border-[#2e2b27]/30 hover:border-[#c9a96e]/50 transition-all group">
          <div className="flex justify-between items-start">
            <ShieldCheck className="text-[#c9a96e]" size={32} />
            <div className="text-right">
              <p className="text-[10px] font-bold text-[#e8dfc8] uppercase tracking-widest">Diferencial</p>
              <p className="text-2xl font-serif text-[#e8dfc8]">Sem Cobranças Extras</p>
            </div>
          </div>
          <p className="text-[#9e9890] text-sm font-light mt-4">Sem taxa de serviço e sem couvert artístico nos dias de música ao vivo. Só o prazer de comer muito bem pelo preço justo.</p>
        </div>

        <div className="border border-[#2e2b27]/30 rounded-xl flex flex-col justify-end text-center group transition-all duration-500 relative overflow-hidden min-h-[160px]">
          <img
            src="/area-kids.PNG"
            alt="Área Kids"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-row items-center justify-center gap-2 px-4 py-4 bg-black/60 w-full">
            <Users className="text-[#c9a96e]" size={22} />
            <span className="font-bold text-[9px] uppercase tracking-[0.3em] text-[#e8dfc8]">Área Kids</span>
          </div>
        </div>

        <div className="bg-[#2a2a2a] rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden group">
          <Music className="text-[#e8dfc8] group-hover:scale-110 transition-transform" size={28} />
          <span className="font-bold text-[9px] uppercase tracking-[0.3em] text-[#e8dfc8]">Música ao Vivo</span>
          <div className="absolute inset-0 bg-[#c9a96e]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  </section>
);
