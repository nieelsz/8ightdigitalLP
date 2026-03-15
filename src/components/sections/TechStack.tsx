import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Server, Monitor, Layers } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '../ui/Motion';

const technologies = [
  {
    category: 'Arquitetura & Backend',
    icon: Server,
    items: ['Node.js', 'PostgreSQL', 'Firebase', 'Integrações e automações']
  },
  {
    category: 'Frontend & Experiência',
    icon: Monitor,
    items: ['React', 'Interfaces web responsivas', 'Dashboards interativos']
  },
  {
    category: 'Plataformas & Ecossistemas',
    icon: Layers,
    items: ['Shopify', 'Nuvemshop', 'Cartpanda', 'Yampi', 'AppSheet']
  }
];

export const TechStack: React.FC = () => {
  return (
    <Section className="bg-white border-t border-gray-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <Container className="relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">
              Stack que <span className="text-violet-700">entrega</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Escolhemos tecnologia para reduzir risco e acelerar entrega, não para impressionar em slide.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <StaggerItem 
              key={tech.category}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-violet-500/50 hover:bg-white transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white rounded-xl border border-gray-200 group-hover:border-violet-500/50 group-hover:bg-violet-50 transition-colors shadow-sm">
                  <tech.icon className="w-6 h-6 text-violet-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">
                  {tech.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {tech.items.map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 group-hover:border-violet-500/30 group-hover:text-violet-800 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
};
