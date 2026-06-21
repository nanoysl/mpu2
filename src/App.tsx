import { Fragment, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Handshake,
  Mail,
  MessagesSquare,
  Minus,
  Phone,
  Plus,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import aboutCoachingBoardImage from "../assets/optimized/site/about-coaching-board.jpg";
import aboutOnlineTrainingImage from "../assets/optimized/site/about-online-training.jpg";
import ctaLicenseImage from "../assets/optimized/site/cta-license-handoff.jpg";
import heroMpuPlanImage from "../assets/optimized/site/hero-mpu-plan.jpg";
import coachingImage from "../assets/optimized/site/coaching-1zu1.jpg";
import kofferImage from "../assets/optimized/site/erste-hilfe-koffer.jpg";
import simulatorImage from "../assets/optimized/site/mpu-simulator.jpg";
import routeArrowImage from "../assets/generated/v2/route-arrow-white.png";
import processFallanalyseImage from "../assets/optimized/site/process-fallanalyse.jpg";
import processNachweiseImage from "../assets/optimized/site/process-nachweise.jpg";
import processTrainingImage from "../assets/optimized/site/process-training.jpg";
import processTerminImage from "../assets/optimized/site/process-termin.jpg";

const appBasePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function appHref(href: string) {
  if (/^(https?:|mailto:|tel:)/.test(href) || !href.startsWith("/")) {
    return href;
  }

  return `${appBasePath}${href}`;
}

const contactInfo = {
  email: "abalikci18@gmail.com",
  phoneLabel: "05971 9782341",
  phoneHref: "tel:+4959719782341",
  mobileLabel: "0176 72810840",
  mobileHref: "tel:+4917672810840"
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

const methodTabs = [
  {
    id: "fahrplan",
    title: "Persönlicher Fahrplan",
    text: "Du bekommst Orientierung, welche Themen, Nachweise und nächsten Schritte für deinen Fall relevant sind."
  },
  {
    id: "training",
    title: "Training & Begleitung",
    text: "Mit realistischen MPU-Fragen, digitalem Training und persönlichem Coaching bereitest du dich gezielt auf dein Gespräch vor."
  }
] as const;

function Navbar() {
  const links = [
    { label: "Programme", href: "/#programme" },
    { label: "Preise", href: "/#metrics", hasChevron: true },
    { label: "Ablauf", href: "/#ablauf" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Kontakt", href: "/kontakt.html" }
  ];

  return (
    <nav className="relative z-10 flex w-full items-center justify-between px-6 py-6 md:px-10">
      <div className="hidden flex-1 md:block" />
      <ul className="hidden items-center gap-8 text-sm font-normal text-[#030303] md:flex">
        {links.map((link) => (
          <li className="group flex items-center gap-1" key={link.label}>
            <a className="flex items-center gap-1 transition-opacity hover:opacity-70" href={appHref(link.href)}>
              {link.label}
              {link.hasChevron ? (
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              ) : null}
            </a>
          </li>
        ))}
      </ul>
      <a className="md:hidden" href={appHref("/")}>
        <span className="text-xl font-normal tracking-tighter text-[#030303]">MPU Safe</span>
      </a>
      <div className="flex flex-1 justify-end">
        <motion.a
          className="group flex items-center gap-2 rounded-full bg-[#F26522] py-1.5 pl-2 pr-4 text-white transition-colors hover:bg-[#e05a1a] md:gap-3 md:py-2 md:pr-6"
          href={appHref("/kontakt.html")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-center rounded-full bg-white/20 p-1 md:p-1.5">
            <ArrowUpRight className="h-4 w-4 text-white md:h-5 md:w-5" />
          </div>
          <span className="text-xs font-normal md:text-sm">Erstgespräch</span>
        </motion.a>
      </div>
    </nav>
  );
}

function HeroBadge() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/60 px-4 py-2 backdrop-blur-md"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Sparkles className="h-4 w-4 text-[#030303]" />
      <span className="text-[14px] font-normal text-[#030303]">MPU Fahrplan</span>
    </motion.div>
  );
}

function BottomLeftCard() {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      className="absolute bottom-28 left-4 right-auto flex w-fit min-w-[140px] flex-col gap-2 rounded-[1.2rem] bg-white/30 p-3 backdrop-blur-xl md:bottom-6 md:left-6 md:right-auto md:min-w-[150px] md:rounded-[1.5rem] md:p-4 lg:bottom-10 lg:left-10 lg:min-w-[180px] lg:gap-3 lg:rounded-[2.2rem] lg:p-5"
      initial={{ x: -20, opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="flex flex-col">
        <span className="text-2xl font-normal tracking-tight text-[#030303] md:text-3xl">3 Wege</span>
        <span className="text-[10px] font-normal uppercase tracking-wider text-[#030303] md:text-[12px]">
          Koffer, Simulator, Coaching
        </span>
      </div>
      <motion.a
        className="group flex items-center gap-2 self-start rounded-full bg-[#F26522] py-1.5 pl-1.5 pr-5 text-white transition-colors hover:bg-[#e05a1a]"
        href={appHref("/#programme")}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center justify-center rounded-full bg-white p-1">
          <ArrowUpRight className="h-4 w-4 text-[#F26522]" />
        </div>
        <span className="text-[14px] font-normal text-white">Programme</span>
      </motion.a>
    </motion.div>
  );
}

function BottomRightCorner() {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      className="absolute bottom-0 right-0 flex items-center gap-3 rounded-tl-[1.5rem] bg-[#f0f0f0] p-3 pb-3 pl-8 pt-5 sm:gap-4 sm:rounded-tl-[2rem] sm:p-4 sm:pl-10 sm:pt-6 md:gap-6 md:rounded-tl-[3.5rem] md:p-6 md:pl-14 md:pt-8"
      initial={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="pointer-events-none absolute -top-[1.5rem] right-0 h-[1.5rem] w-[1.5rem] sm:-top-[2rem] sm:h-[2rem] sm:w-[2rem] md:-top-[3.5rem] md:h-[3.5rem] md:w-[3.5rem]">
        <svg fill="none" height="100%" viewBox="0 0 56 56" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#f0f0f0" />
        </svg>
      </div>
      <div className="pointer-events-none absolute bottom-0 -left-[1.5rem] h-[1.5rem] w-[1.5rem] sm:-left-[2rem] sm:h-[2rem] sm:w-[2rem] md:-left-[3.5rem] md:h-[3.5rem] md:w-[3.5rem]">
        <svg fill="none" height="100%" viewBox="0 0 56 56" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z" fill="#f0f0f0" />
        </svg>
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F26522] bg-[#F26522] md:h-14 md:w-14">
        <ArrowUpRight className="h-5 w-5 text-white md:h-6 md:w-6" />
      </div>
      <div>
        <p className="text-[16px] font-normal text-[#030303] md:text-[20px]">Erstgespräch</p>
        <a
          className="flex items-center gap-1 text-[#030303] transition-opacity hover:opacity-70"
          href={appHref("/kontakt.html")}
        >
          <span className="text-[12px] font-normal md:text-[15px]">Kontakt</span>
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <div className="flex min-h-[100dvh] w-full items-center justify-center bg-[#f0f0f0] py-3 md:py-5" id="top">
      <section className="site-shell hero-shell group relative flex flex-col items-center overflow-hidden rounded-[1.5rem] md:rounded-[3rem]">
        <img
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover object-[55%_50%] lg:object-center"
          src={heroMpuPlanImage}
        />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_5%,rgba(255,255,255,0.82),rgba(255,255,255,0.24)_44%,rgba(240,240,240,0.08)_100%)]" />
        <div className="relative z-10 flex min-h-[inherit] w-full flex-col items-center">
          <Navbar />
          <div className="flex w-full max-w-4xl flex-col items-center px-6 pt-8 text-center">
            <HeroBadge />
            <motion.h1
              animate={{ opacity: 1, scale: 1 }}
              className="mb-2 text-4xl font-normal leading-[1.05] tracking-tight text-[#030303] sm:text-5xl md:text-6xl lg:text-[80px]"
              initial={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Digitale MPU Vorbereitung
            </motion.h1>
            <motion.p
              animate={{ opacity: 1 }}
              className="max-w-xl text-sm font-normal leading-relaxed text-[#030303] opacity-80 sm:text-base md:text-lg"
              initial={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Starte mit Koffer, trainiere im Simulator und nutze persönliches Coaching für deinen Fahrplan.
            </motion.p>
          </div>
          <BottomLeftCard />
          <BottomRightCorner />
        </div>
      </section>
    </div>
  );
}

function AboutSection() {
  return (
    <section className="overflow-hidden rounded-[1.5rem] bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 md:rounded-[3rem] lg:pb-24 lg:pt-32">
      <div className="site-shell">
        <div className="mb-6 flex items-center gap-3 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-[12px]">
            1
          </div>
          <p className="rounded-full px-3 py-1 text-[12px] font-medium sm:px-4 sm:py-1.5 sm:text-[13px]">
            MPU Safe Methode
          </p>
        </div>

        <h2 className="mb-12 px-5 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 sm:mb-16 sm:px-8 lg:mb-28 lg:px-12">
          Vorbereitung, die deinen Fall versteht
          <span className="sm:hidden"> </span>
          <br className="hidden sm:block" />
          und dich Schritt für Schritt begleitet.
        </h2>

        <div className="px-5 sm:px-8 lg:hidden">
          <p className="mb-6 text-[15px] font-medium leading-[1.6] text-gray-900 sm:text-[17px]">
            Wir verbinden digitale Übungen, klare Fallanalyse und persönliches Coaching, damit du weißt, was im Gespräch wirklich zählt.
          </p>

          <div className="mb-8">
            <a
              className="group flex w-fit items-center gap-3 rounded-full bg-[#F26522] py-2 pl-5 pr-2 text-[13px] font-medium text-white hover:bg-[#e05a1a] sm:pl-6 sm:text-[14px]"
              href={appHref("/kontakt.html")}
            >
              <span className="h-[20px] overflow-hidden">
                <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                  <span className="flex h-[20px] items-center">Erstgespräch planen</span>
                  <span className="flex h-[20px] items-center">Erstgespräch planen</span>
                </span>
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white sm:h-8 sm:w-8">
                <ArrowRight className="-rotate-45 text-[#F26522] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-0" size={14} />
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
            <div className="sm:w-[45%]">
              <img
                alt="Dreiteilige MPU Vorbereitung mit Training, Coaching und sicherer Fahrt"
                className="aspect-[4/3] w-full rounded-xl object-cover sm:rounded-2xl"
                src={aboutOnlineTrainingImage}
              />
            </div>
            <div className="sm:w-[55%]">
              <img
                alt="Coach erklärt MPU Fahrplan am Whiteboard"
                className="aspect-[4/3] w-full rounded-xl object-cover sm:rounded-2xl"
                src={aboutCoachingBoardImage}
              />
            </div>
          </div>
        </div>

        <div className="hidden grid-cols-[26%_1fr_48%] items-end gap-6 px-5 sm:px-8 lg:grid lg:px-12 xl:gap-8">
          <div className="self-end">
            <img
              alt="Dreiteilige MPU Vorbereitung mit Training, Coaching und sicherer Fahrt"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
              src={aboutOnlineTrainingImage}
            />
          </div>

          <div className="flex flex-col justify-end self-start">
            <p className="mb-6 whitespace-nowrap text-[16px] font-medium leading-[1.65] text-gray-900 xl:text-[18px]">
              Digitale Übungen, klare Fallanalyse
              <br />
              und persönliches Coaching geben dir
              <br />
              Orientierung bis zum MPU-Gespräch.
            </p>
            <a
              className="group flex w-fit items-center gap-3 rounded-full bg-[#F26522] py-2 pl-5 pr-2 text-[13px] font-medium text-white hover:bg-[#e05a1a] sm:pl-6 sm:text-[14px]"
              href={appHref("/kontakt.html")}
            >
              <span className="h-[20px] overflow-hidden">
                <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                  <span className="flex h-[20px] items-center">Erstgespräch planen</span>
                  <span className="flex h-[20px] items-center">Erstgespräch planen</span>
                </span>
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white sm:h-8 sm:w-8">
                <ArrowRight className="-rotate-45 text-[#F26522] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-0" size={14} />
              </span>
            </a>
          </div>

          <div className="self-end">
            <img
              alt="Coach erklärt MPU Fahrplan am Whiteboard"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
              src={aboutCoachingBoardImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodSection() {
  const [activeTab, setActiveTab] = useState<(typeof methodTabs)[number]["id"]>("fahrplan");
  const [countValue, setCountValue] = useState(0);
  const countStartedRef = useRef(false);
  const countFrameRef = useRef<number | null>(null);

  const handleStartCount = () => {
    if (countStartedRef.current) return;
    countStartedRef.current = true;

    const duration = 2000;
    const start = performance.now();
    const animateCount = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCountValue(Math.round(eased * 3));

      if (progress < 1) {
        countFrameRef.current = requestAnimationFrame(animateCount);
      }
    };

    countFrameRef.current = requestAnimationFrame(animateCount);
  };

  useEffect(() => {
    return () => {
      if (countFrameRef.current) {
        cancelAnimationFrame(countFrameRef.current);
      }
    };
  }, []);

  return (
    <section className="overflow-hidden bg-[#F4F6FA] py-20 text-[#111] lg:py-32" id="methode">
      <div className="site-shell grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <motion.div
            className="mb-6 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="h-2 w-2 rounded-full bg-[#F26522]" />
            <span className="text-[15px] font-medium tracking-wide">Die Methode</span>
          </motion.div>

          <motion.h2
            className="mb-8 text-[clamp(1.7rem,5.5vw,4.5rem)] font-medium leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Aus Unsicherheit wird ein klarer{" "}
            <span className="mx-[-0.02em] inline-flex h-[0.82em] w-[1.12em] translate-y-[-0.08em] scale-[1.08] items-center justify-center rounded-full bg-white align-middle shadow-[0_5px_18px_rgba(17,17,17,0.06)]">
              <Route className="h-[0.46em] w-[0.46em] text-[#F26522]" strokeWidth={2.2} />
            </span>{" "}
            MPU-Fahrplan.
          </motion.h2>

          <motion.div
            className="mb-12 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <ClipboardCheck className="h-[18px] w-[18px] text-gray-700" />
              <span className="text-[15px] font-medium">Fallanalyse</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <MessagesSquare className="h-[18px] w-[18px] text-gray-700" />
              <span className="text-[15px] font-medium">Simulator & Coaching</span>
            </div>
          </motion.div>

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {methodTabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <div
                  className={`overflow-hidden rounded-[24px] transition-all duration-300 ${
                    isActive ? "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)]" : "cursor-pointer hover:bg-black/5"
                  }`}
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <button
                    aria-expanded={isActive}
                    className="flex w-full items-center justify-between gap-6 p-7 text-left md:p-8"
                    type="button"
                  >
                    <span className="text-[22px] font-medium tracking-tight">{tab.title}</span>
                    <span className="relative grid h-9 w-9 flex-none place-items-center rounded-full bg-[#F4F6FA] text-[#111]">
                      <AnimatePresence initial={false} mode="wait">
                        {isActive ? (
                          <motion.span
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            initial={{ opacity: 0, rotate: 90 }}
                            key="minus"
                            transition={{ duration: 0.18 }}
                          >
                            <Minus className="h-5 w-5" />
                          </motion.span>
                        ) : (
                          <motion.span
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            initial={{ opacity: 0, rotate: -90 }}
                            key="plus"
                            transition={{ duration: 0.18 }}
                          >
                            <Plus className="h-5 w-5" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive ? (
                      <motion.div
                        animate={{ height: "auto", opacity: 1 }}
                        className="overflow-hidden"
                        exit={{ height: 0, opacity: 0 }}
                        initial={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="px-7 pb-7 text-[16px] leading-[1.65] text-gray-500 md:px-8 md:pb-8 md:text-[17px]">
                          {tab.text}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="h-full lg:col-span-7"
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="flex h-full min-h-[560px] flex-col gap-8 rounded-[2.5rem] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:p-8 xl:flex-row xl:p-12">
            <div className="flex flex-1 flex-col justify-between gap-12">
              <div>
                <div className="mb-5 flex items-center gap-2.5">
                  <CheckCircle className="h-5 w-5 text-[#ea580c]" />
                  <span className="text-[15px] font-bold tracking-wide">MPU - Fahrplan</span>
                </div>
                <p className="max-w-[300px] text-[18px] leading-[1.6] text-gray-500">
                  Strukturierte Vorbereitung für deine persönliche Situation: digital, verständlich und ohne Druck.
                </p>
                <p className="mt-6 max-w-[390px] text-[16px] leading-[1.65] text-gray-500 md:text-[15px] md:leading-[1.55]">
                  Viele MPU-Kandidaten wissen am Anfang nicht, wo sie anfangen sollen. Bei MPU Safe bekommst du keine
                  unübersichtliche Sammlung an Informationen, sondern einen klaren Fahrplan für deinen persönlichen
                  Fall. Wir helfen dir dabei, Ursachen, Nachweise und Gesprächsvorbereitung sinnvoll zu ordnen. Mit
                  digitalen Übungen, Simulator-Fragen und persönlicher Begleitung bereitest du dich strukturiert vor:
                  verständlich, realistisch und ohne unnötigen Druck.
                </p>
              </div>

              <div className="pb-0.5">
                <h3 className="mb-8 text-[clamp(1.7rem,5vw,46px)] font-medium leading-[1.1] tracking-tight">
                  Klarheit statt
                  <br />
                  Panik
                </h3>
                <a
                  className="flex w-full items-center justify-between rounded-full bg-[#F26522] px-7 py-4 text-[15px] font-medium text-white transition-colors hover:bg-[#e05a1a]"
                  href={appHref("/#programme")}
                >
                  Programme ansehen
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="relative h-[360px] w-full flex-shrink-0 overflow-hidden rounded-[2.5rem] md:h-[450px] xl:h-auto xl:w-[320px] 2xl:w-[410px]">
              <img
                alt="MPU Vorbereitung aus Training, Coaching und Fahrplan"
                className="absolute inset-0 z-0 h-full w-full object-cover"
                src={aboutOnlineTrainingImage}
              />
              <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(17,17,17,0.02),rgba(17,17,17,0.28))]" />

              <motion.div
                className="absolute right-6 top-6 z-10 flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-[15px] font-medium text-[#111] shadow-md lg:right-8 lg:top-8"
                initial={{ opacity: 0, scale: 0.86 }}
                transition={{ duration: 0.45, delay: 0.35 }}
                viewport={{ once: true, amount: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <BadgeCheck className="h-5 w-5 text-[#F26522]" />
                MPU-Check
              </motion.div>

              <motion.div
                className="absolute bottom-6 left-6 z-10 w-[208px] overflow-hidden rounded-[28px] bg-white text-[#111] shadow-lg lg:bottom-8 lg:left-8"
                initial={{ opacity: 0, x: -20 }}
                onViewportEnter={handleStartCount}
                transition={{ duration: 0.45, delay: 0.45 }}
                viewport={{ once: true, amount: 0.3 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="px-5 pb-4 pt-5">
                  <p className="mb-1.5 text-[15px] font-medium text-gray-600">Wege</p>
                  <p className="text-[42px] font-medium leading-none tracking-tight">{countValue}</p>
                </div>
                <div className="flex items-center justify-center bg-[#F26522] px-4 py-3 text-white">
                  <span className="whitespace-nowrap text-[13px] font-medium tracking-tight">Koffer · Simulator · Coaching</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const metrics = [
  { value: "19,99 €", label: "Digitaler Einstieg" },
  { value: "69 €", label: "Simulator Zugang" },
  { value: "3", label: "Vorbereitungswege" },
  { value: "1:1", label: "Persönliches Coaching" }
];

const processSteps = [
  {
    id: "fallanalyse",
    number: "01",
    title: "Fallanalyse",
    copy: "Gemeinsam analysieren wir Ihren Fall, klären die Ursachen und definieren die Ziele.",
    image: processFallanalyseImage,
    imagePosition: "50% 50%",
    alt: "Fallanalyse-Dokument auf einem Klemmbrett"
  },
  {
    id: "nachweise",
    number: "02",
    title: "Nachweise",
    copy: "Wir planen alle erforderlichen Nachweise individuell, realistisch und fristgerecht.",
    image: processNachweiseImage,
    imagePosition: "50% 50%",
    alt: "Nachweisplan auf einem Klemmbrett"
  },
  {
    id: "training",
    number: "03",
    title: "Training",
    copy: "Im Gesprächstraining üben wir realistische Situationen - sicher und souverän.",
    image: processTrainingImage,
    imagePosition: "50% 50%",
    alt: "Ruhiger Raum für Gesprächstraining"
  },
  {
    id: "termin",
    number: "04",
    title: "Termin",
    copy: "Wir begleiten Sie bis zum MPU-Termin und stehen an Ihrer Seite.",
    image: processTerminImage,
    imagePosition: "50% 50%",
    alt: "Auto auf einer Bergstraße als Symbol für den MPU-Termin",
    final: true
  }
];

const checkoutLinks = {
  koffer: "https://www.checkout-ds24.com/product/702557",
  simulator: "https://www.checkout-ds24.com/product/703066",
  coaching: "https://www.checkout-ds24.com/product/703137"
} as const;

const simulatorAccessStorageKey = "mpu-safe-simulator-access";
const simulatorAccessToken = "paid";

const knownAppRoutes = ["/koffer", "/simulator", "/coaching", "/kontakt", "/simulator-zugang", "/ueber-uns"] as const;

function hasSimulatorAccessParam(search: string) {
  return new URLSearchParams(search).get("access") === simulatorAccessToken;
}

function hasStoredSimulatorAccess() {
  try {
    return window.localStorage.getItem(simulatorAccessStorageKey) === simulatorAccessToken;
  } catch {
    return false;
  }
}

function storeSimulatorAccess() {
  try {
    window.localStorage.setItem(simulatorAccessStorageKey, simulatorAccessToken);
  } catch {
    // The checkout redirect should still unlock the current visit if storage is unavailable.
  }
}

const programPages = {
  koffer: {
    eyebrow: "MPU Erste-Hilfe-Koffer",
    title: "Ordnung für deinen MPU-Start.",
    copy: "Der schnelle Einstieg, wenn du Fristen, Nachweise und nächste Schritte endlich sortiert haben willst.",
    price: "19,99 €",
    note: "Digitaler Einstieg",
    image: kofferImage,
    checkout: checkoutLinks.koffer,
    primaryLabel: "Koffer kaufen",
    secondaryLabel: "Ablauf prüfen",
    secondaryHref: "/#ablauf",
    points: ["PDF-Guide für den Sofortstart", "Checklisten für Fristen und Nachweise", "Audio-Mentoring zur Orientierung"],
    sections: [
      {
        title: "Fallanalyse",
        copy: "Du sortierst, warum die MPU bei dir angeordnet wurde und welche Themen wirklich relevant sind."
      },
      {
        title: "Nachweise",
        copy: "Checklisten helfen dir dabei, Fristen, Unterlagen und mögliche Abstinenz- oder Verhaltensnachweise zu ordnen."
      },
      {
        title: "Nächste Schritte",
        copy: "Am Ende hast du keinen Informationsberg, sondern eine klare Reihenfolge für deine Vorbereitung."
      }
    ]
  },
  simulator: {
    eyebrow: "MPU Safe Simulator",
    title: "15 Fragen, die deine Lücken sichtbar machen.",
    copy: "Ein digitaler Vorbereitungscheck für realistische MPU-Situationen. Kein offizieller Bestehenstest, sondern ein ehrlicher Risiko-Spiegel.",
    price: "69 €",
    note: "Simulator Zugang",
    image: simulatorImage,
    checkout: checkoutLinks.simulator,
    primaryLabel: "Simulator kaufen",
    secondaryLabel: "Zugang ansehen",
    secondaryHref: "/simulator-zugang",
    points: ["15 Reflexionsfragen", "Risikoprofil nach Abschluss", "Zugang nach externer Zahlung"],
    sections: [
      {
        title: "Fragebogen",
        copy: "15 Fragen führen dich durch typische MPU-Themen wie Ursache, Veränderung, Nachweise und Gesprächssicherheit."
      },
      {
        title: "Reflexion",
        copy: "Die Fragen sind streng formuliert, damit unklare Antworten früh sichtbar werden und du gezielter üben kannst."
      },
      {
        title: "Auswertung",
        copy: "Nach dem Durchlauf bekommst du ein Risikoprofil mit den Bereichen, an denen du weiterarbeiten solltest."
      }
    ]
  },
  coaching: {
    eyebrow: "1:1 MPU Coaching",
    title: "Persönlicher Fahrplan für deinen Fall.",
    copy: "Für alle, die nicht nur Material wollen, sondern eine klare Einordnung und persönliche Begleitung bis zum MPU-Gespräch.",
    price: "ab 900 €",
    note: "Persönliche Begleitung",
    image: coachingImage,
    checkout: checkoutLinks.coaching,
    primaryLabel: "Coaching buchen",
    secondaryLabel: "Methode ansehen",
    secondaryHref: "/#methode",
    points: ["Fallanalyse im Gespräch", "Training mit realistischen Situationen", "Begleitung bis zum Termin"],
    sections: [
      {
        title: "Analyse",
        copy: "Wir ordnen deinen Fall persönlich ein und klären, welche Punkte im Gespräch kritisch werden können."
      },
      {
        title: "Training",
        copy: "Du übst realistische Gesprächssituationen, ohne dich auf auswendig gelernte Standardantworten zu verlassen."
      },
      {
        title: "Begleitung",
        copy: "Du bekommst Struktur bis zum Termin und weißt, welche Schritte als Nächstes dran sind."
      }
    ]
  }
} as const;

type ProgramKey = keyof typeof programPages;

const checkoutNotices: Record<ProgramKey, string> = {
  koffer: "Zahlung, Rechnung und digitale Auslieferung laufen sicher über Digistore24.",
  simulator: "Zahlung, Rechnung und Zugang laufen über Digistore24. Nach dem Kauf leitet Digistore24 direkt zur freigeschalteten 15-Fragen-Seite weiter.",
  coaching: "Buchung und Rechnung laufen über Digistore24. Sensible Unterlagen bitte erst nach persönlicher Abstimmung übermitteln."
};

const simulatorQuestions = [
  {
    topic: "Ursachenklärung",
    question: "Warum sind Sie häufiger zu schnell gefahren?",
    options: [
      { label: "A", text: "Beruflicher Zeitdruck", risk: 93, note: "Wirkt wie eine Erklärung über äußeren Druck statt eigener Verantwortung." },
      { label: "B", text: "Straßen waren frei und übersichtlich", risk: 89, note: "Relativiert das Tempolimit und macht die Situation wichtiger als die Regel." }
    ]
  },
  {
    topic: "Regelakzeptanz",
    question: "Was dachten Sie über das Tempolimit?",
    options: [
      { label: "A", text: "Das Schild war unlogisch", risk: 95, note: "Klingt nach Ablehnung der Regel und kann im Gespräch sofort kritisch werden." },
      { label: "B", text: "Ich habe das Schild übersehen", risk: 87, note: "Zeigt fehlende Aufmerksamkeit und braucht eine klare Veränderungsstrategie." }
    ]
  },
  {
    topic: "Selbstbild",
    question: "Wie waren Sie früher als Autofahrer?",
    options: [
      { label: "A", text: "Eigentlich sehr gut, bis auf wenige Verstöße", risk: 91, note: "Verkleinert das Muster und wirkt noch nicht ausreichend selbstkritisch." },
      { label: "B", text: "Früher Raser, heute komplett verändert", risk: 86, note: "Die Veränderung klingt groß, braucht aber Belege und konkrete Beispiele." }
    ]
  },
  {
    topic: "Handynutzung",
    question: "Warum nutzten Sie das Handy am Steuer?",
    options: [
      { label: "A", text: "Wichtige Anrufe", risk: 94, note: "Setzt den Anlass über die Verkehrssicherheit und wirkt wenig tragfähig." },
      { label: "B", text: "Nur ganz kurz", risk: 90, note: "Verharmlost das Verhalten und zeigt noch keine stabile Grenze." }
    ]
  },
  {
    topic: "Dunkelfeld",
    question: "Wie oft haben Sie das Handy genutzt, ohne erwischt zu werden?",
    options: [
      { label: "A", text: "Fast nie", risk: 88, note: "Klingt defensiv und lässt offen, ob das tatsächliche Muster erkannt wurde." },
      { label: "B", text: "Nur in Ausnahmefällen", risk: 92, note: "Ausnahmen sind im MPU-Gespräch oft genau der kritische Punkt." }
    ]
  },
  {
    topic: "Abstand und Druck",
    question: "Warum sind Sie aufgefahren oder haben gedrängelt?",
    options: [
      { label: "A", text: "Der Vordermann provozierte", risk: 96, note: "Schiebt Verantwortung auf andere und zeigt ein Konfliktmuster." },
      { label: "B", text: "Abstand falsch eingeschätzt", risk: 87, note: "Braucht mehr als Einsicht: konkret, wie Abstand heute gesichert wird." }
    ]
  },
  {
    topic: "Verantwortung",
    question: "Warum wurden Sie mehrfach geblitzt?",
    options: [
      { label: "A", text: "Pech", risk: 97, note: "Pech klingt nach Zufall statt wiederkehrender Ursache." },
      { label: "B", text: "Falscher Zeitpunkt", risk: 94, note: "Auch diese Antwort lenkt vom eigenen Verhalten weg." }
    ]
  },
  {
    topic: "Perspektivwechsel",
    question: "Was dachten Sie über andere Verkehrsteilnehmer?",
    options: [
      { label: "A", text: "Ich hatte alles im Griff", risk: 93, note: "Wirkt überschätzt und kann als mangelnde Gefahrenwahrnehmung gelesen werden." },
      { label: "B", text: "Darüber habe ich nicht nachgedacht", risk: 89, note: "Zeigt fehlenden Perspektivwechsel und braucht Nacharbeit." }
    ]
  },
  {
    topic: "Einsicht",
    question: "Was hat der Führerscheinentzug bewirkt?",
    options: [
      { label: "A", text: "Viel zu harte Strafe", risk: 98, note: "Signalisiert Widerstand gegen die Konsequenz." },
      { label: "B", text: "Das Beste, was passieren konnte", risk: 85, note: "Kann gut sein, wirkt ohne konkrete Veränderung aber schnell auswendig gelernt." }
    ]
  },
  {
    topic: "Motivation",
    question: "Warum brauchen Sie den Führerschein zurück?",
    options: [
      { label: "A", text: "Wegen Arbeit", risk: 90, note: "Ein äußerer Grund reicht nicht, wenn die innere Veränderung fehlt." },
      { label: "B", text: "Wegen Familie", risk: 88, note: "Auch ein wichtiger Grund ersetzt keine stabile Verhaltensänderung." }
    ]
  },
  {
    topic: "Stabilität",
    question: "Wie lange fahren Sie schon regelkonform?",
    options: [
      { label: "A", text: "Seit wenigen Wochen", risk: 94, note: "Die Veränderung wirkt noch sehr frisch und wenig gefestigt." },
      { label: "B", text: "Das beweise ich nach der MPU", risk: 96, note: "Die MPU erwartet vorher erkennbare Stabilität, nicht erst danach." }
    ]
  },
  {
    topic: "Rückfallplan",
    question: "Wie verhindern Sie Rückfälle?",
    options: [
      { label: "A", text: "Starker Wille", risk: 95, note: "Wille allein ist kein belastbarer Plan für schwierige Situationen." },
      { label: "B", text: "Ich fahre früher los", risk: 84, note: "Ein guter Baustein, aber als alleiniger Plan noch zu dünn." }
    ]
  },
  {
    topic: "Konfliktverhalten",
    question: "Was tun Sie bei einer Provokation im Straßenverkehr?",
    options: [
      { label: "A", text: "Kurz hupen und reagieren", risk: 94, note: "Reaktion auf Provokation bleibt sichtbar und kann als Rückfallmuster gelten." },
      { label: "B", text: "Ruhig bleiben", risk: 83, note: "Die Antwort ist richtig gemeint, braucht aber konkrete Technik und Beispiel." }
    ]
  },
  {
    topic: "Folgenbewusstsein",
    question: "Hatten Sie Schuldgefühle?",
    options: [
      { label: "A", text: "Nein, es ist nichts passiert", risk: 97, note: "Verknüpft Verantwortung nur mit eingetretenem Schaden." },
      { label: "B", text: "Wochenlang extrem", risk: 86, note: "Starke Schuldgefühle ersetzen keine geordnete Ursachenarbeit." }
    ]
  },
  {
    topic: "Vorbereitung",
    question: "Brauchen Sie professionelle Vorbereitung?",
    options: [
      { label: "A", text: "Nein, ich kenne die Regeln", risk: 95, note: "Regelwissen ist nicht dasselbe wie glaubwürdige Verhaltensänderung." },
      { label: "B", text: "Nein, ich habe genug nachgedacht", risk: 92, note: "Nachdenken muss im Gespräch nachvollziehbar und strukturiert werden." }
    ]
  }
] as const;

function Metrics() {
  return (
    <section className="site-shell py-6 md:py-12" id="metrics">
      <div className="rounded-[1.5rem] border border-[rgba(30,50,90,0.05)] bg-[rgba(30,50,90,0.02)] p-8 md:rounded-[3rem] md:p-16">
        <div className="grid grid-cols-1 divide-y divide-[rgba(30,50,90,0.1)] md:grid-cols-4 md:divide-x md:divide-y-0">
          {metrics.map((item, index) => (
            <motion.div
              className="px-2 py-8 first:pt-0 last:pb-0 md:px-8 md:py-0 md:first:pt-0 md:last:pb-0"
              initial="hidden"
              key={item.label}
              transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
              variants={fadeUp}
              viewport={{ once: true, amount: 0.4 }}
              whileInView="show"
            >
              <p className="text-5xl font-normal tracking-tight text-[#030303] md:text-6xl">{item.value}</p>
              <p className="mt-3 text-sm uppercase tracking-wider text-[#030303]">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingPackages() {
  return (
    <section className="c2-section" id="programme">
      <div className="c2-container">
        <p className="c2-eyebrow">PROGRAMME</p>
        <h2 className="c2-title">
          Welcher Einstieg passt <em>zu dir?</em>
        </h2>

        <div className="c2-grid-wrapper">
          <div className="c2-grid">
            <article className="c2-card">
              <div className="c2-dot-bl" />
              <div className="c2-dot-br" />
              <h3 className="c2-card-title">MPU Erste-Hilfe-Koffer</h3>
              <div className="c2-price">
                <span className="c2-price-amount">19,99 €</span>
                <span>einmalig</span>
              </div>
              <ul className="c2-list bordered">
                <li>PDF-Guide für den Sofortstart</li>
                <li>Checklisten für Fristen und Nachweise</li>
                <li>Audio-Mentoring zur Orientierung</li>
                <li>Kein öffentlicher Download im Repo</li>
              </ul>
              <p className="c2-desc">
                Perfekt, wenn du schnell Ordnung in deinen Fall bringen und die nächsten Schritte klar sehen willst.
              </p>
              <a className="c2-btn" data-package="MPU Erste-Hilfe-Koffer" href={appHref("/koffer")}>
                Mehr erfahren
              </a>
              <img alt="" className="c2-product" loading="lazy" src={kofferImage} />
            </article>

            <article className="c2-card" data-card="simulator">
              <div className="c2-dot-bl" />
              <div className="c2-dot-br" />
              <h3 className="c2-card-title">MPU Safe Simulator</h3>
              <div className="c2-price">
                <span className="c2-price-amount">69 €</span>
                <span>einmalig</span>
              </div>
              <ul className="c2-list bordered">
                <li>Realistische MPU-Fragen</li>
                <li>Reflexion statt Auswendiglernen</li>
                <li>Digitale Vorbereitung im Browser</li>
                <li>Zugang nach externer Zahlung</li>
              </ul>
              <a className="c2-btn" data-package="MPU Safe Simulator" href={appHref("/simulator")}>
                Mehr erfahren
              </a>
              <img alt="" className="c2-product" loading="lazy" src={simulatorImage} />
            </article>
          </div>
        </div>

        <article className="c2-card c2-bottom-card" id="coaching">
          <h3 className="c2-card-title">1:1 MPU Coaching</h3>
          <div className="c2-price c2-coaching-price">
            <span className="c2-price-amount">ab 900 €</span>
          </div>
          <p className="c2-bottom-desc">
            Du brauchst einen persönlichen Fahrplan?
            <br />
            Dann klären wir Fallanalyse, Nachweise und Gesprächstraining individuell im Erstgespräch.
          </p>
          <a className="c2-btn" data-package="1:1 MPU Coaching" href={appHref("/coaching")}>
            Mehr erfahren
          </a>
          <div
            aria-hidden="true"
            className="c2-landscape"
            style={{ backgroundImage: `url("${coachingImage}?v=coaching-card-bg")` }}
          />
        </article>
      </div>
    </section>
  );
}

function Features() {
  const processTrackRef = useRef<HTMLDivElement | null>(null);
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  const scrollToProcessStep = (stepIndex: number) => {
    const nextStep = (stepIndex + processSteps.length) % processSteps.length;
    setActiveProcessStep(nextStep);

    const track = processTrackRef.current;
    if (!track) return;

    track.scrollTo({
      left: nextStep * track.clientWidth,
      behavior: "smooth"
    });
  };

  const handleProcessScroll = () => {
    const track = processTrackRef.current;
    if (!track) return;

    const nextStep = Math.round(track.scrollLeft / track.clientWidth);
    if (nextStep !== activeProcessStep) {
      setActiveProcessStep(Math.max(0, Math.min(processSteps.length - 1, nextStep)));
    }
  };

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("#ablauf .reveal"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!items.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px 12% 0px" }
    );

    items.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index % 5, 4) * 70}ms`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="process-section" id="ablauf" aria-labelledby="process-title">
      <div className="section-shell">
        <div className="section-heading narrow">
          <p className="eyebrow">Unser bewährter Prozess</p>
          <h2 id="process-title">In 4 klaren Schritten zur besten Vorbereitung</h2>
        </div>

        <div className="process-grid" aria-label="MPU Safe Ablauf" onScroll={handleProcessScroll} ref={processTrackRef}>
          {processSteps.map((step, index) => (
            <Fragment key={step.number}>
              <article
                className={step.final ? "process-card process-card-final reveal" : "process-card reveal"}
                data-process-step={index}
                id={step.id}
              >
                {step.final ? <img className="route-doodle" src={routeArrowImage} alt="" aria-hidden="true" /> : null}
                <div className="process-copy">
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
                <div className="process-media">
                  <img src={step.image} alt={step.alt} style={{ objectPosition: step.imagePosition }} />
                </div>
              </article>
              {index < processSteps.length - 1 ? (
                <div className="process-arrow" aria-hidden="true">
                  &#8250;
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>

        <div className="process-carousel-controls" aria-label="Prozess-Schritte">
          <button aria-label="Vorheriger Schritt" onClick={() => scrollToProcessStep(activeProcessStep - 1)} type="button">
            <ChevronLeft aria-hidden="true" />
          </button>
          <div className="process-dots">
            {processSteps.map((step, index) => (
              <button
                aria-label={`Schritt ${step.number} anzeigen`}
                aria-current={activeProcessStep === index ? "step" : undefined}
                className={activeProcessStep === index ? "active" : ""}
                key={step.number}
                onClick={() => scrollToProcessStep(index)}
                type="button"
              />
            ))}
          </div>
          <button aria-label="Nächster Schritt" onClick={() => scrollToProcessStep(activeProcessStep + 1)} type="button">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>

        <div className="competence-strip reveal" aria-label="Vertrauen durch Kompetenz">
          <div className="competence-lead">
            <span className="shield-mark" aria-hidden="true">OK</span>
            <p>Vertrauen durch Kompetenz</p>
            <h2>
              Mehr als Vorbereitung. <br />
              Ein Plan für Ihre Zukunft.
            </h2>
          </div>
          <article>
            <span className="competence-icon" aria-hidden="true">
              <BrainCircuit />
            </span>
            <strong>Medizinisch &amp; psychologisch fundiert</strong>
            <p>Unsere Methoden basieren auf aktuellen wissenschaftlichen Standards.</p>
          </article>
          <article>
            <span className="competence-icon" aria-hidden="true">
              <UsersRound />
            </span>
            <strong>Erfahrene Experten</strong>
            <p>Psychologen, Verkehrsexperten und MPU-Berater mit langjähriger Praxis.</p>
          </article>
          <article>
            <span className="competence-icon" aria-hidden="true">
              <Handshake />
            </span>
            <strong>Ganzheitliche Begleitung</strong>
            <p>Von der ersten Analyse bis zur erfolgreichen MPU - wir bleiben an Ihrer Seite.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="flex w-full items-center justify-center bg-[#f0f0f0] py-8 md:py-12">
      <div className="site-shell relative flex min-h-[32rem] items-center overflow-hidden rounded-[1.5rem] md:rounded-[3rem]">
        <img alt="" className="absolute inset-0 h-full w-full object-cover object-[62%_50%]" src={ctaLicenseImage} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,24,42,0.7),rgba(13,24,42,0.42)_42%,rgba(13,24,42,0.18))]" />
        <div className="relative z-10 max-w-3xl p-8 text-white md:p-16">
          <h2 className="text-4xl font-normal leading-tight tracking-tight md:text-6xl">
            Bring deinen Fall in einen klaren Fahrplan.
          </h2>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a className="inline-flex items-center gap-3 rounded-full bg-[#F26522] py-2 pl-7 pr-2 text-base font-normal text-white transition-colors hover:bg-[#e05a1a]" href={appHref("/#programme")}>
              Programme
              <span className="rounded-full bg-white p-2">
                <ArrowRight className="h-5 w-5 text-[#F26522]" />
              </span>
            </a>
            <a className="inline-flex items-center justify-center rounded-full bg-[#F26522] px-7 py-3 text-base font-normal text-white transition-colors hover:bg-[#e05a1a]" href={appHref("/kontakt.html")}>
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const footerColumns = [
  {
    title: "Programme",
    href: "/#programme",
    links: [
      { label: "Koffer", href: "/koffer" },
      { label: "Simulator", href: "/simulator" },
      { label: "Coaching", href: "/coaching" }
    ]
  },
  {
    title: "Vorbereitung",
    href: "/#methode",
    links: [
      { label: "Fallanalyse", href: "/#fallanalyse" },
      { label: "Nachweise", href: "/#nachweise" },
      { label: "Training", href: "/#training" }
    ]
  },
  {
    title: "Kontakt",
    href: "/kontakt.html",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Erstgespräch", href: "/kontakt.html" },
      { label: "Impressum", href: "/impressum.html" },
      { label: "Datenschutz", href: "/datenschutz.html" },
      { label: "AGB", href: "/agb.html" },
      { label: "Widerruf", href: "/widerruf.html" }
    ]
  }
] as const;

function Footer() {
  return (
    <footer className="site-shell border-t border-[rgba(30,50,90,0.12)] px-6 py-12" id="kontakt">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-2xl font-normal tracking-tighter text-[#030303]">MPU Safe</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#030303]">
            Digitale MPU Vorbereitung mit klaren Produkten, externer Zahlung und geschützter Auslieferung.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <a
                className="mb-4 block text-sm text-[#030303] transition-opacity hover:opacity-70"
                href={appHref(column.href)}
              >
                {column.title}
              </a>
              <div className="grid gap-3">
                {column.links.map((link) => (
                  <a
                    className="text-sm text-[#030303] transition-opacity hover:opacity-70"
                    href={appHref(link.href)}
                    key={link.label}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

function PageHeader() {
  const links = [
    { label: "Start", href: "/" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Koffer", href: "/koffer" },
    { label: "Simulator", href: "/simulator" },
    { label: "Coaching", href: "/coaching" },
    { label: "Kontakt", href: "/kontakt.html" }
  ];

  return (
    <nav className="site-shell flex items-center justify-between px-6 py-6 md:px-10">
      <a className="text-xl font-medium tracking-tight text-[#030303]" href={appHref("/")}>
        MPU Safe
      </a>
      <div className="hidden items-center gap-7 text-sm text-[#030303] md:flex">
        {links.map((link) => (
          <a className="transition-opacity hover:opacity-70" href={appHref(link.href)} key={link.label}>
            {link.label}
          </a>
        ))}
      </div>
      <a
        className="inline-flex items-center gap-2 rounded-full bg-[#F26522] py-2 pl-4 pr-5 text-sm font-medium text-white transition-colors hover:bg-[#e05a1a]"
        href={appHref("/kontakt.html")}
      >
        <ArrowUpRight className="h-4 w-4" />
        Kontakt
      </a>
    </nav>
  );
}

function ProgramHero({ programKey }: { programKey: ProgramKey }) {
  const program = programPages[programKey];

  return (
    <section className="site-shell pb-10 md:pb-14">
      <div className="grid overflow-hidden rounded-[1.5rem] bg-white shadow-[0_24px_80px_rgba(17,24,39,0.08)] md:rounded-[3rem] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="flex min-h-[560px] flex-col justify-between p-8 md:p-12 lg:p-16">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#F4F6FA] px-4 py-2 text-sm font-medium text-[#030303]">
              <CheckCircle className="h-4 w-4 text-[#F26522]" />
              {program.eyebrow}
            </p>
            <h1 className="max-w-2xl text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[0.96] tracking-tight text-[#030303]">
              {program.title}
            </h1>
            <p className="mt-7 max-w-xl text-[18px] leading-[1.65] text-gray-600">{program.copy}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-[auto_1fr] md:items-end">
            <div>
              <p className="text-[clamp(2.4rem,6vw,4.4rem)] font-medium leading-none tracking-tight text-[#030303]">
                {program.price}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-500">{program.note}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <a
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F26522] px-7 py-4 text-[15px] font-medium text-white transition-colors hover:bg-[#e05a1a]"
                href={program.checkout}
              >
                {program.primaryLabel}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#F4F6FA] px-7 py-4 text-[15px] font-medium text-[#030303] transition-colors hover:bg-[#e8ebf1]"
                href={appHref(program.secondaryHref)}
              >
                {program.secondaryLabel}
              </a>
            </div>
            {checkoutNotices[programKey] ? (
              <p className="md:col-span-2 text-sm font-medium leading-relaxed text-gray-500 md:text-right">
                {checkoutNotices[programKey]}
              </p>
            ) : null}
          </div>
        </div>

        <div className="relative min-h-[460px] overflow-hidden bg-[#F4F6FA] lg:min-h-[680px]">
          <img alt="" className="absolute inset-0 h-full w-full object-cover" src={program.image} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.18))]" />
          <div className="absolute bottom-6 left-6 right-6 rounded-[28px] bg-white p-6 shadow-[0_18px_50px_rgba(17,24,39,0.18)] md:bottom-8 md:left-8 md:right-auto md:w-[360px]">
            <p className="mb-4 text-sm font-medium text-gray-500">Enthalten</p>
            <div className="grid gap-3">
              {program.points.map((point) => (
                <div className="flex items-start gap-3 text-sm font-medium text-[#030303]" key={point}>
                  <BadgeCheck className="mt-0.5 h-4 w-4 flex-none text-[#F26522]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramOverview({ programKey }: { programKey: ProgramKey }) {
  const program = programPages[programKey];

  return (
    <section className="site-shell py-8 md:py-12">
      <div className="rounded-[1.5rem] border border-[rgba(30,50,90,0.06)] bg-[rgba(30,50,90,0.03)] p-6 md:rounded-[3rem] md:p-12">
        <div className="grid gap-4 md:grid-cols-3">
          {program.sections.map((section) => (
            <article className="rounded-[24px] bg-white p-7 shadow-[0_14px_42px_rgba(17,24,39,0.05)]" key={section.title}>
              <span className="mb-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#F26522] text-sm font-semibold text-white">
                {section.title.slice(0, 1)}
              </span>
              <h2 className="text-2xl font-medium tracking-tight text-[#030303]">{section.title}</h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-gray-600">
                {section.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPage({ programKey }: { programKey: ProgramKey }) {
  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      <PageHeader />
      <ProgramHero programKey={programKey} />
      <ProgramOverview programKey={programKey} />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}

function ContactPage() {
  useEffect(() => {
    document.title = "Kontakt | MPU Safe";
  }, []);

  const emailBody = [
    "Hallo MPU Safe Team,",
    "",
    "ich habe eine allgemeine Anfrage zur MPU-Vorbereitung.",
    "",
    "Mein Anliegen ist:",
    "",
    "Bitte melden Sie sich bei mir zurück.",
    "",
    "Viele Grüße"
  ].join("\n");
  const mailtoHref = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    "Allgemeine Anfrage zur MPU-Vorbereitung"
  )}&body=${encodeURIComponent(emailBody)}`;
  const contactMethods = [
    {
      icon: Mail,
      title: "E-Mail",
      value: contactInfo.email,
      copy: "Für allgemeine Fragen, Terminabstimmung und den ersten Kontakt.",
      href: mailtoHref,
      action: "E-Mail öffnen"
    },
    {
      icon: Phone,
      title: "Telefon",
      value: contactInfo.phoneLabel,
      copy: "Für kurze Rückfragen und eine direkte Abstimmung.",
      href: contactInfo.phoneHref,
      action: "Anrufen"
    },
    {
      icon: Phone,
      title: "Mobil",
      value: contactInfo.mobileLabel,
      copy: "Falls du lieber mobil Kontakt aufnehmen möchtest.",
      href: contactInfo.mobileHref,
      action: "Mobil anrufen"
    }
  ];
  const firstMessagePoints = [
    "Name und gewünschter Kontaktweg",
    "Ob es um Koffer, Simulator oder Coaching geht",
    "Wann ein Rückruf gut passen würde"
  ];
  const sensitiveNotes = [
    "Keine vollständigen Akten per normaler E-Mail senden.",
    "Keine Gutachten, Laborwerte oder medizinischen Unterlagen anhängen.",
    "Für sensible Unterlagen wird bei Bedarf ein geeigneter Weg abgestimmt."
  ];

  return (
    <main className="min-h-screen bg-[#f0f0f0] text-[#030303]">
      <PageHeader />

      <section className="site-shell pb-8 md:pb-12">
        <div className="grid overflow-hidden rounded-[1.5rem] bg-white shadow-[0_24px_80px_rgba(17,24,39,0.08)] md:rounded-[3rem] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex min-h-[560px] flex-col justify-between p-8 md:p-12 lg:p-16">
            <div>
              <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#F4F6FA] px-4 py-2 text-sm font-medium text-[#030303]">
                <Mail className="h-4 w-4 text-[#F26522]" />
                Kontakt
              </p>
              <h1 className="max-w-3xl text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[0.98] tracking-tight text-[#030303]">
                Lass uns deinen nächsten Schritt klären.
              </h1>
              <p className="mt-7 max-w-xl text-[18px] leading-[1.65] text-gray-600">
                Ruf an oder schreib eine kurze allgemeine Nachricht. Sensible Unterlagen klären wir erst danach.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F26522] px-7 py-4 text-[15px] font-medium text-white transition-colors hover:bg-[#e05a1a]"
                href={mailtoHref}
              >
                E-Mail öffnen
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F4F6FA] px-7 py-4 text-[15px] font-medium text-[#030303] transition-colors hover:bg-[#e8ebf1]"
                href={contactInfo.phoneHref}
              >
                <Phone className="h-4 w-4" />
                Direkt anrufen
              </a>
            </div>
          </div>

          <div className="relative min-h-[460px] overflow-hidden bg-[#F4F6FA] lg:min-h-[680px]">
            <img
              alt="Ruhiges Beratungsgespräch zur MPU-Vorbereitung"
              className="absolute inset-0 h-full w-full object-cover"
              src={coachingImage}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(3,3,3,0.3))]" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[28px] bg-white p-6 shadow-[0_18px_50px_rgba(17,24,39,0.18)] md:bottom-8 md:left-8 md:right-auto md:w-[390px]">
              <p className="mb-3 text-sm font-medium text-gray-500">Wichtig für den Start</p>
              <h2 className="text-3xl font-medium leading-tight tracking-tight text-[#030303]">
                Erst allgemein anfragen, dann sicher vertiefen.
              </h2>
              <p className="mt-4 text-[15px] leading-[1.65] text-gray-600">
                Ein normales Telefonat oder eine kurze E-Mail reicht für den ersten Schritt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell py-8 md:py-12">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.95fr]">
          <div className="grid gap-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  className="group grid gap-5 rounded-[1.5rem] bg-white p-6 shadow-[0_14px_42px_rgba(17,24,39,0.05)] transition-transform hover:-translate-y-1 md:grid-cols-[56px_1fr_auto] md:items-center md:rounded-[2rem] md:p-8"
                  href={method.href}
                  key={method.title}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff2ec] text-[#F26522]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-gray-500">{method.title}</span>
                    <span className="mt-1 block text-2xl font-medium tracking-tight text-[#030303]">{method.value}</span>
                    <span className="mt-2 block text-[15px] leading-[1.6] text-gray-600">{method.copy}</span>
                  </span>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F4F6FA] px-5 py-3 text-sm font-medium text-[#030303] transition-colors group-hover:bg-[#fff2ec] group-hover:text-[#F26522]">
                    {method.action}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              );
            })}
          </div>

          <div className="grid gap-5">
            <div className="rounded-[1.5rem] bg-white p-7 shadow-[0_14px_42px_rgba(17,24,39,0.05)] md:rounded-[2rem] md:p-8">
              <h2 className="text-3xl font-medium tracking-tight text-[#030303]">Was in die erste Nachricht gehört</h2>
              <div className="mt-6 grid gap-3">
                {firstMessagePoints.map((point) => (
                  <div className="flex items-start gap-3 rounded-[20px] bg-[#F4F6FA] p-4" key={point}>
                    <BadgeCheck className="mt-0.5 h-5 w-5 flex-none text-[#F26522]" />
                    <p className="text-[15px] font-medium leading-[1.55] text-[#030303]">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-[#030303] p-7 text-white shadow-[0_18px_54px_rgba(17,24,39,0.12)] md:rounded-[2rem] md:p-8">
              <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                <ShieldCheck className="h-4 w-4 text-[#F26522]" />
                Datenschutz
              </p>
              <h2 className="text-3xl font-medium tracking-tight">Bitte keine sensiblen Unterlagen anhängen.</h2>
              <div className="mt-6 grid gap-3">
                {sensitiveNotes.map((note) => (
                  <p className="rounded-[18px] bg-white/8 p-4 text-[15px] leading-[1.6] text-white/72" key={note}>
                    {note}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const ownerValues = [
  {
    icon: Route,
    title: "Struktur vor Aktion",
    copy: "Erst wird sortiert: Anlass, Fristen, Nachweise und Gesprächsrisiken. Danach entsteht ein realistischer Fahrplan."
  },
  {
    icon: ShieldCheck,
    title: "Diskretion im Umgang",
    copy: "MPU-Themen können sensibel sein. Deshalb wird nicht alles ungefiltert gesammelt, sondern nur das, was wirklich nötig ist."
  },
  {
    icon: MessagesSquare,
    title: "Training ohne Theater",
    copy: "Antworten sollen persönlich und belastbar werden. Nicht auswendig gelernt, sondern nachvollziehbar."
  }
];

const ownerProcess = [
  {
    title: "Zuhören",
    copy: "Was ist passiert, was ist offen und wo entsteht gerade der größte Druck?"
  },
  {
    title: "Ordnen",
    copy: "Aus Unterlagen, Fristen und Themen wird eine klare Reihenfolge."
  },
  {
    title: "Üben",
    copy: "Im Simulator und Coaching werden kritische Gesprächsmomente sichtbar."
  },
  {
    title: "Stabilisieren",
    copy: "Der Fahrplan bleibt verständlich, bis die nächsten Schritte wirklich sitzen."
  }
];

const ownerProfilePoints = [
  "Persönliche Einordnung statt anonymer Standardantworten.",
  "Klare Sprache, damit du verstehst, was wirklich wichtig ist.",
  "Diskreter Umgang mit Unterlagen, Vorgeschichte und sensiblen Themen."
];

function OwnerAboutPage() {
  useEffect(() => {
    document.title = "Über uns | MPU Safe";
  }, []);

  return (
    <main className="min-h-screen bg-[#f0f0f0] text-[#030303]">
      <PageHeader />

      <section className="site-shell pb-8 md:pb-12">
        <div className="grid overflow-hidden rounded-[1.5rem] bg-white shadow-[0_24px_80px_rgba(17,24,39,0.08)] md:rounded-[3rem] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex min-h-[560px] flex-col justify-between p-8 md:p-12 lg:p-16">
            <div>
              <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#F4F6FA] px-4 py-2 text-sm font-medium text-[#030303]">
                <UsersRound className="h-4 w-4 text-[#F26522]" />
                Über MPU Safe
              </p>
              <h1 className="max-w-3xl text-[clamp(2.45rem,6vw,5.4rem)] font-medium leading-[0.98] tracking-tight text-[#030303]">
                Persönlich geführt. Klar vorbereitet.
              </h1>
              <p className="mt-7 max-w-xl text-[18px] leading-[1.65] text-gray-600">
                MPU Safe verbindet digitale Vorbereitung mit persönlicher Einordnung für einen ruhigen Fahrplan.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <a className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F26522] px-7 py-4 text-[15px] font-medium text-white transition-colors hover:bg-[#e05a1a]" href={appHref("/kontakt.html")}>
                Erstgespräch planen
                <ArrowRight className="h-5 w-5" />
              </a>
              <a className="inline-flex items-center justify-center rounded-full bg-[#F4F6FA] px-7 py-4 text-[15px] font-medium text-[#030303] transition-colors hover:bg-[#e8ebf1]" href={appHref("/#programme")}>
                Programme ansehen
              </a>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden bg-[#F4F6FA] lg:min-h-[680px]">
            <img
              alt="Ruhiges Beratungsgespräch zur MPU-Vorbereitung"
              className="absolute inset-0 h-full w-full object-cover"
              src={coachingImage}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(3,3,3,0.24))]" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[28px] bg-white p-6 shadow-[0_18px_50px_rgba(17,24,39,0.18)] md:bottom-8 md:left-8 md:right-auto md:w-[390px]">
              <p className="mb-3 text-sm font-medium text-gray-500">Inhaberprofil</p>
              <h2 className="text-3xl font-medium leading-tight tracking-tight text-[#030303]">
                Ein Ansprechpartner für Orientierung und Vorbereitung.
              </h2>
              <p className="mt-4 text-[15px] leading-[1.65] text-gray-600">
                Persönliche Einordnung, realistische Vorbereitung und diskreter Umgang mit sensiblen MPU-Themen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell py-8 md:py-12">
        <div className="grid overflow-hidden rounded-[1.5rem] bg-white shadow-[0_24px_80px_rgba(17,24,39,0.06)] md:rounded-[3rem] lg:grid-cols-[1.03fr_0.97fr]">
          <div className="flex flex-col justify-between p-8 md:p-12 lg:p-16">
            <div>
              <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#fff2ec] px-4 py-2 text-sm font-medium text-[#F26522]">
                <Handshake className="h-4 w-4" />
                Inhaber & Ansprechpartner
              </p>
              <h2 className="max-w-3xl text-[clamp(2.25rem,5vw,4.8rem)] font-medium leading-[1.02] tracking-tight text-[#030303]">
                Der Besitzer hinter MPU Safe.
              </h2>
              <p className="mt-7 max-w-2xl text-[17px] leading-[1.75] text-gray-600">
                Hinter MPU Safe steht ein persönlicher Ansprechpartner, der Kandidaten nicht mit Informationsmengen allein lässt. Ziel ist eine Vorbereitung, die deinen Fall ernst nimmt, verständlich bleibt und dich Schritt für Schritt ins Gespräch bringt.
              </p>
            </div>

            <div className="mt-10 grid gap-3">
              {ownerProfilePoints.map((point) => (
                <div className="flex items-start gap-4 rounded-[20px] bg-[#F4F6FA] p-4" key={point}>
                  <BadgeCheck className="mt-0.5 h-5 w-5 flex-none text-[#F26522]" />
                  <p className="text-[15px] font-medium leading-[1.55] text-[#030303]">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F4F6FA] p-5 md:p-8 lg:p-10">
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#030303] shadow-[0_18px_54px_rgba(17,24,39,0.12)]">
              <img
                alt="Platz für das Inhaberfoto von MPU Safe"
                className="absolute inset-0 h-full w-full object-cover opacity-55"
                src={aboutCoachingBoardImage}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.05),rgba(3,3,3,0.64))]" />
              <div className="absolute left-6 right-6 top-6 rounded-[26px] bg-white/95 p-5 shadow-[0_18px_42px_rgba(0,0,0,0.18)] md:left-auto md:w-[320px]">
                <p className="text-sm font-medium text-gray-500">Profil</p>
                <h3 className="mt-2 text-2xl font-medium leading-tight tracking-tight text-[#030303]">
                  Inhaber von MPU Safe
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-gray-600">
                  Persönliche Begleitung, digitale Struktur und klare Vorbereitung auf Augenhöhe.
                </p>
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-[26px] bg-white p-5 shadow-[0_18px_42px_rgba(0,0,0,0.18)]">
                <p className="text-sm font-medium text-gray-500">Portraitfoto</p>
                <p className="mt-2 text-[15px] leading-[1.6] text-gray-600">
                  Sobald das echte Bild vorliegt, kommt hier das Foto des Inhabers rein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell py-8 md:py-12">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.5rem] bg-[#030303] p-8 text-white md:rounded-[3rem] md:p-12">
            <p className="text-sm font-medium text-white/55">Warum MPU Safe</p>
            <h2 className="mt-6 max-w-xl text-[clamp(2.2rem,4vw,4.6rem)] font-medium leading-[1.02] tracking-tight">
              Mehr Ruhe, weniger Informationschaos.
            </h2>
            <p className="mt-7 max-w-lg text-[17px] leading-[1.7] text-white/70">
              Viele Kandidaten starten mit Unsicherheit. Die Aufgabe von MPU Safe ist, aus vielen losen Fragen eine verständliche Reihenfolge zu machen.
            </p>
          </div>

          <div className="grid gap-4">
            {ownerValues.map((value) => {
              const Icon = value.icon;
              return (
                <article className="flex gap-5 rounded-[1.5rem] bg-white p-6 shadow-[0_14px_42px_rgba(17,24,39,0.05)] md:rounded-[2rem] md:p-8" key={value.title}>
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#fff2ec] text-[#F26522]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight text-[#030303]">{value.title}</h3>
                    <p className="mt-3 max-w-2xl text-[15px] leading-[1.7] text-gray-600">{value.copy}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-shell py-8 md:py-12">
        <div className="grid overflow-hidden rounded-[1.5rem] bg-white shadow-[0_24px_80px_rgba(17,24,39,0.06)] md:rounded-[3rem] lg:grid-cols-[0.98fr_1.02fr]">
          <div className="relative min-h-[420px] overflow-hidden bg-[#F4F6FA]">
            <img
              alt="MPU-Fahrplan und Unterlagen auf einem Tisch"
              className="absolute inset-0 h-full w-full object-cover"
              src={processFallanalyseImage}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.18))]" />
          </div>

          <div className="p-8 md:p-12 lg:p-16">
            <h2 className="max-w-2xl text-[clamp(2.1rem,4vw,4.2rem)] font-medium leading-[1.04] tracking-tight text-[#030303]">
              So entsteht der persönliche Fahrplan.
            </h2>
            <div className="mt-10 grid gap-3">
              {ownerProcess.map((step, index) => (
                <div className="grid gap-4 rounded-[22px] bg-[#F4F6FA] p-5 sm:grid-cols-[72px_1fr] sm:p-6" key={step.title}>
                  <p className="text-[15px] font-semibold text-[#F26522]">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight text-[#030303]">{step.title}</h3>
                    <p className="mt-2 text-[15px] leading-[1.65] text-gray-600">{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell py-8 md:py-12">
        <div className="rounded-[1.5rem] bg-[#F4F6FA] p-6 md:rounded-[3rem] md:p-12">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.5rem] bg-white p-8 shadow-[0_14px_42px_rgba(17,24,39,0.05)] md:rounded-[2rem] md:p-10">
              <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#fff2ec] px-4 py-2 text-sm font-medium text-[#F26522]">
                <ShieldCheck className="h-4 w-4" />
                Sensible Themen
              </p>
              <h2 className="max-w-2xl text-[clamp(2rem,4vw,3.8rem)] font-medium leading-[1.05] tracking-tight text-[#030303]">
                Nicht alles gehört in ein normales Formular.
              </h2>
              <p className="mt-6 max-w-2xl text-[16px] leading-[1.75] text-gray-600">
                MPU-Themen können persönliche, gesundheitliche oder strafrechtlich relevante Angaben berühren. Deshalb bleiben allgemeine Kontaktwege bewusst schlank.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Keine Uploads für vollständige Akten.",
                "Keine sensiblen Details im normalen Kontakt erzwingen.",
                "Fallanalyse erst über einen abgestimmten sicheren Weg."
              ].map((item) => (
                <div className="flex items-center gap-4 rounded-[22px] bg-white p-5 shadow-[0_14px_42px_rgba(17,24,39,0.05)]" key={item}>
                  <BadgeCheck className="h-5 w-5 flex-none text-[#F26522]" />
                  <p className="text-[15px] font-medium leading-[1.5] text-[#030303]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}

function LockedSimulatorAccess() {
  return (
    <section className="site-shell pb-12">
      <div className="grid overflow-hidden rounded-[1.5rem] bg-white shadow-[0_24px_80px_rgba(17,24,39,0.08)] md:rounded-[3rem] lg:grid-cols-[0.96fr_1.04fr]">
        <div className="flex min-h-[520px] flex-col justify-center p-8 md:p-12 lg:p-16">
          <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#F4F6FA] px-4 py-2 text-sm font-medium text-[#030303]">
            <CheckCircle className="h-4 w-4 text-[#F26522]" />
            Geschützter Zugang
          </p>
          <h1 className="max-w-2xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.98] tracking-tight text-[#030303]">
            Der Simulator öffnet sich nach dem Kauf.
          </h1>
          <p className="mt-7 max-w-xl text-[18px] leading-[1.65] text-gray-600">
            Diese Seite ist für die Digistore24-Dankeseite vorgesehen. Nach der Zahlung wird der Käufer mit einem Freischaltmerkmal hierher geleitet und sieht direkt die 15 Fragen.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F26522] px-7 py-4 text-[15px] font-medium text-white transition-colors hover:bg-[#e05a1a]" href={checkoutLinks.simulator}>
              Simulator kaufen
              <ArrowRight className="h-5 w-5" />
            </a>
            <a className="inline-flex items-center justify-center rounded-full bg-[#F4F6FA] px-7 py-4 text-[15px] font-medium text-[#030303]" href={appHref("/simulator")}>
              Produktseite
            </a>
          </div>
        </div>
        <div className="relative min-h-[460px] overflow-hidden bg-[#F4F6FA]">
          <img alt="" className="absolute inset-0 h-full w-full object-cover" src={simulatorImage} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(0,0,0,0.26))]" />
        </div>
      </div>
    </section>
  );
}

function EnhancedSimulatorQuestionnaire() {
  const totalQuestions = simulatorQuestions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Array<number | null>>(() => Array(totalQuestions).fill(null));
  const [showResult, setShowResult] = useState(false);
  const question = simulatorQuestions[currentQuestion];
  const currentAnswer = answers[currentQuestion];
  const answeredCount = answers.filter((answer): answer is number => answer !== null).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);
  const activeProgressPercent = Math.max(
    progressPercent,
    Math.round(((currentQuestion + (currentAnswer !== null ? 1 : 0)) / totalQuestions) * 100)
  );
  const answeredRiskValues = answers.flatMap((answer, index) =>
    answer === null ? [] : [simulatorQuestions[index].options[answer].risk]
  );
  const liveRiskScore = answeredRiskValues.length
    ? Math.round(answeredRiskValues.reduce((sum, value) => sum + value, 0) / answeredRiskValues.length)
    : 0;
  const stabilityScore = Math.max(0, 100 - liveRiskScore);
  const isLastQuestion = currentQuestion === totalQuestions - 1;
  const nextSteps = [
    {
      icon: Target,
      title: "Ursachen ordnen",
      copy: "Warum ist es passiert, welches Muster steckt dahinter und was ist heute anders?"
    },
    {
      icon: ClipboardCheck,
      title: "Nachweise prüfen",
      copy: "Welche Belege, Zeiten und konkreten Beispiele machen deine Veränderung glaubwürdig?"
    },
    {
      icon: MessagesSquare,
      title: "Gespräch trainieren",
      copy: "Antworten müssen persönlich, klar und belastbar klingen, nicht auswendig gelernt."
    }
  ];
  const answerSummary = simulatorQuestions.map((item, index) => {
    const selectedIndex = answers[index];
    const selectedAnswer = selectedIndex !== null ? item.options[selectedIndex] : undefined;
    return {
      topic: item.topic,
      question: item.question,
      answer: selectedAnswer ? `${selectedAnswer.label}) ${selectedAnswer.text}` : "keine Antwort",
      risk: selectedAnswer?.risk ?? null,
      note: selectedAnswer?.note ?? ""
    };
  });
  const priorityAreas = answerSummary
    .filter((item) => item.risk !== null)
    .sort((a, b) => (b.risk ?? 0) - (a.risk ?? 0))
    .slice(0, 4);
  const prioritySummary = priorityAreas.length
    ? priorityAreas.map((item, index) => `${index + 1}. ${item.topic}: ${item.risk}% Risiko - ${item.note}`).join("\n")
    : "Keine Risikobereiche ausgewertet.";
  const answerProtocol = answerSummary
    .map((item, index) => [
      `${index + 1}. ${item.topic}`,
      `Frage: ${item.question}`,
      `Antwort: ${item.answer}`,
      `Risiko: ${item.risk ?? 0}%`,
      `Einordnung: ${item.note || "Keine Einordnung vorhanden."}`
    ].join("\n"))
    .join("\n\n");
  const emailBody = [
    "Hallo MPU Safe Team,",
    "",
    "ich habe den MPU Safe Simulator abgeschlossen und möchte meine Auswertung besprechen.",
    "",
    "Zusammenfassung:",
    `- Simulations-Risiko: ${liveRiskScore}%`,
    `- Stabilität: ${stabilityScore}%`,
    `- Beantwortete Fragen: ${answeredCount}/${totalQuestions}`,
    "",
    "Auffälligste Bereiche:",
    prioritySummary,
    "",
    "Antwortprotokoll:",
    answerProtocol,
    "",
    "Hinweis: Diese E-Mail enthält meine Simulator-Auswertung. Ich sende keine Gutachten, Abstinenznachweise, medizinischen Unterlagen, Strafakten oder vollständigen Akten per normaler E-Mail. Für weitere sensible Unterlagen stimmen wir bei Bedarf einen geeigneten sicheren Übermittlungsweg ab.",
    "",
    "Viele Grüße"
  ].join("\n\n");
  const mailtoHref = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    "MPU Safe Simulator-Auswertung"
  )}&body=${encodeURIComponent(emailBody)}`;

  const chooseAnswer = (answerIndex: number) => {
    const nextAnswers = [...answers];
    nextAnswers[currentQuestion] = answerIndex;
    setAnswers(nextAnswers);
  };

  const goNext = () => {
    if (currentAnswer === null) return;
    if (isLastQuestion) {
      setShowResult(true);
      return;
    }
    setCurrentQuestion((value) => value + 1);
  };

  return (
    <section className="site-shell pb-16">
      {!showResult ? (
        <div className="grid min-w-0 overflow-hidden rounded-[1.5rem] bg-white shadow-[0_24px_80px_rgba(17,24,39,0.08)] md:rounded-[3rem] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0 p-6 md:p-10 lg:p-14">
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
              <p className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F4F6FA] px-4 py-2 text-sm font-medium text-[#030303]">
                <BrainCircuit className="h-4 w-4 text-[#F26522]" />
                MPU Safe Simulator
              </p>
              <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-[#F4F6FA] px-4 py-2 text-sm font-medium text-[#030303]">
                <BarChart3 className="h-4 w-4 text-[#F26522]" />
                {activeProgressPercent}% abgeschlossen
              </div>
            </div>

            <div className="mt-6 grid grid-cols-[0.85fr_0.85fr_1.3fr] gap-2 sm:mt-8 sm:grid-cols-3 sm:gap-3">
              <div className="min-w-0 rounded-[18px] bg-[#F4F6FA] p-3 sm:rounded-[22px] sm:p-5">
                <p className="text-[12px] font-medium text-gray-500 sm:text-sm">Fragen</p>
                <p className="mt-2 text-2xl font-medium tracking-tight text-[#030303] sm:mt-3 sm:text-4xl">
                  {currentQuestion + 1}/{totalQuestions}
                </p>
              </div>
              <div className="min-w-0 rounded-[18px] bg-[#F4F6FA] p-3 sm:rounded-[22px] sm:p-5">
                <p className="text-[12px] font-medium text-gray-500 sm:text-sm">Auswahl</p>
                <p className="mt-2 text-[13px] font-medium leading-tight tracking-tight text-[#030303] sm:mt-3 sm:text-[20px]">
                  {currentAnswer !== null ? "gespeichert" : "offen"}
                </p>
              </div>
              <div className="min-w-0 rounded-[18px] bg-[#F4F6FA] p-3 sm:rounded-[22px] sm:p-5">
                <p className="text-[12px] font-medium text-gray-500 sm:text-sm">Fokus</p>
                <p className="mt-2 break-words text-[12px] font-medium leading-tight tracking-tight text-[#030303] sm:mt-3 sm:text-[20px]">
                  {question.topic}
                </p>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[30px] border border-[rgba(30,50,90,0.08)] bg-white p-5 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-medium text-gray-500">
                  Frage {currentQuestion + 1} von {totalQuestions}
                </p>
                <span className="rounded-full bg-[#fff2ec] px-4 py-2 text-sm font-medium text-[#F26522]">
                  {question.topic}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  initial={{ opacity: 0, x: 16 }}
                  key={currentQuestion}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  <h1 className="mt-6 max-w-3xl text-[clamp(2rem,4vw,4.2rem)] font-medium leading-[1.02] tracking-tight text-[#030303]">
                    {question.question}
                  </h1>

                  <div className="mt-8 grid gap-4">
                    {question.options.map((option, index) => {
                      const isSelected = currentAnswer === index;
                      return (
                        <button
                          className={`group rounded-[22px] border p-5 text-left transition-all duration-300 ${
                            isSelected
                              ? "border-[#F26522] bg-white shadow-[0_18px_45px_rgba(242,101,34,0.12)]"
                              : "border-[rgba(30,50,90,0.08)] bg-[#F4F6FA] hover:border-[#F26522] hover:bg-white"
                          }`}
                          key={option.label}
                          onClick={() => chooseAnswer(index)}
                          type="button"
                        >
                          <div className="flex items-start gap-4">
                            <span className={`flex h-10 w-10 flex-none items-center justify-center rounded-full text-sm font-semibold ${
                              isSelected ? "bg-[#F26522] text-white" : "bg-white text-[#F26522]"
                            }`}>
                              {option.label}
                            </span>
                            <span>
                              <span className="block text-[17px] font-medium leading-[1.45] text-[#030303]">
                                {option.text}
                              </span>
                              <span className={`mt-3 block text-[14px] leading-[1.55] ${
                                isSelected ? "text-gray-600" : "text-gray-500"
                              }`}>
                                {isSelected ? "Antwort gespeichert. Die Bewertung bleibt bis zur Auswertung verborgen." : "Antwort auswählen."}
                              </span>
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex flex-col gap-3 border-t border-[rgba(30,50,90,0.08)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <button
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4F6FA] px-6 py-3 text-[15px] font-medium text-[#030303] transition-colors hover:bg-[#e8ebf1] disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={currentQuestion === 0}
                  onClick={() => setCurrentQuestion((value) => Math.max(0, value - 1))}
                  type="button"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Zurück
                </button>
                <button
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F26522] px-7 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#e05a1a] disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={currentAnswer === null}
                  onClick={goNext}
                  type="button"
                >
                  {isLastQuestion ? "Auswertung anzeigen" : "Weiter"}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <aside className="min-w-0 bg-[#F4F6FA] p-4 md:p-6 lg:p-8">
            <div className="relative min-h-[300px] overflow-hidden rounded-[28px] bg-[#030303] md:min-h-[420px]">
              <img alt="" className="absolute inset-0 h-full w-full object-cover opacity-90" src={simulatorImage} />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(3,3,3,0.54))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[24px] bg-white p-5 shadow-[0_18px_50px_rgba(17,24,39,0.22)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Fortschritt</p>
                    <p className="mt-1 text-3xl font-medium tracking-tight text-[#030303]">{progressPercent}%</p>
                  </div>
                  <div
                    className="grid h-20 w-20 place-items-center rounded-full"
                    style={{
                      background: `conic-gradient(#F26522 ${progressPercent * 3.6}deg, rgba(30,50,90,0.08) 0deg)`
                    }}
                  >
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-sm font-semibold text-[#030303]">
                      {answeredCount}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4">
              <div className="rounded-[28px] bg-white p-6 shadow-[0_14px_42px_rgba(17,24,39,0.05)]">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-medium tracking-tight text-[#030303]">Live-Auswertung</h2>
                  <ShieldCheck className="h-6 w-6 text-[#F26522]" />
                </div>
                <div className="grid gap-3">
                  {[
                    ["Antwortstatus", currentAnswer !== null ? "Auswahl gespeichert" : "noch offen"],
                    ["Aktueller Bereich", question.topic],
                    ["Bewertung", "nach Abschluss sichtbar"]
                  ].map(([label, value]) => (
                    <div className="flex items-center justify-between gap-4 rounded-[18px] bg-[#F4F6FA] px-4 py-3" key={label}>
                      <span className="text-sm font-medium text-gray-500">{label}</span>
                      <span className="text-right text-sm font-semibold text-[#030303]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] bg-[#030303] p-6 text-white">
                <p className="text-sm font-medium text-white/60">Hinweis</p>
                <p className="mt-3 text-[18px] font-medium leading-[1.45]">
                  Der Simulator ist streng. Ziel ist nicht ein schönes Ergebnis, sondern klare Vorbereitung vor dem echten Gespräch.
                </p>
              </div>
            </div>
          </aside>
        </div>
      ) : (
        <div className="grid min-w-0 gap-5">
          <div className="grid min-w-0 overflow-hidden rounded-[1.5rem] bg-white shadow-[0_24px_80px_rgba(17,24,39,0.08)] md:rounded-[3rem] lg:grid-cols-[1fr_0.95fr]">
            <div className="min-w-0 p-6 md:p-10 lg:p-14">
              <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#F4F6FA] px-4 py-2 text-sm font-medium text-[#030303]">
                <BadgeCheck className="h-4 w-4 text-[#F26522]" />
                Auswertung abgeschlossen
              </p>
              <h1 className="max-w-3xl text-[clamp(2.3rem,5vw,5rem)] font-medium leading-[0.98] tracking-tight text-[#030303]">
                Deine Antworten zeigen noch klare Risikopunkte.
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-[1.7] text-gray-600">
                Der Check bewertet bewusst streng. Die Prozentwerte zeigen, wie kritisch deine Antworten in einer MPU-Simulation wirken können.
              </p>

              <div className="mt-9 grid grid-cols-3 gap-2 sm:gap-3">
                <div className="min-w-0 rounded-[18px] bg-[#F4F6FA] p-3 sm:rounded-[24px] sm:p-5">
                  <p className="text-[12px] font-medium text-gray-500 sm:text-sm">Risiko</p>
                  <p className="mt-2 text-2xl font-medium tracking-tight text-[#030303] sm:mt-3 sm:text-4xl">{liveRiskScore}%</p>
                </div>
                <div className="min-w-0 rounded-[18px] bg-[#F4F6FA] p-3 sm:rounded-[24px] sm:p-5">
                  <p className="text-[12px] font-medium text-gray-500 sm:text-sm">Stabilität</p>
                  <p className="mt-2 text-2xl font-medium tracking-tight text-[#030303] sm:mt-3 sm:text-4xl">{stabilityScore}%</p>
                </div>
                <div className="min-w-0 rounded-[18px] bg-[#F4F6FA] p-3 sm:rounded-[24px] sm:p-5">
                  <p className="text-[12px] font-medium text-gray-500 sm:text-sm">Antworten</p>
                  <p className="mt-2 text-2xl font-medium tracking-tight text-[#030303] sm:mt-3 sm:text-4xl">{answeredCount}/{totalQuestions}</p>
                </div>
              </div>

              <div className="mt-9 max-w-2xl rounded-[24px] bg-[#F4F6FA] p-5">
                <p className="text-sm font-semibold text-[#030303]">Hinweis zur E-Mail</p>
                <p className="mt-2 text-[15px] leading-[1.65] text-gray-600">
                  Die E-Mail öffnet sich mit deiner Simulator-Auswertung und deinem Antwortprotokoll. Sie wird erst verschickt, wenn du sie in deinem E-Mail-Programm selbst sendest. Bitte hänge keine Gutachten, Abstinenznachweise, medizinischen Unterlagen, Strafakten oder vollständigen Akten an.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F26522] px-7 py-4 text-[15px] font-medium text-white transition-colors hover:bg-[#e05a1a]" href={appHref("/coaching")}>
                  Coaching ansehen
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F4F6FA] px-7 py-4 text-[15px] font-medium text-[#030303] transition-colors hover:bg-[#e8ebf1]"
                  href={mailtoHref}
                >
                  <Mail className="h-4 w-4" />
                  Auswertung per E-Mail öffnen
                </a>
              </div>
            </div>

            <div className="min-w-0 bg-[#F4F6FA] p-6 md:p-10 lg:p-12">
              <div className="rounded-[32px] bg-white p-7 shadow-[0_14px_42px_rgba(17,24,39,0.05)]">
                <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
                  <div
                    className="grid h-40 w-40 flex-none place-items-center rounded-full"
                    style={{
                      background: `conic-gradient(#F26522 ${liveRiskScore * 3.6}deg, rgba(30,50,90,0.08) 0deg)`
                    }}
                  >
                    <div className="grid h-28 w-28 place-items-center rounded-full bg-white">
                      <span className="text-4xl font-medium tracking-tight text-[#030303]">{liveRiskScore}%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Simulations-Risiko</p>
                    <h2 className="mt-3 text-3xl font-medium leading-tight tracking-tight text-[#030303]">
                      Vorbereitung weiter vertiefen
                    </h2>
                    <p className="mt-3 text-[15px] leading-[1.65] text-gray-600">
                      Die Antworten wirken noch nicht stabil genug für ein überzeugendes MPU-Gespräch.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-3">
                  {priorityAreas.map((item) => (
                    <div className="rounded-[20px] bg-[#F4F6FA] p-4" key={item.topic}>
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-medium text-[#030303]">{item.topic}</p>
                        <p className="text-sm font-semibold text-[#F26522]">{item.risk ?? 0}%</p>
                      </div>
                      <p className="mt-2 text-sm leading-[1.55] text-gray-600">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid min-w-0 gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="min-w-0 rounded-[1.5rem] bg-white p-6 shadow-[0_18px_54px_rgba(17,24,39,0.06)] md:rounded-[3rem] md:p-8">
              <h2 className="text-3xl font-medium tracking-tight text-[#030303]">Dein nächster Fahrplan</h2>
              <div className="mt-6 grid gap-4">
                {nextSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div className="flex gap-4 rounded-[22px] bg-[#F4F6FA] p-4" key={step.title}>
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white text-[#F26522]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#030303]">{step.title}</h3>
                        <p className="mt-1 text-sm leading-[1.55] text-gray-600">{step.copy}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="min-w-0 rounded-[1.5rem] bg-white p-6 shadow-[0_18px_54px_rgba(17,24,39,0.06)] md:rounded-[3rem] md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-3xl font-medium tracking-tight text-[#030303]">Antwortprotokoll</h2>
                <span className="rounded-full bg-[#F4F6FA] px-4 py-2 text-sm font-medium text-[#030303]">
                  {answeredCount} Antworten
                </span>
              </div>
              <div className="mt-6 max-h-[560px] overflow-y-auto pr-1">
                <div className="grid gap-3">
                  {answerSummary.map((item, index) => (
                    <div className="rounded-[20px] bg-[#F4F6FA] p-5 text-sm text-[#030303]" key={item.question}>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="font-semibold">Frage {index + 1}: {item.topic}</p>
                        <p className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-[#F26522]">{item.risk ?? 0}%</p>
                      </div>
                      <p className="mt-3 leading-[1.45] text-gray-600">{item.question}</p>
                      <p className="mt-2 font-medium text-[#030303]">{item.answer}</p>
                      <p className="mt-2 leading-[1.55] text-gray-600">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function SimulatorAccessPage() {
  const [hasAccess, setHasAccess] = useState(() => hasSimulatorAccessParam(window.location.search) || hasStoredSimulatorAccess());

  useEffect(() => {
    if (hasSimulatorAccessParam(window.location.search)) {
      storeSimulatorAccess();
      setHasAccess(true);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      <PageHeader />
      {hasAccess ? <EnhancedSimulatorQuestionnaire /> : <LockedSimulatorAccess />}
      <Footer />
    </main>
  );
}

function HomePage() {
  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      <Hero />
      <AboutSection />
      <MethodSection />
      <Metrics />
      <PricingPackages />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}

function normalizeRoute(pathname: string, search = "") {
  const queryRoute = new URLSearchParams(search).get("route");

  if (queryRoute) {
    const normalizedQueryRoute = queryRoute.startsWith("/") ? queryRoute : `/${queryRoute}`;
    const cleanQueryRoute = normalizedQueryRoute.endsWith("/") && normalizedQueryRoute !== "/" ? normalizedQueryRoute.slice(0, -1) : normalizedQueryRoute;

    if ((knownAppRoutes as readonly string[]).includes(cleanQueryRoute)) {
      return cleanQueryRoute;
    }
  }

  let path = pathname;

  if (appBasePath && (path === appBasePath || path.startsWith(`${appBasePath}/`))) {
    path = path.slice(appBasePath.length) || "/";
  }

  path = path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;

  if (path === "/kontakt.html") {
    return "/kontakt";
  }

  if ((knownAppRoutes as readonly string[]).includes(path)) {
    return path;
  }
  return "/";
}

function App() {
  const route = normalizeRoute(window.location.pathname, window.location.search);

  if (route === "/koffer") return <ProductPage programKey="koffer" />;
  if (route === "/simulator") return <ProductPage programKey="simulator" />;
  if (route === "/coaching") return <ProductPage programKey="coaching" />;
  if (route === "/kontakt") return <ContactPage />;
  if (route === "/simulator-zugang") return <SimulatorAccessPage />;
  if (route === "/ueber-uns") return <OwnerAboutPage />;

  return <HomePage />;
}

export default App;
