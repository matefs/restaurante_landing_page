import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTag } from './ui/SectionTag';

const faqs = [
  {
    q: "Como funciona o rodízio?",
    a: "Nosso rodízio triplo inclui mini hambúrgueres artesanais, pizzas salgadas e doces, e massas frescas — tudo liberado e sem limite! Os itens são trazidos diretamente à sua mesa até você falar basta.",
  },
  {
    q: "Aniversariante não paga?",
    a: "Sim! O aniversariante não paga o rodízio quando acompanhado de um número mínimo de pagantes. Entre em contato pelo WhatsApp para confirmar os detalhes e reservar sua festa.",
  },
  {
    q: "Cobram taxa de serviço ou couvert?",
    a: "Não! No Vantaggio, não cobramos taxa de serviço. Nos dias de música ao vivo, também não cobramos couvert artístico. O que você vê no cardápio é o que você paga.",
  },
  {
    q: "Tem estacionamento?",
    a: "Sim, há estacionamento disponível na frente do restaurante, facilitando sua chegada, especialmente nos finais de semana.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-[#131313] px-6 md:px-16 border-t border-[#2e2b27]/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <SectionTag>Informações</SectionTag>
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-[#e8dfc8] leading-tight">Perguntas Frequentes</h2>
          <p className="mt-6 text-[#9e9890] font-light italic">Tire suas dúvidas sobre o Vantaggio Restaurante.</p>
        </div>
        <div className="lg:col-span-8 space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#2e2b27]/50">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full py-8 flex justify-between items-center text-left group"
              >
                <span className="text-base md:text-xl font-serif font-medium text-[#e8dfc8] group-hover:text-[#c9a96e] transition-colors pr-4">{faq.q}</span>
                <span className="p-2 bg-[#201f1f] rounded-md text-[#e8dfc8]">
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-[#9e9890] font-light leading-relaxed max-w-2xl text-lg">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
