import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '../ui/Motion';

const differentials = [
  'Mapeamos o processo antes de codar (pra não automatizar bagunça)',
  'Cortamos retrabalho com integrações e automações',
  'Entrega curta e iterativa (você vê, usa e ajusta)',
  'Pós-deploy com correção e evolução, sem sumir'
];

export const Differentials: React.FC = () => {
  return (
    <Section id="diferenciais" className="bg-gray-950 border-t border-gray-900 pb-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <Container className="relative z-10">
        <div className="bg-gray-900/50 backdrop-blur-md rounded-3xl p-8 md:p-14 border border-gray-800 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/15 rounded-full blur-[110px] pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                  Você não precisa de mais <span className="text-violet-300">código.</span>
                </h2>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  Você precisa de menos fricção. A gente entra na operação, encontra os gargalos que drenam tempo e dinheiro, e resolve com software sob medida.
                </p>
              </div>
            </FadeIn>
            
            <StaggerContainer className="grid gap-5">
              {differentials.map((item, idx) => (
                <StaggerItem key={idx} className="flex items-center space-x-4 bg-gray-950/50 p-5 rounded-xl border border-gray-800 shadow-lg hover:border-violet-400/50 transition-all duration-300 group hover:-translate-x-1">
                  <div className="bg-violet-500/10 p-2 rounded-lg group-hover:bg-violet-500/20 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-violet-300 flex-shrink-0" />
                  </div>
                  <span className="text-gray-200 font-bold text-lg">{item}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </Section>
  );
};
