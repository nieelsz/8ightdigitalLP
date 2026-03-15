import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { FadeIn } from '../ui/Motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-gray-950 flex flex-col justify-center min-h-[90vh]">
      <div className="absolute inset-0 z-[1] opacity-30 pointer-events-none mix-blend-soft-light">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.65%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noiseFilter)%22%20opacity%3D%221%22%2F%3E%3C%2Fsvg%3E')] bg-repeat opacity-20 brightness-100 contrast-150" />
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-violet-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[680px] h-[680px] bg-violet-500/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="flex flex-col items-center text-center relative z-10">
        <FadeIn delay={0.1} direction="down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-sm font-medium text-gray-200 tracking-wide uppercase">Operação manual custa caro</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center gap-1 mb-10">
            <h1 className="flex flex-col items-center font-black text-white tracking-tighter uppercase leading-tight">
              <span className="text-xl md:text-3xl text-gray-300 mb-3 tracking-[0.18em] font-bold">
                Corte retrabalho.
              </span>

              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 text-4xl md:text-6xl lg:text-7xl">
                <span>Automatize</span>
                <span className="text-gray-300">processos.</span>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 text-4xl md:text-6xl lg:text-7xl mt-2">
                <span>Ganhe</span>
                <div className="relative transform -skew-x-12 px-3 md:px-6 py-0.5 md:py-1 bg-violet-600 shadow-[0_12px_50px_-14px_rgba(124,58,237,0.6)]">
                  <span className="block transform skew-x-12 italic text-white">
                    margem.
                  </span>
                </div>
                <div className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-violet-600 flex items-center justify-center transform -rotate-12 shadow-[0_12px_40px_-12px_rgba(124,58,237,0.55)] border-[3px] border-gray-950">
                  <TrendingUp className="w-4 h-4 md:w-8 md:h-8 text-white transform rotate-12" />
                </div>
              </div>
            </h1>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg text-gray-200 mb-10 max-w-3xl leading-relaxed font-light mx-auto">
            A gente entra na sua operação, identifica o que está drenando tempo e dinheiro, e entrega software sob medida para resolver: integrações, automações e dashboards.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center justify-center">
            <Button 
              href="#contato" 
              size="lg" 
              className="rounded-full px-8 py-6 text-lg font-bold shadow-[0_12px_50px_-14px_rgba(124,58,237,0.65)] hover:shadow-[0_18px_70px_-18px_rgba(124,58,237,0.8)] bg-violet-600 hover:bg-violet-700 text-white border-0 tracking-wide transition-all duration-300 hover:scale-105"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Quero um diagnóstico
            </Button>
            <Button 
              href="#projetos" 
              variant="outline" 
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-bold border-white/20 text-gray-100 hover:text-white hover:border-violet-400/60 hover:bg-white/5 backdrop-blur-sm uppercase tracking-wide"
            >
              Ver provas
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="mt-20 pt-10 border-t border-white/5 w-full max-w-4xl mx-auto">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-8">
              Integramos e construímos com
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Shopify */}
               <span className="text-xl font-bold text-white flex items-center gap-2">
                 <span className="text-[#96bf48]">shopify</span>
               </span>
               {/* Nuvemshop */}
               <span className="text-xl font-bold text-white flex items-center gap-2">
                 <span className="text-[#2d3275]">nuvemshop</span>
               </span>
               {/* Vercel */}
               <span className="text-xl font-bold text-white flex items-center gap-2">
                 <svg viewBox="0 0 75 65" fill="currentColor" className="w-6 h-6 text-white"><path d="M37.59.25l36.95 64H.64l36.95-64z"></path></svg>
                 Vercel
               </span>
               {/* React */}
               <span className="text-xl font-bold text-white flex items-center gap-2">
                 <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6 text-[#61DAFB] fill-current"><circle cx="0" cy="0" r="2.05" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
                 React
               </span>
               {/* Node */}
               <span className="text-xl font-bold text-white flex items-center gap-2">
                 <span className="text-[#339933]">Node.js</span>
               </span>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};
