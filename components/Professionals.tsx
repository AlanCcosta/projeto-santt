import Image from "next/image";
import { Check, Sparkles, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Professionals() {
  const whatsappMsg =
    "Olá! Sou profissional da saúde e gostaria de conhecer os consultórios e espaços para locação na Santt Clínica.";
  const whatsappUrl = siteConfig.getWhatsAppLink(whatsappMsg);

  return (
    <section id="profissionais" className="py-20 md:py-28 bg-santt-base/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Image with floating card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden bg-santt-surface/60 border border-santt-border/40 shadow-xl group">
              <Image
                src="/espaco-profissionais-santt.webp"
                alt="Consultório e Espaço para Locação Profissional - SANTT Clínica Integrada"
                width={584}
                height={510}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs bg-santt-surface/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-santt-border/60">
                <p className="text-xs text-santt-text-muted font-medium leading-relaxed italic">
                  &ldquo;Estrutura completa e arquitetura de alto padrão desenhadas para valorizar o seu atendimento.&rdquo;
                </p>
                <div className="mt-2.5 flex items-center gap-2 text-[11px] font-bold text-santt-gold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Consultórios Prontos para Atender
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-santt-gold font-semibold mb-3">
                <span className="w-6 h-px bg-santt-gold" />
                Locação de Consultórios
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                Estrutura de excelência para{" "}
                <em className="font-serif italic font-normal text-santt-gold-light block">
                  receber seus pacientes.
                </em>
              </h2>
              <p className="text-santt-text-muted text-sm sm:text-base leading-relaxed mt-4">
                A SANTT oferece consultórios privativos completos e climatizados para médicos, nutricionistas, fisioterapeutas, psicólogos e profissionais da saúde. O ambiente ideal para você atender com máximo conforto e sofisticação, sem os custos e preocupações de montar um espaço próprio.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-santt-gold/15 border border-santt-gold/30 text-santt-gold flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Consultórios Prontos e Mobiliados</h4>
                  <p className="text-xs text-santt-text-muted mt-0.5 leading-relaxed">
                    Salas climatizadas com design contemporâneo assinado, isolamento acústico, maca/mesa ergonômica e iluminação cênica planejada.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-santt-gold/15 border border-santt-gold/30 text-santt-gold flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Recepção Concierge & Experiência Humanizada</h4>
                  <p className="text-xs text-santt-text-muted mt-0.5 leading-relaxed">
                    Seus pacientes acolhidos com alto padrão de hospitalidade, sala de espera confortável e suporte de atendimento exclusivo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-santt-gold/15 border border-santt-gold/30 text-santt-gold flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Flexibilidade de Turnos e Períodos</h4>
                  <p className="text-xs text-santt-text-muted mt-0.5 leading-relaxed">
                    Sublocação sob medida para a sua rotina de consultas, em localização nobre e de fácil acesso com estacionamento em Capim Macio.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-santt-gold-dark via-santt-gold to-santt-gold-light text-santt-base px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quero Atender na SANTT</span>
              </a>
              <span className="text-xs text-santt-text-muted">Agende uma visita e conheça nossos consultórios</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

