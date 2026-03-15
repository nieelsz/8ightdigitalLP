import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { BarChart3, Settings, Globe, ShoppingCart, AppWindow } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '../ui/Motion';

const services = [
  {
    tag: '01 - Presença Digital',
    title: 'Landing Pages & Sites',
    description: 'Não é só beleza, é conversão. Sites institucionais que geram autoridade e Landing Pages desenhadas para transformar visitantes em clientes.',
    icon: Globe
  },
  {
    tag: '02 - Vendas Online',
    title: 'E-commerces & Lojas',
    description: 'Sua loja aberta 24h. Plataformas de vendas robustas, rápidas e integradas para você escalar seu faturamento sem travar.',
    icon: ShoppingCart
  },
  {
    tag: '03 - Soluções Ágeis',
    title: 'Mini Sistemas',
    description: 'Adeus planilhas travadas. Pequenos sistemas sob medida para resolver dores pontuais da sua operação de forma rápida e barata.',
    icon: AppWindow
  },
  {
    tag: '04 - Inteligência',
    title: 'Dashboards & Dados',
    description: 'Chega de "achar". Tenha números exatos da sua operação em tempo real para tomar decisões que colocam dinheiro no bolso.',
    icon: BarChart3
  },
  {
    tag: '05 - Automação',
    title: 'Automação de Processos',
    description: 'Robôs trabalhando para você. Tarefas manuais e repetitivas executadas automaticamente, sem erro humano e sem custo extra.',
    icon: Settings
  }
];

export const Services: React.FC = () => {
  return (
    <Section id="servicos" className="bg-white border-t border-gray-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <Container className="relative z-10 max-w-5xl">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 mb-6">
              <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">O que entregamos</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">
              Tire sua equipe do <span className="text-violet-700">manual</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Se hoje tudo depende de planilha, mensagem e “memória”, isso vira sistema.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="flex flex-col gap-4">
          {services.map((service) => (
            <StaggerItem 
              key={service.title}
              className="relative bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-200 hover:border-violet-500/50 hover:bg-white transition-all duration-300 group overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl group-hover:bg-violet-500/10 transition-colors pointer-events-none translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                {/* Icon Box */}
                <div className="w-16 h-16 shrink-0 bg-white rounded-2xl flex items-center justify-center text-violet-700 border border-gray-200 group-hover:border-violet-500/50 group-hover:bg-violet-50 group-hover:scale-105 transition-all duration-300 shadow-sm">
                  <service.icon className="w-8 h-8" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 rounded-md bg-violet-100 border border-violet-200 mb-3">
                    <span className="text-xs font-bold text-violet-800 uppercase tracking-wider">
                      {service.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 uppercase tracking-tight group-hover:text-violet-800 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed group-hover:text-gray-800 transition-colors max-w-3xl">
                    {service.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
};
