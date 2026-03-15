import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ExternalLink, Lock, Rocket, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '../ui/Motion';

interface ProjectBase {
  name: string;
  description: string;
  highlights: string[];
  link?: string;
  ctaText: string;
  image?: string;
}

const products: ProjectBase[] = [
  {
    name: 'Kid+',
    description: 'Reduz filas, elimina papel e centraliza a gestão de brinquedotecas.',
    highlights: [
      'Check-in em segundos',
      'Assinatura digital',
      'Etiquetas automáticas',
      'Dashboard em tempo real'
    ],
    link: 'https://kid.devmais.com',
    ctaText: 'Acessar Sistema',
    image: '/projects/kid-dashboard.png'
  },
  {
    name: 'SomaAI',
    description: 'Organiza o financeiro, reduz erros e traz clareza para a tomada de decisão.',
    highlights: [
      'Contas a pagar organizadas',
      'Auditoria automatizada',
      'Conciliação bancária',
      'Visão gerencial clara'
    ],
    link: 'https://somaai.devmais.com',
    ctaText: 'Ver Plataforma',
    image: '/projects/soma-dashboard.png'
  },
  {
    name: 'PrecificaAI',
    description: 'Ajuda empreendedores a definir preços corretos e garantir margem de lucro.',
    highlights: [
      'Cálculo de preço de venda',
      'Simulação de margens',
      'Apoio à decisão'
    ],
    link: 'https://aiprecifica.vercel.app',
    ctaText: 'Ver Aplicação',
    image: '/projects/precifica-dashboard.png'
  }
];

export const Projects: React.FC = () => {
  return (
    <Section id="projetos" className="bg-gray-950 relative overflow-hidden border-t border-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="mb-24 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-6 mx-auto">
              <Rocket className="w-3 h-3" />
              Provas
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
              Software em <span className="text-violet-300">produção</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Sem pitch. Aqui tem produto rodando com usuário real e caso que vira rotina.
            </p>
          </div>
        </FadeIn>

        {/* Main Products Grid */}
        <div className="grid gap-8 md:gap-12 mb-32">
          {products.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.1}>
              <div className="group relative rounded-3xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm overflow-hidden hover:border-violet-400/50 transition-all duration-500 hover:shadow-[0_0_55px_-14px_rgba(124,58,237,0.25)]">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="p-8 md:p-12 order-2 md:order-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gray-800 flex items-center justify-center border border-gray-700 group-hover:border-violet-400/60 group-hover:bg-violet-500/10 transition-colors">
                        <Rocket className="w-6 h-6 text-violet-300" />
                      </div>
                      <h3 className="text-3xl font-bold text-white tracking-tight">{project.name}</h3>
                    </div>
                    
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    <ul className="space-y-4 mb-10">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-violet-300 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white text-gray-950 hover:bg-violet-500 hover:text-white border-0 font-bold px-8 py-4 shadow-lg shadow-white/5 hover:shadow-violet-500/20 w-full md:w-auto"
                      rightIcon={<ExternalLink className="w-4 h-4" />}
                    >
                      {project.ctaText}
                    </Button>
                  </div>
                  
                  <div className="relative h-full min-h-[300px] md:min-h-[500px] bg-gray-900/50 order-1 md:order-2 border-b md:border-b-0 md:border-l border-gray-800 group-hover:border-violet-400/30 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-gray-800 group-hover:border-violet-400/35 transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-1 bg-gray-950">
                        {/* Browser Bar */}
                        <div className="h-6 bg-gray-900 border-b border-gray-800 flex items-center px-3 gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                        </div>
                        {/* Image Content */}
                        <div className="relative w-full h-[calc(100%-24px)]">
                          {project.image ? (
                            <img 
                              src={project.image} 
                              alt={`Dashboard ${project.name}`}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-900 flex items-center justify-center flex-col gap-3">
                               <Rocket className="w-8 h-8 text-gray-800" />
                               <span className="text-gray-700 font-medium text-sm">Preview do Sistema</span>
                            </div>
                          )}
                          {/* Live Badge */}
                          <div className="absolute top-4 right-4 bg-green-500/10 backdrop-blur-md border border-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            ONLINE
                          </div>
                        </div>
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Other Solutions Section - Remodeled */}
        <div className="mb-0 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase">
            O que dá para <span className="text-violet-300">automatizar</span> aí?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            Ferramentas focadas para fechar vazamento de tempo e dinheiro na operação.
          </p>
        </div>

        <StaggerContainer className="grid gap-6 md:grid-cols-3 mb-24 auto-rows-fr">
          <StaggerItem className="relative bg-gray-900/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-violet-400/60 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_45px_-14px_rgba(124,58,237,0.2)] overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl group-hover:bg-violet-500/10 transition-colors pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gray-800/80 flex items-center justify-center border border-gray-700 group-hover:border-violet-400/60 group-hover:bg-violet-500/20 transition-all mb-6 shadow-lg">
                 <Rocket className="w-7 h-7 text-violet-300 group-hover:scale-110 transition-transform" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-200 transition-colors uppercase">E-commerce</h3>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-wide mb-6">Vendas Online</p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2">
              {['Shopify', 'Nuvemshop', 'Yampi', 'Cartpanda'].map(item => (
                <span key={item} className="px-3 py-1 rounded-full bg-gray-950/50 text-xs text-gray-400 border border-gray-800 group-hover:border-violet-400/35 group-hover:text-violet-200 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem className="relative bg-gray-900/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-violet-400/60 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_45px_-14px_rgba(124,58,237,0.2)] overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl group-hover:bg-violet-500/10 transition-colors pointer-events-none" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gray-800/80 flex items-center justify-center border border-gray-700 group-hover:border-violet-400/60 group-hover:bg-violet-500/20 transition-all mb-6 shadow-lg">
                 <CheckCircle2 className="w-7 h-7 text-violet-300 group-hover:scale-110 transition-transform" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-200 transition-colors uppercase">Automação</h3>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-wide mb-6">Processos</p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2">
              {['AppSheet', 'Planilhas', 'Fluxos', 'Sistemas Leves'].map(item => (
                <span key={item} className="px-3 py-1 rounded-full bg-gray-950/50 text-xs text-gray-400 border border-gray-800 group-hover:border-violet-400/35 group-hover:text-violet-200 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem className="relative bg-gray-900/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-violet-400/60 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_45px_-14px_rgba(124,58,237,0.2)] overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl group-hover:bg-violet-500/10 transition-colors pointer-events-none" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gray-800/80 flex items-center justify-center border border-gray-700 group-hover:border-violet-400/60 group-hover:bg-violet-500/20 transition-all mb-6 shadow-lg">
                 <Lock className="w-7 h-7 text-violet-300 group-hover:scale-110 transition-transform" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-200 transition-colors uppercase">Dashboards</h3>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-wide mb-6">Dados</p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2">
              {['Financeiro', 'Operacional', 'Indicadores', 'Gestão'].map(item => (
                <span key={item} className="px-3 py-1 rounded-full bg-gray-950/50 text-xs text-gray-400 border border-gray-800 group-hover:border-violet-400/35 group-hover:text-violet-200 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl group-hover:bg-violet-500/30 transition-all" />
          
          <div className="text-center md:text-left relative z-10 max-w-xl">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
              Quer cortar retrabalho agora?
            </h3>
            <p className="text-gray-300 text-lg">
              Me diga onde trava e eu devolvo um plano de ataque.
            </p>
          </div>
          
          <Button 
            href="#contato"
            size="lg"
            className="relative z-10 rounded-full bg-violet-600 hover:bg-violet-700 text-white border-0 shadow-lg shadow-violet-950/30 whitespace-nowrap px-10 py-6 text-lg font-bold hover:scale-105 transition-transform"
          >
            Quero destravar
          </Button>
        </div>

      </Container>
    </Section>
  );
};
