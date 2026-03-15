import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Plus, Minus } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '../ui/Motion';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    question: 'O que vocês precisam para começar?',
    answer: 'A gente precisa ver a operação como ela é hoje: planilhas, prints, ferramentas que você usa e o fluxo real (quem faz o quê e quando). Com isso, desenhamos o caminho mais curto para cortar retrabalho.'
  },
  {
    question: 'Quanto tempo leva para entregar?',
    answer: 'Trabalhamos com entregas em etapas. Você vê a primeira versão funcional rápido, usa na rotina e ajusta. Isso evita gastar meses construindo algo “bonito” que não resolve o gargalo real.'
  },
  {
    question: 'Qual é o investimento?',
    answer: 'Depende do vazamento que vamos fechar. A proposta vem com escopo objetivo (o que entra e o que não entra) e fases para você começar pelo que dá retorno mais rápido.'
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-gray-950 border-t border-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <Container className="relative z-10 max-w-4xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Dúvidas <span className="text-violet-300">diretas</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              O que você precisa saber antes de destravar a operação.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="space-y-4">
          {faqItems.map((item, index) => (
            <StaggerItem key={index}>
              <div 
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index 
                    ? 'bg-gray-900/60 border-violet-400/60 shadow-[0_0_24px_-8px_rgba(124,58,237,0.18)]' 
                    : 'bg-gray-900/30 border-gray-800 hover:border-gray-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                >
                  <span className={`text-lg md:text-xl font-bold transition-colors ${
                    openIndex === index ? 'text-violet-300' : 'text-gray-200 group-hover:text-white'
                  }`}>
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-full transition-colors ${
                    openIndex === index ? 'bg-violet-500/20 text-violet-300' : 'bg-gray-800 text-gray-400 group-hover:bg-gray-700'
                  }`}>
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0">
                        <p className="text-gray-400 leading-relaxed text-base md:text-lg border-t border-gray-800/50 pt-4">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
};
