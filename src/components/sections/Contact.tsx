import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Instagram, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contato" className="py-20 md:py-32 bg-gray-950 relative overflow-hidden border-t border-gray-900">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] bg-violet-500/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">
          Se a operação trava, <br className="hidden md:block" />
          a empresa <span className="text-violet-300">paga</span>.
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Manda no WhatsApp: (1) onde trava hoje, (2) quanto tempo a equipe perde por semana, (3) qual resultado você quer. Eu respondo com um plano de ataque.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            href="https://wa.me/5585987495079?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Eight%20Digital.%20Quero%20destravar%20minha%20opera%C3%A7%C3%A3o.%0A%0A1)%20Hoje%20trava%20em%3A%20%0A2)%20Tempo%20perdido%20por%20semana%3A%20%0A3)%20Resultado%20que%20quero%3A%20"
            target="_blank"
            className="rounded-full bg-violet-600 hover:bg-violet-700 text-white px-10 h-16 text-lg border-0 shadow-lg shadow-violet-950/30 hover:shadow-violet-950/40 transition-all duration-300 transform hover:-translate-y-1 font-bold tracking-wide hover:scale-105"
            leftIcon={<MessageSquare className="w-6 h-6" />}
          >
            Quero um plano de ataque
          </Button>

          <Button 
            size="lg" 
            href="https://instagram.com/8ight.digital"
            target="_blank"
            variant="outline"
            className="rounded-full text-gray-200 hover:text-white hover:border-violet-400/60 hover:bg-white/5 h-16 px-8 border border-gray-800 backdrop-blur-sm uppercase font-semibold tracking-wide"
            leftIcon={<Instagram className="w-5 h-5" />}
          >
            Ver bastidores
          </Button>
        </div>
      </Container>
    </Section>
  );
};
