const items = [
  "Hambúrgueres Artesanais",
  "Pizzas Salgadas & Doces",
  "Massas Frescas",
  "Sem Taxa de Serviço",
  "Música ao Vivo",
  "Área Kids",
  "Todos os Dias das 18h às 23h30",
  "Canasvieiras, Florianópolis",
  "Aniversariante não Paga",
  "Estacionamento Gratuito",
  "Hambúrgueres Artesanais",
  "Rodízio Triplo Incrível",
];

export const Ticker = () => (
  <div className="bg-[#b8973e] py-10 border-y border-white/5 overflow-hidden">
    <div className="flex animate-marquee whitespace-nowrap gap-8">
      {items.map((text, i) => (
        <div key={i} className="inline-flex items-center gap-6 px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
          <div className="w-2 h-2 bg-[#1a6b3c] rounded-full"></div>
          <span className="text-white/80 font-bold text-[11px] uppercase tracking-[0.3em]">{text}</span>
        </div>
      ))}
    </div>
  </div>
);
