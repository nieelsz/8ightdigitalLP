"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  Instagram,
  Layers,
  Mail,
  MessageCircle,
  Pause,
  Play,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Wand2,
  Zap,
} from "lucide-react";

const WHATSAPP_HREF =
  "https://wa.me/5585987495079?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site da Eight Digital.\n\nQuero:\n1) (LP / Site / E-commerce / Sistema)\n2) Prazo ideal:\n3) Link do que você quer como referência:\n4) O que precisa acontecer pra valer a pena:"
  );

const EMAIL = "contato@8ightdigital.com.br";

const NAV = [
  { id: "servicos", label: "Serviços" },
  { id: "portfolio", label: "Portfólio" },
  { id: "processo", label: "Processo" },
  { id: "sobre", label: "Sobre" },
  { id: "faq", label: "FAQ" },
];

type Project = {
  title: string;
  subtitle: string;
  imageSrc?: string;
  // Logo: mostrada inteira e centralizada sobre a cor de fundo dela, em vez de preencher o quadro.
  logo?: { bg: string; size: "sm" | "lg" };
  // Ponto focal da foto no recorte 16:10 (padrão: rosto/topo, "center 22%").
  imagePosition?: string;
  tags: string[];
  href: string;
};

const PROJECTS: Project[] = [
  {
    title: "Kid+",
    subtitle: "Sistema para gestão de brinquedotecas",
    imageSrc: "/projects/kid-plus.png",
    tags: ["Sistema", "Check-in", "LGPD"],
    href: "https://kid.devmais.com",
  },
  {
    title: "Loja Befa",
    subtitle: "E-commerce com foco em conversão",
    imageSrc: "/projects/befa-logo.webp",
    logo: { bg: "#FACCCE", size: "sm" },
    tags: ["E-commerce", "Performance"],
    href: "https://befamodafeminina.lojavirtualnuvem.com.br",
  },
  {
    title: "Framex Pro",
    subtitle: "IA para imagens profissionais de produto",
    imageSrc: "/projects/Gemini_Generated_Image_wyua19wyua19wyua.webp",
    tags: ["IA", "Produto"],
    href: "https://framex.8ightdigital.com.br",
  },
  {
    title: "Moura & Alves Advogados",
    subtitle: "Site institucional para escritório de advocacia",
    imageSrc: "/projects/moura-alves.png",
    imagePosition: "center",
    tags: ["Institucional", "Editorial"],
    href: "https://mouraalves.8ightdigital.com.br/",
  },
  {
    title: "Dra. Isabela Rocha",
    subtitle: "Landing page para consultas e programa online",
    imageSrc: "/projects/dra-isabela.png",
    tags: ["Landing page", "Saúde"],
    href: "https://draisabelarocha.8ightdigital.com.br/",
  },
  {
    title: "Viva Clínica",
    subtitle: "Clínica de nutrição e psicologia",
    imageSrc: "/projects/viva-clinica.png",
    logo: { bg: "#F2F2F2", size: "lg" },
    tags: ["Institucional", "Conversão"],
    href: "https://vivaclinica.8ightdigital.com.br/",
  },
  {
    title: "Alisson Marques",
    subtitle: "Identidades visuais, eventos e cardápios",
    imageSrc: "/projects/IMG_20251221_181117_894-dZoaVm2OGvmwDzPmc9lYOKK67vsIDK.webp",
    tags: ["Design", "Identidade visual"],
    href: "https://alisson.8ightdigital.com.br",
  },
];

const SERVICES = [
  {
    icon: Zap,
    title: "Landing Page",
    desc: "Copy, hierarquia e velocidade pensadas para converter tráfego em conversa.",
    meta: "7–14 dias",
  },
  {
    icon: Layers,
    title: "Site Institucional",
    desc: "Narrativa clara e credibilidade para marcas que querem parecer do tamanho que são.",
    meta: "2–4 semanas",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Checkout fluido, catálogo rápido no mobile e métricas configuradas desde o dia um.",
    meta: "2–4 semanas",
  },
  {
    icon: Code2,
    title: "Sistema Web",
    desc: "Regras de negócio, dashboards e uma base de código estável para evoluir sem dor.",
    meta: "Sob escopo",
  },
];

const STEPS = [
  { title: "Briefing", desc: "Objetivo, oferta e critério de sucesso. Uma conversa, sem reunião infinita." },
  { title: "Design", desc: "Hierarquia, prova e CTA. Cada bloco existe por um motivo." },
  { title: "Desenvolvimento", desc: "Performance, acessibilidade e código que dá para evoluir." },
  { title: "Lançamento", desc: "Publica, mede e ajusta. Sem lock-in e com 30 dias de garantia." },
];

const FAQ_ITEMS = [
  {
    q: "Qual é o prazo típico?",
    a: "Landing pages em 7–14 dias; e-commerce ou site institucional em 2–4 semanas. Sistemas variam conforme o escopo.",
  },
  {
    q: "O que preciso para começar?",
    a: "Sua oferta, uma referência visual e acessos (domínio/servidor, se já tiver). Se não tiver, ajudamos a decidir.",
  },
  {
    q: "Vocês também escrevem os textos?",
    a: "Sim. Refinamos a mensagem com foco em dor, prova e chamada para ação — nada de texto genérico.",
  },
  {
    q: "E se algo quebrar depois da entrega?",
    a: "Qualquer bug técnico nos primeiros 30 dias é corrigido sem custo.",
  },
  {
    q: "Vocês cuidam de hospedagem e manutenção?",
    a: "Indicamos provedores e oferecemos manutenção opcional, sem prender você a nada.",
  },
];

/* ---------- Primitivos ---------- */

function EightMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 38 40" className={className} aria-hidden="true" fill="currentColor">
      <path d="M6 2h26.5c2.4 0 3.6 2.7 2.1 4.6l-2.7 3.5A6 6 0 0 1 27.2 12.5H2V6a4 4 0 0 1 4-4Z" />
      <path d="M6 16h17.5c2.4 0 3.6 2.7 2.1 4.6l-1.7 2.2a6 6 0 0 1-4.7 2.2H6a4 4 0 0 1-4-4v-1a4 4 0 0 1 4-4Z" />
      <path d="M2 28.5h25.2a6 6 0 0 1 4.7 2.3l2.7 3.6c1.5 1.9.3 4.6-2.1 4.6H8a6 6 0 0 1-6-6Z" />
    </svg>
  );
}

function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="inline-flex items-center gap-[3px] font-display text-[22px] font-bold leading-none tracking-tight">
      <EightMark className={`h-[17px] w-auto ${inverted ? "text-white" : "text-violet"}`} />
      <span className={inverted ? "text-white" : "text-onyx"}>IGHT</span>
    </span>
  );
}

function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const reduceMotion = useReducedMotion();
  const Comp = as === "li" ? motion.li : motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.45, delay, ease: [0.21, 1, 0.32, 1] }}
    >
      {children}
    </Comp>
  );
}

function Section({
  id,
  tone = "white",
  children,
}: {
  id?: string;
  tone?: "white" | "gelo" | "deep";
  children: React.ReactNode;
}) {
  const tones = {
    white: "bg-white text-onyx",
    gelo: "bg-gelo text-onyx",
    deep: "bg-deep text-white",
  };
  return (
    <section id={id} className={`scroll-mt-16 py-24 sm:py-32 ${tones[tone]}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

function Eyebrow({ children, inverted = false }: { children: React.ReactNode; inverted?: boolean }) {
  return (
    <p
      className={`text-sm font-semibold uppercase tracking-[0.14em] ${
        inverted ? "text-white/70" : "text-violet"
      }`}
    >
      {children}
    </p>
  );
}

function Heading({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-5xl sm:leading-[1.08] ${
        className ?? ""
      }`}
    >
      {children}
    </h2>
  );
}

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2";

function PrimaryButton({
  href,
  children,
  inverted = false,
}: {
  href: string;
  children: React.ReactNode;
  inverted?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-colors duration-200 ${focusRing} ${
        inverted
          ? "bg-white text-violet hover:bg-gelo focus-visible:ring-white focus-visible:ring-offset-violet"
          : "bg-violet text-white hover:bg-deep"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}

/* ---------- Página ---------- */

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-violet focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-onyx/[0.06] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" aria-label="Eight Digital — início" className={`rounded-md ${focusRing}`}>
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`rounded-md text-sm font-medium text-onyx/65 transition-colors hover:text-onyx ${focusRing}`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex h-10 items-center rounded-full bg-onyx px-5 text-sm font-semibold text-white transition-colors hover:bg-violet ${focusRing}`}
        >
          Fale conosco
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  // Sempre anima (o SSR já sai com opacity 0); com reduced motion a transição é instantânea.
  const fade = (delay: number, y = 16, duration = 0.6) => ({
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion
      ? { duration: 0 }
      : { duration, delay, ease: [0.21, 1, 0.32, 1] as const },
  });

  return (
    <section className="relative overflow-hidden bg-white pt-36 sm:pt-44">
      {/* brilho sutil da marca, sem ruído visual */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[640px] bg-[radial-gradient(50%_60%_at_50%_0%,rgba(112,0,255,0.10),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 text-center sm:px-8">
        <motion.p {...fade(0)} className="text-sm font-semibold uppercase tracking-[0.14em] text-violet">
          Soluções Digitais
        </motion.p>

        <motion.h1
          {...fade(0.05)}
          className="mx-auto mt-6 max-w-4xl font-display text-[2.35rem] font-semibold leading-[1.05] tracking-tight text-onyx sm:text-7xl"
        >
          Não criamos apenas websites.{" "}
          <span className="text-violet">Construímos estruturas digitais.</span>
        </motion.h1>

        <motion.p
          {...fade(0.12)}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-onyx/65 sm:text-xl"
        >
          Landing pages, e-commerces e sistemas que transformam negócios em marcas
          premium — rápidos, estáveis e feitos para vender.
        </motion.p>

        <motion.div
          {...fade(0.18)}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <PrimaryButton href={WHATSAPP_HREF}>Pedir orçamento</PrimaryButton>
          <a
            href="#portfolio"
            className={`inline-flex h-12 items-center gap-1.5 rounded-full px-6 text-[15px] font-semibold text-onyx transition-colors hover:text-violet ${focusRing}`}
          >
            Ver projetos <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <SolutionsVisual fade={fade} />
      </div>

      <div className="relative border-t border-onyx/[0.06] bg-white">
        <dl className="mx-auto grid w-full max-w-6xl grid-cols-3 divide-x divide-onyx/[0.06] px-5 sm:px-8">
          {[
            { v: "30+", l: "projetos entregues" },
            { v: "12+", l: "sistemas em produção" },
            { v: "7–21d", l: "prazo médio" },
          ].map((s) => (
            <div key={s.l} className="px-2 py-8 text-center sm:py-10">
              <dt className="sr-only">{s.l}</dt>
              <dd className="font-display text-2xl font-semibold tracking-tight text-onyx sm:text-4xl">
                {s.v}
              </dd>
              <dd className="mt-1 text-xs text-onyx/55 sm:text-sm">{s.l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

type Fade = (
  delay: number,
  y?: number,
  duration?: number
) => React.ComponentProps<typeof motion.div>;

function SolutionTag({ icon: Icon, children }: { icon: typeof Zap; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-onyx/[0.08] bg-white px-3 py-1.5 text-xs font-semibold text-onyx shadow-[0_8px_24px_-12px_rgba(70,30,126,0.35)]">
      <Icon className="h-3.5 w-3.5 text-violet" aria-hidden="true" />
      {children}
    </span>
  );
}

// Composição ilustrativa: site + loja + sistema + IA — as soluções digitais da Eight numa cena só.
function SolutionsVisual({ fade }: { fade: Fade }) {
  return (
    <div
      role="img"
      aria-label="Ilustração das soluções digitais da Eight: site, loja virtual, sistema web e IA"
      className="relative mx-auto mt-16 h-[360px] max-w-5xl overflow-hidden rounded-t-[28px] border border-b-0 border-onyx/[0.06] bg-gelo sm:mt-20 sm:h-[500px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_100%,rgba(112,0,255,0.16),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 [background-image:radial-gradient(rgba(18,18,18,0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      {/* Site / landing page */}
      <motion.div
        {...fade(0.3, 40, 0.9)}
        className="absolute inset-x-[9%] bottom-0 top-12 sm:inset-x-[20%] sm:top-14"
      >
        <div className="absolute -top-4 left-6 z-10">
          <SolutionTag icon={Zap}>Sites & Landing Pages</SolutionTag>
        </div>
        <div className="h-full overflow-hidden rounded-t-2xl border border-b-0 border-onyx/10 bg-white shadow-[0_40px_100px_-40px_rgba(70,30,126,0.5)]">
          <div className="flex h-9 items-center gap-1.5 border-b border-onyx/[0.06] px-4">
            <span className="h-2 w-2 rounded-full bg-onyx/15" />
            <span className="h-2 w-2 rounded-full bg-onyx/15" />
            <span className="h-2 w-2 rounded-full bg-onyx/15" />
            <span className="ml-3 hidden rounded-md bg-gelo px-3 py-0.5 text-[11px] text-onyx/40 sm:block">
              suamarca.com.br
            </span>
          </div>
          <div className="px-6 pt-5 sm:px-8">
            <div className="flex items-center justify-between">
              <EightMark className="h-3.5 w-auto text-violet" />
              <div className="hidden gap-3 sm:flex">
                <span className="h-1.5 w-8 rounded-full bg-onyx/10" />
                <span className="h-1.5 w-8 rounded-full bg-onyx/10" />
                <span className="h-1.5 w-8 rounded-full bg-onyx/10" />
              </div>
              <span className="h-5 w-14 rounded-full bg-onyx" />
            </div>
            <div className="mt-8 space-y-2.5 sm:mt-10">
              <span className="block h-4 w-[72%] rounded-full bg-onyx/85 sm:h-5" />
              <span className="block h-4 w-[52%] rounded-full bg-violet sm:h-5" />
              <span className="mt-4 block h-2 w-[64%] rounded-full bg-onyx/10" />
              <span className="block h-2 w-[48%] rounded-full bg-onyx/10" />
            </div>
            <span className="mt-6 block h-7 w-24 rounded-full bg-violet" />
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-20 rounded-xl bg-gelo p-3 sm:h-24">
                  <span className="block h-5 w-5 rounded-md bg-violet/15" />
                  <span className="mt-3 block h-1.5 w-[70%] rounded-full bg-onyx/15" />
                  <span className="mt-1.5 block h-1.5 w-[50%] rounded-full bg-onyx/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* E-commerce no celular */}
      <motion.div
        {...fade(0.45, 30, 0.8)}
        className="absolute bottom-[-72px] left-[3%] w-[128px] sm:bottom-[-24px] sm:left-[6%] sm:w-[186px]"
      >
        <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
          <SolutionTag icon={ShoppingBag}>E-commerce</SolutionTag>
        </div>
        <div className="rounded-[26px] bg-onyx p-1.5 shadow-[0_30px_80px_-30px_rgba(18,18,18,0.55)] sm:rounded-[32px] sm:p-2">
          <div className="overflow-hidden rounded-[21px] bg-white sm:rounded-[25px]">
            <div className="grid aspect-square place-items-center bg-[linear-gradient(145deg,#7000FF_0%,#461E7E_100%)]">
              <ShoppingBag className="h-9 w-9 text-white/90 sm:h-12 sm:w-12" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="p-3 sm:p-4">
              <span className="block h-2 w-[80%] rounded-full bg-onyx/80" />
              <span className="mt-1.5 block h-1.5 w-[55%] rounded-full bg-onyx/15" />
              <p className="mt-3 font-display text-sm font-semibold text-onyx sm:text-base">R$ 189,90</p>
              <span className="mt-3 flex h-7 items-center justify-center rounded-full bg-violet text-[10px] font-semibold text-white sm:h-8 sm:text-xs">
                Comprar
              </span>
              <span className="mt-2 block h-12 sm:h-16" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sistema / dashboard */}
      <motion.div
        {...fade(0.6, 30, 0.8)}
        className="absolute right-[5%] top-[38%] hidden w-[230px] sm:block lg:w-[250px]"
      >
        <div className="absolute -top-4 left-5 z-10">
          <SolutionTag icon={Code2}>Sistemas Web</SolutionTag>
        </div>
        <div className="rounded-2xl border border-onyx/[0.08] bg-white p-5 pt-6 shadow-[0_30px_80px_-30px_rgba(70,30,126,0.5)]">
          <div className="flex items-center justify-between">
            <span className="h-2 w-20 rounded-full bg-onyx/70" />
            <span className="h-4 w-10 rounded-full bg-violet/10" />
          </div>
          <div className="mt-5 flex h-24 items-end gap-2">
            {[38, 56, 44, 70, 62, 88, 100].map((h, i) => (
              <span
                key={i}
                className={`flex-1 rounded-t-md ${i === 6 ? "bg-violet" : "bg-violet/20"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-4 space-y-2 border-t border-onyx/[0.06] pt-4">
            {[0, 1].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-gelo" />
                <span className="h-1.5 flex-1 rounded-full bg-onyx/10" />
                <span className="h-1.5 w-8 rounded-full bg-onyx/20" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* IA aplicada */}
      <motion.div
        {...fade(0.75, 20, 0.7)}
        className="absolute right-[8%] top-12 hidden sm:block"
      >
        <SolutionTag icon={Wand2}>IA aplicada</SolutionTag>
      </motion.div>
    </div>
  );
}

function Services() {
  return (
    <Section id="servicos" tone="deep">
      <Reveal>
        <Eyebrow inverted>Serviços</Eyebrow>
        <Heading>Tudo o que a sua marca precisa para crescer no digital.</Heading>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06} className="bg-deep">
            <div className="flex h-full flex-col p-7 sm:p-8">
              <s.icon className="h-6 w-6 text-white" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="mt-8 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-white/70">{s.desc}</p>
              <p className="mt-8 text-sm font-medium text-white/50">{s.meta}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6">
        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <Wand2 className="mt-0.5 h-6 w-6 shrink-0" strokeWidth={1.75} aria-hidden="true" />
            <div>
              <h3 className="font-display text-lg font-semibold">IA aplicada em imagens</h3>
              <p className="mt-1 text-[15px] text-white/70">
                Modelos virtuais e catálogo com cara de marca grande. Disponível como adicional.
              </p>
            </div>
          </div>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full text-sm font-semibold text-white hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Saber mais <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

const SLIDE_MS = 6000;

// useReducedMotion devolve null no servidor e o valor real já no 1º render do cliente;
// quando isso muda o markup (botão de pausa, drag), a hidratação quebra. Só confia após montar.
function useHydratedReducedMotion() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && Boolean(reduceMotion);
}

function Portfolio() {
  const reduceMotion = useHydratedReducedMotion();
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.35 });

  const total = PROJECTS.length;
  const autoplay = !reduceMotion;
  const paused = !autoplay || hovered || focused || manualPause || !inView;
  const project = PROJECTS[index];

  const go = (i: number) => setIndex((i + total) % total);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  // Mantém a aba ativa visível quando a lista rola na horizontal (mobile).
  useEffect(() => {
    const list = tabsRef.current;
    const tab = list?.children[index] as HTMLElement | undefined;
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({
      left: tab.offsetLeft - list.clientWidth / 2 + tab.clientWidth / 2,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [index, reduceMotion]);

  const iconButton = `grid h-11 w-11 place-items-center rounded-full border border-onyx/10 text-onyx transition-colors hover:border-violet hover:text-violet ${focusRing}`;

  return (
    <Section id="portfolio">
      <Reveal className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Eyebrow>Portfólio</Eyebrow>
          <Heading>Projetos que falam por nós.</Heading>
        </div>
        <div className="flex items-center gap-2">
          {autoplay && (
            <button
              type="button"
              onClick={() => setManualPause((p) => !p)}
              aria-label={manualPause ? "Retomar rotação automática" : "Pausar rotação automática"}
              className={iconButton}
            >
              {manualPause ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </button>
          )}
          <button type="button" onClick={prev} aria-label="Projeto anterior" className={iconButton}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={next} aria-label="Próximo projeto" className={iconButton}>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Reveal>

      <Reveal className="mt-14">
        <div
          ref={rootRef}
          role="region"
          aria-roledescription="carrossel"
          aria-label="Projetos da Eight Digital"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
          }}
        >
          <div aria-live={paused ? "polite" : "off"}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} de ${total}: ${project.title}`}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -24 }}
                transition={{ duration: reduceMotion ? 0.15 : 0.4, ease: [0.21, 1, 0.32, 1] }}
                drag={reduceMotion ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) next();
                  else if (info.offset.x > 60) prev();
                }}
                className="grid cursor-grab gap-8 active:cursor-grabbing md:grid-cols-5 md:items-center md:gap-12"
              >
                <ProjectVisual project={project} />

                <div className="md:col-span-2">
                  <p className="text-sm font-medium text-onyx/50">
                    <span className="font-display font-semibold text-violet">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mx-2 text-onyx/20">/</span>
                    {String(total).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-onyx sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-onyx/60">{project.subtitle}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-gelo px-3 py-1 text-xs font-medium text-onyx/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    draggable={false}
                    className={`group mt-8 inline-flex items-center gap-1.5 rounded-full text-[15px] font-semibold text-violet ${focusRing}`}
                  >
                    Visitar projeto
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            ref={tabsRef}
            role="tablist"
            aria-label="Escolher projeto"
            className="mt-12 flex gap-6 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {PROJECTS.map((p, i) => {
              const active = i === index;
              return (
                <button
                  key={p.title}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => go(i)}
                  className={`group min-w-[150px] flex-1 pb-1 text-left ${focusRing}`}
                >
                  <span className="relative block h-0.5 overflow-hidden rounded-full bg-onyx/10">
                    {active && (
                      <span
                        key={index}
                        className="absolute inset-0 origin-left bg-violet"
                        style={
                          autoplay
                            ? {
                                animation: `carousel-progress ${SLIDE_MS}ms linear forwards`,
                                animationPlayState: paused ? "paused" : "running",
                              }
                            : undefined
                        }
                        onAnimationEnd={next}
                      />
                    )}
                  </span>
                  <span
                    className={`mt-4 block truncate text-sm font-semibold transition-colors ${
                      active ? "text-onyx" : "text-onyx/40 group-hover:text-onyx/70"
                    }`}
                  >
                    {p.title}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-onyx/40">{p.tags[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const domain = project.href.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-onyx/[0.06] bg-gelo md:col-span-3">
      {project.imageSrc && project.logo ? (
        <div
          className="absolute inset-0 grid place-items-center"
          style={{ backgroundColor: project.logo.bg }}
        >
          <div
            className={`relative aspect-square ${
              project.logo.size === "sm" ? "h-[46%] max-h-[150px]" : "h-full"
            }`}
          >
            <Image
              src={project.imageSrc}
              alt={`Logo ${project.title}`}
              fill
              draggable={false}
              sizes="(max-width: 768px) 60vw, 420px"
              className="pointer-events-none select-none object-contain"
            />
          </div>
        </div>
      ) : project.imageSrc ? (
        <Image
          src={project.imageSrc}
          alt={`${project.title} — ${project.subtitle}`}
          fill
          draggable={false}
          sizes="(max-width: 768px) 100vw, 660px"
          style={{ objectPosition: project.imagePosition ?? "center 22%" }}
          className="pointer-events-none select-none object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col justify-end bg-[linear-gradient(140deg,#461E7E_0%,#7000FF_100%)] p-8 sm:p-10">
          <EightMark className="absolute -right-8 -top-8 h-64 w-auto text-white/[0.08]" />
          <span className="relative font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {project.title}
          </span>
          <span className="relative mt-2 text-sm text-white/70">{domain}</span>
        </div>
      )}
    </div>
  );
}

function Process() {
  return (
    <Section id="processo" tone="gelo">
      <Reveal>
        <Eyebrow>Processo</Eyebrow>
        <Heading>Simples, rápido e previsível.</Heading>
      </Reveal>

      <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} as="li" delay={i * 0.06} className="border-t-2 border-violet pt-6">
            <span className="font-display text-sm font-semibold text-violet">0{i + 1}</span>
            <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-onyx/60">{s.desc}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

function About() {
  return (
    <Section id="sobre" tone="deep">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Eyebrow inverted>Sobre a Eight</Eyebrow>
          <Heading>Duas mentes, uma ideia.</Heading>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
            A Eight nasceu entre a estética e o código. Enquanto um molda a autoridade
            visual da sua marca, o outro constrói a infraestrutura robusta que a faz
            escalar. Onde o design minucioso encontra a engenharia implacável.
          </p>
        </Reveal>

        <div className="grid content-center gap-4">
          {[
            { name: "Gabriel Oliveira", role: "Design & Branding", initials: "GO" },
            { name: "Daniel Melo", role: "Desenvolvimento & Engenharia", initials: "DM" },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className="flex items-center gap-5 rounded-2xl border border-white/10 p-6">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-violet font-display text-lg font-semibold">
                  {p.initials}
                </div>
                <div>
                  <p className="font-display text-lg font-semibold">{p.name}</p>
                  <p className="text-[15px] text-white/65">{p.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.16}>
            <div className="flex items-center gap-5 rounded-2xl border border-white/10 p-6">
              <ShieldCheck className="h-6 w-6 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <p className="text-[15px] text-white/75">
                <span className="font-semibold text-white">Garantia de 30 dias:</span> qualquer bug
                técnico pós-entrega é corrigido sem custo.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <Reveal className="lg:col-span-2">
          <Eyebrow>FAQ</Eyebrow>
          <Heading>Perguntas frequentes.</Heading>
          <p className="mt-6 text-[15px] leading-relaxed text-onyx/60">
            Não encontrou o que procurava?{" "}
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-violet underline-offset-4 hover:underline"
            >
              Fale com a gente
            </a>
            .
          </p>
        </Reveal>

        <Reveal className="lg:col-span-3">
          <div className="divide-y divide-onyx/10 border-y border-onyx/10">
            {FAQ_ITEMS.map((f) => (
              <details key={f.q} className="group">
                <summary
                  className={`flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-lg font-semibold text-onyx [&::-webkit-details-marker]:hidden ${focusRing}`}
                >
                  {f.q}
                  <Plus
                    className="h-5 w-5 shrink-0 text-violet transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="-mt-2 pb-6 pr-10 text-[15px] leading-relaxed text-onyx/65">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function FinalCta() {
  return (
    <section className="bg-white px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-violet px-7 py-16 text-center text-white sm:px-16 sm:py-24">
          <EightMark
            className="pointer-events-none absolute -right-10 -top-10 h-72 w-auto text-white/[0.07] sm:h-96"
          />
          <h2 className="relative mx-auto max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-5xl sm:leading-[1.08]">
            Vamos construir a estrutura digital da sua marca?
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg text-white/80">
            Mande o que você tem hoje — ou só a ideia. A resposta é direta: o que fazer,
            quanto custa e qual o próximo passo.
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryButton href={WHATSAPP_HREF} inverted>
              Conversar no WhatsApp
            </PrimaryButton>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full px-4 text-[15px] font-medium text-white/85 underline-offset-4 hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  const links = [
    { href: WHATSAPP_HREF, label: "WhatsApp", icon: MessageCircle, external: true },
    { href: `mailto:${EMAIL}`, label: "E-mail", icon: Mail, external: false },
    { href: "https://www.instagram.com/8ight.digital/", label: "Instagram", icon: Instagram, external: true },
  ];
  return (
    <footer className="border-t border-onyx/[0.06] bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-onyx/50">
            © {new Date().getFullYear()} Eight Digital. Fortaleza, Brasil.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              aria-label={l.label}
              {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className={`grid h-11 w-11 place-items-center rounded-full border border-onyx/10 text-onyx/60 transition-colors hover:border-violet hover:text-violet ${focusRing}`}
            >
              <l.icon className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
