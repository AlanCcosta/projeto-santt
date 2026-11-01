import { Sparkles, Layers, Building2 } from "lucide-react";

const conceptCards = [
  {
    icon: Sparkles,
    title: "Atendimento Sem Pressa",
    description:
      "Consultas aprofundadas com escuta atenta da sua rotina, objetivos e histórico biológico, sem protocolos genéricos.",
    highlight: false,
  },
  {
    icon: Layers,
    title: "Interdisciplinaridade Real",
    description:
      "Nutrição, medicina metabólica e esporte dialogando em tempo real pelo mesmo plano de evolução clínica.",
    highlight: true,
  },
  {
    icon: Building2,
    title: "Arquitetura Sensorial",
    description:
      "Ambientes acusticamente isolados, luz indireta e materiais naturais que trazem calma imediata ao entrar na clínica.",
    highlight: false,
  },
];

export function Concept() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-santt-base to-santt-surface relative" id="conceito">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-santt-gold font-semibold mb-4">
            O CONCEITO SANTT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight mb-6">
            Não é apenas uma consulta.
            <br />
            É um{" "}
            <em className="font-serif italic font-normal text-santt-gold-light">
              refúgio de precisão e bem-estar
            </em>
            .
          </h2>
          <p className="text-santt-text-muted text-sm sm:text-base leading-relaxed">
            A Santt Clínica nasceu da união entre a ciência da saúde integrativa e o conforto de uma
            arquitetura refinada, projetada pelo arquiteto Paulo Costa para oferecer uma
            experiência acolhedora e privativa.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {conceptCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`relative p-8 rounded-2xl transition-all duration-300 ${
                  card.highlight
                    ? "bg-[#18201d]/90 border border-santt-gold/40 shadow-card-dark shadow-santt-gold/5"
                    : "bg-santt-surface/80 border border-santt-border/30 hover:border-santt-gold/30 hover:bg-santt-surface"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    card.highlight
                      ? "bg-gold-gradient text-[#0c100f]"
                      : "bg-santt-gold/10 text-santt-gold"
                  }`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-santt-text-muted text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

