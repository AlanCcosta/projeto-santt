import Image from "next/image";
import { Shield, MapPin, Coffee } from "lucide-react";

export function Experience() {
  return (
    <section className="py-24 md:py-32 bg-santt-surface/50 border-y border-santt-border/20" id="experiencia">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Gallery Column */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden border border-santt-border/30">
                <Image
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                  alt="Consultório moderno e aconchegante"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden border border-santt-border/30">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                  alt="Equipamentos e precisão na saúde"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="relative h-full min-h-[400px] sm:min-h-[530px] rounded-2xl overflow-hidden border border-santt-border/30">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Arquitetura de interiores contemporânea assinada por Paulo Costa"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-santt-gold font-semibold mb-4">
              ATMOSFERA DE EXCELÊNCIA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight mb-6">
              Design assinado por{" "}
              <em className="font-serif italic font-normal text-santt-gold-light">Paulo Costa</em>.
            </h2>
            <p className="text-santt-text-muted text-sm sm:text-base leading-relaxed mb-8">
              Cada detalhe da Santt Clínica foi minuciosamente pensado para afastar a frieza dos
              consultórios tradicionais e acolher você em um ambiente privativo de alto padrão.
            </p>

            <div className="space-y-6 mb-8 w-full">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-santt-gold/10 text-santt-gold flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">
                    Privacidade & Sigilo Absoluto
                  </h4>
                  <p className="text-xs sm:text-sm text-santt-text-muted">
                    Salas com isolamento acústico e recepção setorizada para total conforto e discrição.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-santt-gold/10 text-santt-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">
                    Localização Nobre em Capim Macio
                  </h4>
                  <p className="text-xs sm:text-sm text-santt-text-muted">
                    Fácil acesso, estacionamento dedicado e ponto estratégico da zona sul de Natal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-santt-gold/10 text-santt-gold flex items-center justify-center shrink-0">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">
                    Espaço Lounge & Concierge
                  </h4>
                  <p className="text-xs sm:text-sm text-santt-text-muted">
                    Cafés especiais, água aromatizada e atendimento com cortesia de ponta a ponta.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl border-l-2 border-santt-gold bg-santt-surface/80 text-santt-gold-light italic font-serif text-sm sm:text-base w-full">
              “Transformamos o cuidado com a saúde em um momento de pausa produtiva e reconexão.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

