import { Dumbbell, Scale, HeartPulse, Compass, Check, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const services = [
  {
    num: "01",
    icon: Dumbbell,
    title: "Nutrição Esportiva & Performance",
    desc: "Periodização nutricional para atletas e entusiastas de endurance, corrida de rua, musculação e crossfit. Maximização de potência, velocidade e recuperação neuromuscular.",
    features: [
      "Avaliação antropométrica detalhada",
      "Estratégia pré e intra-treino personalizada",
      "Suplementação baseada em evidências",
    ],
  },
  {
    num: "02",
    icon: Scale,
    title: "Emagrecimento Saudável & Composição Corporal",
    desc: "Redução de gordura corporal com preservação de massa magra. Métodos sustentáveis que restauram seu equilíbrio metabólico sem dietas restritivas e sem efeito rebote.",
    features: [
      "Otimização da taxa metabólica basal",
      "Reeducação alimentar e adesão realista",
      "Acompanhamento de metas progressivas",
    ],
  },
  {
    num: "03",
    icon: HeartPulse,
    title: "Medicina Metabólica & Longevidade",
    desc: "Acompanhamento clínico preventivo. Análise profunda de biomarcadores, controle hormonal, saúde cardiovascular e protocolos para envelhecimento ativo e saudável.",
    features: [
      "Rastreio laboratorial completo",
      "Melhora da disposição física e sono",
      "Gestão do estresse e imunidade",
    ],
  },
  {
    num: "04",
    icon: Compass,
    title: "Acompanhamento Integrado Contínuo",
    desc: "Acesso direto à equipe para dúvidas durante o protocolo, ajustes pontuais conforme sua evolução e suporte que garante constância nos seus hábitos.",
    features: [
      "Canal de contato facilitado",
      "Reavaliações programadas",
      "Suporte humanizado e proativo",
    ],
  },
];

export function Services() {
  return (
    <section className="py-24 md:py-32 bg-santt-base" id="especialidades">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-santt-gold font-semibold mb-4">
            ÁREAS DE ATUAÇÃO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight mb-6">
            Cuidado direcionado aos seus maiores{" "}
            <em className="font-serif italic font-normal text-santt-gold-light">objetivos</em>.
          </h2>
          <p className="text-santt-text-muted text-sm sm:text-base leading-relaxed">
            Metodologias validadas pela ciência para impulsionar seu rendimento físico, equilíbrio
            metabólico e estética saudável.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="relative p-8 sm:p-10 rounded-2xl bg-santt-surface/70 border border-santt-border/30 hover:border-santt-gold/40 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-santt-gold/10 text-santt-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-3xl font-light text-santt-gold/30">
                    {item.num}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-santt-text-muted text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                <ul className="space-y-3 pt-6 border-t border-santt-border/20">
                  {item.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-santt-text/80">
                      <Check className="w-4 h-4 text-santt-gold shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#18201d] to-[#121715] border border-santt-border/40 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl text-white mb-2">
              Precisa de uma recomendação para o seu caso específico?
            </h3>
            <p className="text-santt-text-muted text-sm max-w-xl">
              Fale diretamente com nossa equipe de concierge e entenda qual profissional melhor
              atende sua necessidade.
            </p>
          </div>
          <a
            href={siteConfig.getWhatsAppLink(
              "Olá, gostaria de conversar sobre o melhor protocolo para mim."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold-gradient text-[#0c100f] font-semibold text-xs tracking-wider uppercase shadow-gold-soft hover:shadow-gold-glow hover:brightness-105 active:scale-95 transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Conversar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

