"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Code2,
  Layers,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Wand2,
  Zap,
  Instagram,
  MessageCircle,
  Mail,
} from "lucide-react";

const BRAND = {
  black: "#0A0A0A",
  purple: "#7B2FFF",
  white: "#F5F5F5",
};

const WHATSAPP_HREF =
  "https://wa.me/5585987495079?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site da Eight Digital.\n\nQuero:\n1) (LP / Site / E-commerce / Sistema)\n2) Prazo ideal:\n3) Link do que você quer como referência:\n4) O que precisa acontecer pra valer a pena:"
  );

const PROJECTS = [
  {
    title: "Ecommerce Loja Befa",
    subtitle: "E-commerce com foco em conversão",
    imageSrc: "/projects/befa2.jpeg",
    tags: ["E-commerce", "UI premium", "Performance"],
    href: "https://befamodafeminina.lojavirtualnuvem.com.br",
  },
  {
    title: "Kid+",
    subtitle: "Sistema para gestão de brinquedotecas",
    imageSrc: "/projects/kid-dashboard.png",
    tags: ["Sistema", "Check-in", "LGPD"],
    href: "https://kid.devmais.com",
  },
  {
    title: "Framex Pro",
    subtitle: "IA para imagens profissionais de produto",
    imageSrc: "/projects/Gemini_Generated_Image_wyua19wyua19wyua.webp",
    tags: ["IA", "Imagens de produto", "Conversão"],
    href: "https://framex.8ightdigital.com.br",
  },
  {
    title: "Alisson Marques",
    subtitle: "Identidades visuais, eventos e cardápios que vendem",
    imageSrc: "/projects/IMG_20251221_181117_894-dZoaVm2OGvmwDzPmc9lYOKK67vsIDK.webp",
    tags: ["Design", "Identidade visual", "Social"],
    href: "https://alisson.8ightdigital.com.br",
  },
  {
    title: "Sistemas",
    subtitle: "Dashboards e operações internas",
    imageSrc: "/projects/soma-dashboard.png",
    tags: ["Sistema web", "Arquitetura", "Manutenção fácil"],
  },
] as const;

const TESTIMONIALS = [
  {
    quote:
      "A landing parou de parecer “site de agência” e virou página de produto. A conversão subiu e o WhatsApp começou a chegar com mensagem pronta — sem curiosos.",
    name: "Camila Rocha",
    role: "Head de Marketing",
    company: "NuvemFit",
    highlight: "+41% leads",
  },
  {
    quote:
      "O e-commerce ficou rápido e confiável no mobile. Carrinho e checkout sem travar, com layout que passa autoridade. Diminuiu abandono e aumentou ticket.",
    name: "Rafael Menezes",
    role: "Sócio",
    company: "Vértice Store",
    highlight: "-23% abandono",
  },
  {
    quote:
      "O sistema que a gente tinha era instável e caro de mexer. Agora ficou previsível: telas claras, dados consistentes e uma base que dá para evoluir sem dor.",
    name: "Marina Albuquerque",
    role: "Operações",
    company: "Atlas Serviços",
    highlight: "Base escalável",
  },
  {
    quote:
      "O processo é objetivo: briefing certo, design com hierarquia e entrega rápida. Sem reunião infinita. O que prometeram, entregaram — com refinamento.",
    name: "Diego Vasconcelos",
    role: "Founder",
    company: "Polar Tech",
    highlight: "Entrega rápida",
  },
] as const;

const FAQ_ITEMS = [
  {
    q: "Qual é o prazo típico?",
    a: "LP em 7–14 dias; e-commerce ou site institucional em 2–4 semanas; sistemas variam conforme escopo.",
  },
  {
    q: "O que preciso para começar?",
    a: "Oferta, referência visual e acesso (domínio/servidor se já tiver). Se não tiver, ajudamos a decidir.",
  },
  {
    q: "Vocês também fazem copy?",
    a: "Sim. Refinamos a mensagem com foco em dor, prova e CTA — sem texto genérico.",
  },
  {
    q: "E se algo quebrar depois?",
    a: "Garantia anti-risco: 30 dias contra bugs pós-entrega. Corrigimos sem custo.",
  },
  {
    q: "Hospedagem e manutenção?",
    a: "Podemos indicar provedores e oferecer manutenção opcional, sem lock-in.",
  },
] as const;
function SpotlightCard({
  children,
  className,
  glow = "rgba(123,47,255,0.22)",
}: {
  children: React.ReactNode;
  className?: string;
  glow?: string;
}) {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const background = useMotionTemplate`radial-gradient(560px circle at ${mouseX}px ${mouseY}px, ${glow}, transparent 55%)`;

  return (
    <motion.div
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - bounds.left);
        mouseY.set(event.clientY - bounds.top);
      }}
      onMouseLeave={() => {
        if (reduceMotion) return;
        mouseX.set(0);
        mouseY.set(0);
      }}
      className={[
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset] transition-all duration-200 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.07]",
        className ?? "",
      ].join(" ")}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={reduceMotion ? undefined : { background }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(245,245,245,0.06), transparent 38%)",
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={[
        "relative w-full scroll-mt-24 py-16 sm:py-20",
        className ?? "",
      ].join(" ")}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

function Pill({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-normal text-white/80 backdrop-blur">
      <span className="text-white/70">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#7B2FFF] px-5 py-3 text-sm font-medium text-white shadow-[0_18px_60px_rgba(123,47,255,0.25)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition-all duration-200 hover:border-white/25 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
    >
      <span>{children}</span>
      <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}

export default function Page() {
  const reduceMotion = useReducedMotion();
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [isPortfolioPaused, setIsPortfolioPaused] = useState(false);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const portfolioRafRef = useRef<number | null>(null);
  const portfolioLastTsRef = useRef<number | null>(null);
  const portfolioResumeTimeoutRef = useRef<number | null>(null);
  const portfolioDragRef = useRef<{
    active: boolean;
    pointerId: number;
    startX: number;
    startScrollLeft: number;
  } | null>(null);

  const navItems = useMemo(
    () => [
      { id: "servicos", label: "Serviços" },
      { id: "portfolio", label: "Portfólio" },
      { id: "processo", label: "Como trabalhamos" },
    ],
    []
  );

  const portfolioItems = useMemo(() => {
    if (!PROJECTS.length) return [] as typeof PROJECTS[number][];
    return [...PROJECTS, ...PROJECTS];
  }, []);

  useEffect(() => {
    const elements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];
        if (!visible?.target) return;
        setActiveNav(visible.target.id);
      },
      { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: "-30% 0px -60% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navItems]);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      const el = portfolioRef.current;
      if (!el) return;
      if (PROJECTS.length <= 1) return;
      const half = el.scrollWidth / 2;
      const max = el.scrollWidth - el.clientWidth;
      if (half > 0 && max > 0) el.scrollLeft = Math.min(half, max);
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    if (isPortfolioPaused) return;
    const el = portfolioRef.current;
    if (!el) return;
    if (PROJECTS.length <= 1) return;

    if (portfolioRafRef.current != null) {
      window.cancelAnimationFrame(portfolioRafRef.current);
      portfolioRafRef.current = null;
    }
    portfolioLastTsRef.current = null;

    const speedPxPerSecond = 28;

    const loop = (ts: number) => {
      const target = portfolioRef.current;
      if (!target) return;

      const last = portfolioLastTsRef.current;
      portfolioLastTsRef.current = ts;

      if (last != null) {
        const delta = ts - last;
        const half = target.scrollWidth / 2;
        const max = target.scrollWidth - target.clientWidth;

        if (half > 0 && max > 0) {
          if (target.scrollLeft <= 0) target.scrollLeft += half;
          else if (target.scrollLeft >= max) target.scrollLeft -= half;
        }

        target.scrollLeft += (speedPxPerSecond * delta) / 1000;
      }

      portfolioRafRef.current = window.requestAnimationFrame(loop);
    };

    portfolioRafRef.current = window.requestAnimationFrame(loop);
    return () => {
      if (portfolioRafRef.current != null) {
        window.cancelAnimationFrame(portfolioRafRef.current);
        portfolioRafRef.current = null;
      }
      portfolioLastTsRef.current = null;
    };
  }, [reduceMotion, isPortfolioPaused]);

  const heroX = useMotionValue(0);
  const heroY = useMotionValue(0);
  const heroXSpring = useSpring(heroX, {
    stiffness: 90,
    damping: 20,
    mass: 0.35,
  });
  const heroYSpring = useSpring(heroY, {
    stiffness: 90,
    damping: 20,
    mass: 0.35,
  });
  const heroCardX = useTransform(heroXSpring, [-0.5, 0.5], [-10, 10]);
  const heroCardY = useTransform(heroYSpring, [-0.5, 0.5], [-8, 8]);
  const heroCardRotate = useTransform(heroXSpring, [-0.5, 0.5], [-1.25, 1.25]);
  const blobX = useTransform(heroXSpring, [-0.5, 0.5], [-14, 14]);
  const blobY = useTransform(heroYSpring, [-0.5, 0.5], [-12, 12]);
  const blobXInv = useTransform(blobX, (v) => -v);
  const blobYInv = useTransform(blobY, (v) => -v);

  const section = {
    hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.55, ease: [0.21, 1, 0.32, 1] as const },
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: reduceMotion ? {} : { staggerChildren: 0.08, delayChildren: 0.04 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.5, ease: [0.21, 1, 0.32, 1] as const },
    },
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="group inline-flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] transition-transform duration-200 group-hover:-translate-y-0.5">
              <Image
                src="/projects/favicon.svg"
                alt="Eight Digital"
                width={22}
                height={22}
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="font-display text-sm font-extrabold tracking-tight">
                Eight Digital
              </div>
              <div className="text-xs text-white/60">Desenvolvimento web</div>
            </div>
          </a>

          <nav className="hidden items-center gap-2 text-sm text-white/70 md:flex">
            {navItems.map((nav) => {
              const href = `#${nav.id}`;
              const isActive = activeNav === nav.id;
              return (
                <a
                  key={nav.id}
                  href={href}
                  onClick={() => setActiveNav(nav.id)}
                  className="group relative rounded-lg px-3 py-2 font-medium text-white/70 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
                >
                  <span className="relative z-10">{nav.label}</span>
                  {isActive ? (
                    <motion.span
                      layoutId="nav-underline"
                      transition={{
                        type: "spring",
                        stiffness: 520,
                        damping: 34,
                        mass: 0.7,
                      }}
                      className="absolute inset-x-2 bottom-1 h-[2px] rounded-full bg-[#7B2FFF]"
                    />
                  ) : (
                    <span className="absolute inset-x-2 bottom-1 h-[2px] rounded-full bg-white/0 transition-colors duration-200 group-hover:bg-white/15" />
                  )}
                </a>
              );
            })}
          </nav>

          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#0A0A0A] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main className="pt-20">
        <section
          className="relative overflow-hidden"
          onMouseMove={(event) => {
            if (reduceMotion) return;
            const bounds = event.currentTarget.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width - 0.5;
            const y = (event.clientY - bounds.top) / bounds.height - 0.5;
            heroX.set(x);
            heroY.set(y);
          }}
          onMouseLeave={() => {
            if (reduceMotion) return;
            heroX.set(0);
            heroY.set(0);
          }}
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[#0A0A0A]" />
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage: `
                  radial-gradient(700px 380px at 20% 10%, rgba(123,47,255,0.35), transparent 60%),
                  radial-gradient(680px 360px at 80% 20%, rgba(123,47,255,0.20), transparent 55%),
                  radial-gradient(520px 300px at 60% 85%, rgba(123,47,255,0.18), transparent 60%)
                `,
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(245,245,245,0.16) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(245,245,245,0.14) 1px, transparent 1px)
                `,
                backgroundSize: "72px 72px",
                maskImage:
                  "radial-gradient(70% 55% at 50% 12%, black 40%, transparent 70%)",
              }}
            />
          </div>

          <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-7">
                <motion.div variants={item} className="mb-6">
                  <Pill icon={<Sparkles className="h-4 w-4" />}>
                    Design premium + engenharia de verdade
                  </Pill>
                </motion.div>

                <motion.h1
                  variants={item}
                  className="font-display text-4xl font-extrabold tracking-tight text-[#F5F5F5] sm:text-5xl lg:text-6xl"
                >
                  Seu site não pode parecer amador.
                  <span className="block text-white/75">
                    A gente constrói páginas e sistemas que{" "}
                    <span className="bg-gradient-to-r from-[#F5F5F5] to-[#7B2FFF] bg-clip-text text-transparent">
                      vendem
                    </span>{" "}
                    e não quebram.
                  </span>
                </motion.h1>

                <motion.p
                  variants={item}
                  className="mt-5 max-w-2xl text-base font-light leading-relaxed text-white/70 sm:text-lg"
                >
                  Se hoje seu tráfego chega e não converte, o problema quase
                  sempre é o mesmo: layout sem confiança, copy fraca e site
                  lento. A Eight Digital resolve isso com UX, performance e um
                  processo que entrega.
                </motion.p>

                <motion.div
                  variants={item}
                  className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                  <PrimaryButton href={WHATSAPP_HREF}>
                    Pedir orçamento no WhatsApp
                  </PrimaryButton>
                  <SecondaryButton href="#portfolio">
                    Ver portfólio
                  </SecondaryButton>
                </motion.div>

                <motion.div
                  variants={item}
                  className="mt-10 flex flex-wrap gap-2 text-sm text-white/70"
                >
                  <Pill icon={<Zap className="h-4 w-4" />}>
                    Performance e SEO técnico
                  </Pill>
                  <Pill icon={<ShieldCheck className="h-4 w-4" />}>
                    Código estável e sustentável
                  </Pill>
                  <Pill icon={<Layers className="h-4 w-4" />}>
                    UI/UX com padrão premium
                  </Pill>
                </motion.div>
              </div>

              <div className="lg:col-span-5">
                <motion.div
                  variants={item}
                  style={
                    reduceMotion
                      ? undefined
                      : { x: heroCardX, y: heroCardY, rotate: heroCardRotate }
                  }
                >
                  <SpotlightCard className="p-5">
                    <motion.div
                      aria-hidden="true"
                      className="absolute -right-28 -top-28 h-64 w-64 rounded-full bg-[#7B2FFF]/20 blur-3xl"
                      style={reduceMotion ? undefined : { x: blobX, y: blobY }}
                    />
                    <motion.div
                      aria-hidden="true"
                      className="absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-[#7B2FFF]/18 blur-3xl"
                      style={reduceMotion ? undefined : { x: blobXInv, y: blobYInv }}
                    />

                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div className="text-xs font-semibold text-white/60">
                          Em 10 minutos no WhatsApp você sai com:
                        </div>
                        <div className="font-display text-xl font-extrabold tracking-tight">
                          Um plano de ataque
                        </div>
                      </div>

                      <motion.div
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                y: [0, -6, 0],
                                boxShadow: [
                                  "0 0 0 rgba(123,47,255,0.0)",
                                  "0 18px 60px rgba(123,47,255,0.22)",
                                  "0 0 0 rgba(123,47,255,0.0)",
                                ],
                              }
                        }
                        transition={
                          reduceMotion
                            ? undefined
                            : {
                                duration: 2.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }
                        }
                        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-[#0A0A0A]/60 px-3 py-1 text-xs text-white/80"
                      >
                        <BadgeCheck className="h-4 w-4 text-[#7B2FFF]" />
                        Resposta rápida
                      </motion.div>
                    </div>

                    <div className="mt-6 space-y-3">
                      {[
                        "O que você precisa fazer agora (prioridades).",
                        "O que cortar (o que não dá retorno).",
                        "Um escopo enxuto pra lançar e evoluir.",
                      ].map((t) => (
                        <div
                          key={t}
                          className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                        >
                          <div className="mt-0.5 grid h-6 w-6 place-items-center rounded-lg bg-[#7B2FFF]/15 text-[#7B2FFF]">
                            <CheckIcon />
                          </div>
                          <div className="text-sm text-white/75">{t}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <a
                        href={WHATSAPP_HREF}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#0A0A0A] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
                      >
                        Chamar agora
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </a>
                      <div className="mt-3 text-center text-xs text-white/55">
                        Sem reunião infinita. Sem proposta genérica.
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <Section className="py-8 sm:py-10">
          <motion.div
            variants={section}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:grid-cols-3 sm:gap-4 sm:p-6"
          >
            <Stat
              label="Projetos entregues"
              value="30+"
              hint="LPs, sites e produtos"
            />
            <Stat
              label="Sistemas em produção"
              value="12+"
              hint="estáveis e escaláveis"
            />
            <Stat
              label="Prazo médio"
              value="7–21d"
              hint="dependendo do escopo"
            />
          </motion.div>
        </Section>

        <Section id="servicos">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={item} className="max-w-2xl">
              <div className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                Serviços para você vender mais (e não travar depois).
              </div>
              <div className="mt-3 text-base font-light leading-relaxed text-white/70">
                Você sabe o que compra e o que entrega. A gente alinha escopo
                no WhatsApp e manda uma proposta direta.
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              <ServiceCard
                title="Landing Page"
                icon={<Zap className="h-5 w-5" />}
                bullets={[
                  "Copy orientada a conversão",
                  "Animações premium (sem exagero)",
                  "Performance e SEO técnico",
                ]}
                tag="Entrega rápida"
              />
              <ServiceCard
                title="E-commerce"
                icon={<ShoppingBag className="h-5 w-5" />}
                bullets={[
                  "Checkout fluido e rápido",
                  "Catálogo, banners e coleções",
                  "Eventos e métricas (Pixel/GA4)",
                ]}
                tag="Vender mais"
              />
              <ServiceCard
                title="Site Institucional"
                icon={<Layers className="h-5 w-5" />}
                bullets={[
                  "Design com autoridade",
                  "Seções com narrativa clara",
                  "Base pronta pra escalar",
                ]}
                tag="Marca forte"
              />
              <ServiceCard
                title="Sistema Web"
                icon={<Code2 className="h-5 w-5" />}
                bullets={[
                  "Dashboard + regras de negócio",
                  "Arquitetura estável",
                  "Fácil de manter e evoluir",
                ]}
                tag="Operação rodando"
              />
              <ServiceCard
                title="Branding"
                icon={<Sparkles className="h-5 w-5" />}
                bullets={[
                  "Identidade consistente",
                  "Direção visual e tom",
                  "Assets prontos pra uso",
                ]}
                tag="Mais premium"
              />
              <ServiceCard
                title="Imagens com IA"
                icon={<Wand2 className="h-5 w-5" />}
                bullets={[
                  "Imagens únicas para anúncios",
                  "Estilo alinhado à marca",
                  "Entrega rápida",
                ]}
                tag="Criativo"
              />
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 text-sm text-white/55"
            >
              Sem tabela engessada: orçamento sob medida com base em escopo,
              prazo e complexidade.
            </motion.div>
          </motion.div>
        </Section>

        <Section id="portfolio">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={item} className="max-w-2xl">
              <div className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                Portfólio que parece caro.
              </div>
              <div className="mt-3 text-base font-light leading-relaxed text-white/70">
                Visual forte, hierarquia clara, micro-interações e execução
                limpa. O objetivo não é “bonito”. É conversão.
              </div>
            </motion.div>

            <motion.div
              variants={item}
              ref={portfolioRef}
              onFocusCapture={() => setIsPortfolioPaused(true)}
              onBlurCapture={() => setIsPortfolioPaused(false)}
              onScroll={() => {
                const el = portfolioRef.current;
                if (!el) return;
                const half = el.scrollWidth / 2;
                const max = el.scrollWidth - el.clientWidth;
                if (half <= 0 || max <= 0) return;
                if (el.scrollLeft <= 0) el.scrollLeft += half;
                else if (el.scrollLeft >= max) el.scrollLeft -= half;
              }}
              onPointerDown={(e) => {
                if (portfolioResumeTimeoutRef.current != null) {
                  window.clearTimeout(portfolioResumeTimeoutRef.current);
                  portfolioResumeTimeoutRef.current = null;
                }
                setIsPortfolioPaused(true);
                if (e.pointerType !== "mouse") return;
                if (e.button !== 0) return;
                const el = portfolioRef.current;
                if (!el) return;
                portfolioDragRef.current = {
                  active: true,
                  pointerId: e.pointerId,
                  startX: e.clientX,
                  startScrollLeft: el.scrollLeft,
                };
                el.setPointerCapture(e.pointerId);
              }}
              onPointerMove={(e) => {
                const drag = portfolioDragRef.current;
                if (!drag?.active) return;
                const el = portfolioRef.current;
                if (!el) return;
                const dx = e.clientX - drag.startX;
                el.scrollLeft = drag.startScrollLeft - dx;
                const half = el.scrollWidth / 2;
                const max = el.scrollWidth - el.clientWidth;
                if (half <= 0 || max <= 0) return;
                if (el.scrollLeft <= 0) {
                  el.scrollLeft += half;
                  drag.startScrollLeft += half;
                } else if (el.scrollLeft >= max) {
                  el.scrollLeft -= half;
                  drag.startScrollLeft -= half;
                }
              }}
              onPointerUp={() => {
                const drag = portfolioDragRef.current;
                const el = portfolioRef.current;
                if (drag?.active && el) {
                  try {
                    el.releasePointerCapture(drag.pointerId);
                  } catch (err) {
                    void err;
                  }
                }
                portfolioDragRef.current = null;
                portfolioResumeTimeoutRef.current = window.setTimeout(() => {
                  setIsPortfolioPaused(false);
                }, 900);
              }}
              onPointerCancel={() => {
                portfolioDragRef.current = null;
                portfolioResumeTimeoutRef.current = window.setTimeout(() => {
                  setIsPortfolioPaused(false);
                }, 900);
              }}
              className="mt-10 flex gap-4 overflow-x-auto scroll-smooth pb-1 snap-x snap-proximity select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:cursor-grab md:active:cursor-grabbing"
            >
              {portfolioItems.map((p, i) => (
                <div
                  key={`${p.title}-${i}`}
                  data-portfolio-card="true"
                  className="snap-start shrink-0 basis-full md:basis-[calc(50%-0.5rem)] lg:basis-[calc(33.333%-0.666rem)]"
                >
                  <ProjectCard
                    title={p.title}
                    subtitle={p.subtitle}
                    imageSrc={p.imageSrc}
                    tags={[...p.tags]}
                    href={"href" in p ? p.href : undefined}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Section>

        <Section id="depoimentos">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={item} className="max-w-2xl">
              <div className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                Depoimentos
              </div>
              <div className="mt-3 text-base font-light leading-relaxed text-white/70">
                Exemplos de como clientes descrevem a entrega quando o site
                começa a passar confiança e performar.
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
                <BadgeCheck className="h-4 w-4 text-[#7B2FFF]" />
                Exemplos ilustrativos
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
            >
              {TESTIMONIALS.map((t) => (
                <TestimonialCard key={`${t.name}-${t.company}`} {...t} />
              ))}
            </motion.div>
          </motion.div>
        </Section>

        <Section id="faq">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={item} className="max-w-2xl">
              <div className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                FAQ curto + Garantia
              </div>
              <div className="mt-3 text-base font-light leading-relaxed text-white/70">
                Respostas diretas e uma garantia anti-risco pós-entrega.
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 grid gap-4 lg:grid-cols-3"
            >
              <SpotlightCard className="p-6" glow="rgba(123,47,255,0.16)">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#7B2FFF]/15 text-[#7B2FFF]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div className="rounded-full border border-white/12 bg-[#0A0A0A]/55 px-3 py-1 text-xs font-semibold text-white/70">
                    30 dias contra bugs
                  </div>
                </div>
                <div className="mt-4 font-display text-lg font-extrabold tracking-tight">
                  Garantia anti-risco
                </div>
                <div className="mt-2 text-sm font-light leading-relaxed text-white/75">
                  Qualquer bug técnico pós-entrega dentro de 30 dias é corrigido
                  sem custo. Foco em previsibilidade e confiança.
                </div>
              </SpotlightCard>

              <div className="grid gap-4 lg:col-span-2">
                {FAQ_ITEMS.map((f) => (
                  <SpotlightCard key={f.q} className="p-6" glow="rgba(123,47,255,0.12)">
                    <div className="font-display text-base font-extrabold tracking-tight">
                      {f.q}
                    </div>
                    <div className="mt-2 text-sm font-light leading-relaxed text-white/75">
                      {f.a}
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Section>

        <Section id="processo">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={item} className="max-w-2xl">
              <div className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                Como trabalhamos (sem drama).
              </div>
              <div className="mt-3 text-base font-light leading-relaxed text-white/70">
                Processo curto, alinhamento claro e execução rápida. Você
                acompanha tudo, sem microgerenciar.
              </div>
                <div className="mt-4 text-sm font-light leading-relaxed text-white/65">
                  O mesmo playbook vale para landing pages, e-commerces e
                  sistemas: clareza, velocidade e decisão guiada.
                </div>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              <StepCard
                number="01"
                title="Briefing cirúrgico"
                desc="A gente trava o objetivo, a oferta e o que precisa acontecer pra dar ROI. Sem PDF bonito que não vira nada."
                icon={<Sparkles className="h-5 w-5" />}
              />
              <StepCard
                number="02"
                title="UI/UX + Copy"
                desc="Design com autoridade e texto que conduz a ação. Cada bloco existe por um motivo."
                icon={<Layers className="h-5 w-5" />}
              />
              <StepCard
                number="03"
                title="Build rápido e sólido"
                desc="Código limpo, performance e componentes que não viram dor de cabeça depois."
                icon={<Code2 className="h-5 w-5" />}
              />
              <StepCard
                number="04"
                title="Deploy + ajustes"
                desc="Publica, mede, melhora. Você não fica refém: entregamos pra escalar com previsibilidade."
                icon={<ShieldCheck className="h-5 w-5" />}
              />
            </motion.div>
          </motion.div>
        </Section>

        <Section className="pb-20 sm:pb-24">
          <motion.div
            variants={section}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset] sm:p-10"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#7B2FFF]/35 blur-3xl" />
              <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-[#7B2FFF]/25 blur-3xl" />
            </div>

            <div className="relative grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#7B2FFF]/15 px-3 py-1 text-xs font-semibold text-[#F5F5F5]">
                  <Zap className="h-4 w-4 text-[#7B2FFF]" />
                  Vamos tirar isso do papel
                </div>
                <div className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Se a sua presença digital não passa confiança, você perde
                  dinheiro todo dia.
                </div>
                <div className="mt-3 max-w-2xl text-base font-light leading-relaxed text-white/70">
                  Chama no WhatsApp e manda o que você tem hoje (ou só a ideia).
                  A resposta vai ser direta: o que fazer, quanto custa e qual o
                  próximo passo.
                </div>
              </div>

              <div className="lg:col-span-5 lg:justify-self-end">
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                  <PrimaryButton href={WHATSAPP_HREF}>
                    Falar com a Eight
                  </PrimaryButton>
                  <a
                    href="mailto:contato@8ightdigital.com.br"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition-all duration-200 hover:border-white/25 hover:bg-white/10"
                  >
                    contato@8ightdigital.com.br
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </Section>
      </main>

      <footer className="border-t border-white/10 bg-[#0A0A0A]">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                  <Image
                    src="/projects/favicon.svg"
                    alt="Eight Digital"
                    width={22}
                    height={22}
                  />
                </div>
                <div>
                  <div className="font-display text-base font-extrabold tracking-tight">
                    Eight Digital
                  </div>
                  <div className="text-sm text-white/60">
                    Agência de desenvolvimento web
                  </div>
                </div>
              </div>
              <div className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/65">
                Construímos landing pages, e-commerces e sistemas com visual
                premium, performance e base técnica pra você escalar sem dor.
              </div>
            </div>

            <div className="sm:col-span-1 lg:col-span-3">
              <div className="text-sm font-semibold text-white/80">Contato</div>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp comercial{" "}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:contato@8ightdigital.com.br"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" /> contato@8ightdigital.com.br{" "}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/8ight.digital/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Instagram className="h-4 w-4" /> @8ight.digital{" "}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="text-sm font-semibold text-white/80">
                Navegação
              </div>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
                <a
                  href="#servicos"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  Serviços <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  Portfólio <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#processo"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  Como trabalhamos <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Eight Digital. Todos os direitos reservados.</div>
            <div className="text-white/45">
              Feito com Next.js, Tailwind e Framer Motion.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 7L10 17L4 11"
        stroke={BRAND.purple}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Stat({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0A0A0A]/40 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
      <div className="text-xs font-semibold text-white/55">{label}</div>
      <div className="mt-2 font-display text-3xl font-extrabold tracking-tight">
        {value}
      </div>
      <div className="mt-1 text-sm font-light text-white/60">{hint}</div>
    </div>
  );
}

function ServiceCard({
  title,
  icon,
  bullets,
  tag,
}: {
  title: string;
  icon: React.ReactNode;
  bullets: string[];
  tag: string;
}) {
  return (
    <SpotlightCard className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#7B2FFF]/15 text-[#7B2FFF]">
          {icon}
        </div>
        <div className="rounded-full border border-white/12 bg-[#0A0A0A]/55 px-3 py-1 text-xs font-semibold text-white/70">
          {tag}
        </div>
      </div>

      <div className="mt-5">
        <div className="font-display text-lg font-extrabold tracking-tight">
          {title}
        </div>
        <div className="mt-2 text-sm font-light text-white/65">
          Orçamento sob medida
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {bullets.map((b) => (
          <div key={b} className="flex items-start gap-3 text-sm text-white/75">
            <span className="mt-0.5 text-[#7B2FFF]">
              <Check className="h-4 w-4" />
            </span>
            <span>{b}</span>
          </div>
        ))}
      </div>
    </SpotlightCard>
  );
}

function ProjectCard({
  title,
  subtitle,
  imageSrc,
  tags,
  href,
}: {
  title: string;
  subtitle: string;
  imageSrc: string;
  tags: string[];
  href?: string;
}) {
  const resolvedHref = href ?? WHATSAPP_HREF;
  const isExternal =
    resolvedHref.startsWith("http://") ||
    resolvedHref.startsWith("https://") ||
    resolvedHref.startsWith("mailto:") ||
    resolvedHref.startsWith("tel:") ||
    resolvedHref === WHATSAPP_HREF;

  return (
    <SpotlightCard
      className="p-0"
      glow="rgba(123,47,255,0.18)"
    >
      <a
        href={resolvedHref}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="group flex h-full flex-col overflow-hidden rounded-2xl"
      >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          sizes="(max-width: 1024px) 100vw, 33vw"
          priority={false}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
        <div className="pointer-events-none absolute inset-0 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-display text-lg font-extrabold tracking-tight">
              {title}
            </div>
            <div className="mt-1 text-sm font-light text-white/70">
              {subtitle}
            </div>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors duration-200 group-hover:border-white/15 group-hover:text-white">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <div
              key={t}
              className="rounded-full border border-white/10 bg-[#0A0A0A]/45 px-3 py-1 text-xs text-white/70"
            >
              {t}
            </div>
          ))}
        </div>

        <div className="mt-5 text-sm font-semibold text-white/75">
          Ver como a Eight entrega <span style={{ color: BRAND.purple }}>UX + performance</span>
        </div>
      </div>
      </a>
    </SpotlightCard>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  company,
  highlight,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
  highlight: string;
}) {
  return (
    <SpotlightCard className="p-6" glow="rgba(123,47,255,0.14)">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#7B2FFF]/15 text-[#7B2FFF]">
          <BadgeCheck className="h-5 w-5" />
        </div>
        <div className="rounded-full border border-white/12 bg-[#0A0A0A]/55 px-3 py-1 text-xs font-semibold text-white/70">
          {highlight}
        </div>
      </div>

      <div className="mt-4 text-sm font-light leading-relaxed text-white/80">
        “{quote}”
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-white/85">{name}</div>
          <div className="mt-0.5 text-xs text-white/60">
            {role} · {company}
          </div>
        </div>
        <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5" />
      </div>
    </SpotlightCard>
  );
}

function StepCard({
  number,
  title,
  desc,
  icon,
}: {
  number: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <SpotlightCard className="p-6" glow="rgba(123,47,255,0.16)">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-white/55">{number}</div>
          <div className="mt-2 font-display text-lg font-extrabold tracking-tight">
            {title}
          </div>
        </div>
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#7B2FFF]/15 text-[#7B2FFF]">
          {icon}
        </div>
      </div>

      <div className="mt-3 text-sm font-light leading-relaxed text-white/70">
        {desc}
      </div>
    </SpotlightCard>
  );
}
