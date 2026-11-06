import { MapPin, Clock, Phone, Navigation, Calendar } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Location() {
  return (
    <section className="py-24 md:py-32 bg-santt-base" id="localizacao">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="rounded-3xl border border-santt-border/40 bg-santt-surface/70 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-card-dark">
          {/* Details Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <span className="inline-block text-xs uppercase tracking-[0.25em] text-santt-gold font-semibold mb-4">
                ONDE ESTAMOS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight mb-6">
                Venha vivenciar a experiência{" "}
                <em className="font-serif italic font-normal text-santt-gold-light">Santt</em>.
              </h2>
              <p className="text-santt-text-muted text-sm sm:text-base leading-relaxed mb-10 max-w-xl">
                Situada estrategicamente no coração de Capim Macio, com comodidade, discrição e
                acesso rápido para o seu dia a dia.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-santt-gold/10 text-santt-gold flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-white">Endereço:</strong>
                    <span className="text-xs sm:text-sm text-santt-text-muted">
                      {siteConfig.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-santt-gold/10 text-santt-gold flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-white">
                      Horário de Funcionamento:
                    </strong>
                    <span className="text-xs sm:text-sm text-santt-text-muted">
                      {siteConfig.hours.weekdays}
                      {siteConfig.hours.saturday ? ` | ${siteConfig.hours.saturday}` : ""}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-santt-gold/10 text-santt-gold flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-white">
                      Agendamento & Concierge:
                    </strong>
                    <span className="text-xs sm:text-sm text-santt-text-muted">
                      {siteConfig.phoneFormatted} • WhatsApp Exclusivo
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6 border-t border-santt-border/20">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border border-santt-border hover:border-santt-gold/60 text-santt-text hover:text-santt-gold text-xs font-semibold tracking-wider uppercase transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Abrir no Google Maps</span>
              </a>

              <a
                href={siteConfig.getWhatsAppLink(
                  "Olá, gostaria de agendar um horário na Santt Clínica."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gold-gradient text-[#0c100f] text-xs font-semibold tracking-wider uppercase shadow-gold-soft hover:shadow-gold-glow active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservar Horário</span>
              </a>
            </div>
          </div>

          {/* Map Visual Frame */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#161c1a] to-[#0f1412] border-t lg:border-t-0 lg:border-l border-santt-border/30 p-8 sm:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[360px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,167,123,0.12)_0%,transparent_70%)]" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-santt-gold/15 border border-santt-gold/40 flex items-center justify-center text-santt-gold mb-6 animate-pulse-gold">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-white mb-2">Santt Clínica Integrada</h3>
              <p className="text-santt-text-muted text-sm mb-6">Capim Macio • Natal / RN</p>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-santt-gold/15 hover:bg-santt-gold/25 border border-santt-gold/40 text-santt-gold-light text-xs font-semibold tracking-wider uppercase transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Navegar pelo Waze / GPS</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

