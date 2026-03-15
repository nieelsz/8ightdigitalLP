import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Code2, PencilRuler } from 'lucide-react';
import { FadeIn } from '../ui/Motion';

export const About: React.FC = () => {
  return (
    <Section id="sobre" className="bg-gray-950 border-t border-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <Container className="relative z-10">
        <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                Quem <span className="text-violet-500">Executa</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Sem "gerente de conta" ou telefone sem fio. Na <strong className="text-white">Eight Digital</strong>, você fala direto com quem constrói a solução.
              </p>
            </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Daniel */}
            <FadeIn delay={0.1}>
                <div className="h-full bg-gray-900/40 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-gray-800 hover:border-violet-500/30 transition-all duration-300 group hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 border border-gray-700 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 transition-colors">
                        <Code2 className="w-7 h-7 text-violet-400" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-1">Daniel Melo</h3>
                    <p className="text-violet-400 font-medium text-sm uppercase tracking-wider mb-6">Tecnologia & Engenharia</p>
                    
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Une background sólido em Infraestrutura/TI com Engenharia de Software. Garante que seu sistema não só funcione, mas aguente o tranco, escale e não caia.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {['Backend', 'Infraestrutura', 'Dados', 'Automação'].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-gray-950 border border-gray-800 rounded-lg text-xs font-medium text-gray-500 uppercase tracking-wide">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </FadeIn>

            {/* Gabriel */}
            <FadeIn delay={0.2}>
                <div className="h-full bg-gray-900/40 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-gray-800 hover:border-violet-500/30 transition-all duration-300 group hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 border border-gray-700 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 transition-colors">
                        <PencilRuler className="w-7 h-7 text-violet-400" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-1">Gabriel Oliveira</h3>
                    <p className="text-violet-400 font-medium text-sm uppercase tracking-wider mb-6">Produto & Design</p>
                    
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Especialista em transformar requisitos confusos em telas claras. Cuida do briefing e da experiência para que o sistema seja intuitivo e sua equipe use sem treinamento.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {['UI/UX Design', 'Prototipagem', 'Briefing', 'Frontend'].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-gray-950 border border-gray-800 rounded-lg text-xs font-medium text-gray-500 uppercase tracking-wide">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </div>
      </Container>
    </Section>
  );
};
