import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "MT",
    name: "Marcelo Tavares",
    role: "Empresário e Corredor Amador",
    text: "“O ambiente é espetacular, parece um hotel boutique. Mas o que mais me impressionou foi a consulta do Dr. Rodrigo Santos: uma precisão absurda na dieta que me fez baixar 8kg de gordura mantendo a energia intacta para correr.”",
  },
  {
    initials: "CL",
    name: "Camila Lucena",
    role: "Advogada • Natal/RN",
    text: "“Depois de passar por vários consultórios que passavam cardápios prontos de gaveta, na Santt tive um atendimento verdadeiramente integrado. Exames minuciosos e um plano adaptado à minha rotina intensa de trabalho.”",
  },
  {
    initials: "RF",
    name: "Rafael Fernandes",
    role: "Praticante de Triatlo",
    text: "“O acompanhamento multidisciplinar é o grande diferencial. Senti que não estava sozinho no processo. O espaço arquitetônico é um show à parte, transmite uma paz tremenda.”",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-santt-base to-santt-surface/70" id="depoimentos">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-santt-gold font-semibold mb-4">
            HISTÓRIAS DE SUCESSO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight mb-6">
            A satisfação de quem priorizou sua{" "}
            <em className="font-serif italic font-normal text-santt-gold-light">
              saúde e constância
            </em>
            .
          </h2>
          <p className="text-santt-text-muted text-sm sm:text-base leading-relaxed">
            Depoimentos de pacientes e atletas que confiam o seu desenvolvimento à Santt Clínica.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-santt-surface/80 border border-santt-border/30 hover:border-santt-gold/40 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-santt-gold mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-santt-gold" />
                  ))}
                </div>
                <p className="text-santt-text/90 text-sm sm:text-base leading-relaxed mb-8 italic">
                  {item.text}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-santt-border/20">
                <div className="w-11 h-11 rounded-full bg-santt-gold/15 text-santt-gold font-serif font-bold text-sm flex items-center justify-center border border-santt-gold/30">
                  {item.initials}
                </div>
                <div>
                  <span className="block text-sm font-semibold text-white">
                    {item.name}
                  </span>
                  <span className="block text-xs text-santt-text-subtle">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

