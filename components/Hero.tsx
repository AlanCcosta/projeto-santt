import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-santt-base" id="inicio">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-santt-gold/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-santt-gold/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-santt-surface/80 border border-santt-border/50 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-santt-gold font-medium">
                Capim Macio, Natal/RN
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal leading-[1.18] text-white mb-6">
              Onde a ciência da alta performance encontra o{" "}
              <em className="font-serif italic font-normal text-santt-gold-light">
                cuidado sob medida
              </em>
              .
            </h1>

            {/* Quote */}
            <blockquote className="border-l-2 border-santt-gold/60 pl-4 py-1 mb-6 text-santt-gold-light/90 italic text-base sm:text-lg font-serif">
              “As melhores tomadas de decisão são feitas quando seu corpo e mente são prioridade.”
            </blockquote>

            {/* Description */}
            <p className="text-sm sm:text-base text-santt-text-muted leading-relaxed max-w-2xl mb-8">
              Um ecossistema de saúde multiprofissional concebido para quem busca transformação
              estética, vitalidade e excelência esportiva com acolhimento inigualável.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <a
                href={siteConfig.getWhatsAppLink(
                  "Olá, gostaria de conhecer os protocolos personalizados da Santt Clínica."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold-gradient text-[#0c100f] font-semibold text-sm tracking-wider uppercase shadow-gold-soft hover:shadow-gold-glow hover:brightness-105 active:scale-95 transition-all duration-200"
              >
                <span>Iniciar Atendimento Exclusivo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="#conceito"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-santt-border hover:border-santt-gold/70 text-santt-text hover:text-santt-gold text-sm font-medium tracking-wide transition-all duration-200"
              >
                Explorar o Espaço
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-santt-border/20 w-full max-w-lg">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-santt-gold">
                  +15
                </span>
                <span className="text-xs text-santt-text-subtle">
                  Anos de experiência clínica
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-santt-gold">
                  100%
                </span>
                <span className="text-xs text-santt-text-subtle">
                  Protocolos individualizados
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-santt-gold">
                  Exclusivo
                </span>
                <span className="text-xs text-santt-text-subtle">
                  Ambiente assinado Paulo Costa
                </span>
              </div>
            </div>
          </div>

          {/* Visual Column / Hero Image */}
          <div className="lg:col-span-5 relative w-full flex justify-center z-10">
            <div className="relative w-full max-w-[540px]">
              {/* Radial glow background */}
              <div className="absolute -inset-4 bg-santt-gold/15 rounded-3xl blur-2xl -z-10" />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-santt-border/50 shadow-card-dark bg-santt-surface">
                <Image
                  src="/recepcao-santt.webp"
                  alt="Recepção e espaço exclusivo da Santt Clínica em Capim Macio assinado por Paulo Costa"
                  width={584}
                  height={510}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 584px"
                  className="w-full h-auto aspect-[584/510] object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Desktop Floating Badge 1: Performance & Longevidade */}
              <div className="hidden md:flex absolute top-6 -left-6 z-20 items-center gap-3.5 px-5 py-3.5 rounded-xl bg-[#121715]/90 backdrop-blur-md border border-santt-border/80 shadow-card-dark animate-float">
                <div className="w-10 h-10 rounded-lg bg-santt-gold/15 flex items-center justify-center text-santt-gold">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-white tracking-wide">
                    Performance & Longevidade
                  </span>
                  <span className="block text-[11px] text-santt-text-subtle">
                    Acompanhamento contínuo
                  </span>
                </div>
              </div>

              {/* Desktop Floating Badge 2: Corpo Clínico Integrado */}
              <div className="hidden md:flex absolute bottom-6 -right-6 z-20 items-center gap-3.5 px-5 py-3.5 rounded-xl bg-[#121715]/90 backdrop-blur-md border border-santt-border/80 shadow-card-dark animate-float-delayed">
                <div className="w-10 h-10 rounded-lg bg-santt-gold/15 flex items-center justify-center text-santt-gold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-white tracking-wide">
                    Corpo Clínico Integrado
                  </span>
                  <span className="block text-[11px] text-santt-text-subtle">
                    Nutrição • Medicina • Esporte
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

