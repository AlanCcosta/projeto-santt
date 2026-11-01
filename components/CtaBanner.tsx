import { Calendar, Lock } from "lucide-react";
import { siteConfig } from "@/config/site";

export function CtaBanner() {
  return (
    <section className="py-24 md:py-32 bg-santt-base relative overflow-hidden">
      {/* Glow Center Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-santt-gold/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="p-8 sm:p-14 md:p-16 rounded-3xl bg-gradient-to-b from-[#18201d]/90 to-[#101513]/90 border border-santt-gold/30 shadow-card-dark text-center">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-santt-gold font-semibold mb-4">
            COMECE AGORA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight mb-6 max-w-2xl mx-auto">
            Seu corpo e mente merecem ser a{" "}
            <em className="font-serif italic font-normal text-santt-gold-light">
              prioridade máxima
            </em>{" "}
            da sua rotina.
          </h2>
          <p className="text-santt-text-muted text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Descubra como o método integrado da Santt Clínica pode transformar seu bem-estar, estética e
            rendimento com elegância e eficácia comprovada.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={siteConfig.getWhatsAppLink(
                "Olá, desejo agendar uma consulta na Santt Clínica."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gold-gradient text-[#0c100f] font-semibold text-xs tracking-wider uppercase shadow-gold-glow hover:brightness-105 active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Solicitar Agendamento Concierge</span>
            </a>
          </div>

          <div className="inline-flex items-center gap-2 text-xs text-santt-text-subtle">
            <Lock className="w-3.5 h-3.5 text-santt-gold" />
            <span>Atendimento exclusivo com vagas limitadas para garantir excelência de acompanhamento.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

