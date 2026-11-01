import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Rodrigo Santos",
    role: "Nutricionista Esportivo & Palestrante",
    tag: "Fundador & Especialista",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    bio: "Mais de 15 anos de atuação dedicados a atletas amadores e de elite, emagrecimento sustentável e composição corporal. Referência no Rio Grande do Norte em estratégias de alta performance.",
    pills: ["Nutrição Esportiva", "Emagrecimento", "Performance"],
    featured: true,
  },
  {
    name: "Corpo Médico Especializado",
    role: "Medicina & Longevidade Saudável",
    tag: null,
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    bio: "Abordagem diagnóstica com base em análise hormonal, metabólica e testes de composição de ponta, construindo um elo direto com o plano nutricional do paciente.",
    pills: ["Metabolismo", "Check-up", "Longevidade"],
    featured: false,
  },
  {
    name: "Equipe Multidisciplinar",
    role: "Fisioterapia, Movimento & Suporte",
    tag: null,
    image:
      "https://images.unsplash.com/photo-1594824813689-dd9359e1c12e?auto=format&fit=crop&w=800&q=80",
    bio: "Suporte técnico para prevenção de lesões esportivas, reabilitação física e garantia de constância em todas as fases da sua rotina de treinamento.",
    pills: ["Prevenção", "Recuperação", "Bem-estar"],
    featured: false,
  },
];

export function Team() {
  return (
    <section className="py-24 md:py-32 bg-santt-base" id="corpo-clinico">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-santt-gold font-semibold mb-4">
            CORPO CLÍNICO & AUTORIDADE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight mb-6">
            Especialistas comprometidos com a sua{" "}
            <em className="font-serif italic font-normal text-santt-gold-light">
              melhor versão
            </em>
            .
          </h2>
          <p className="text-santt-text-muted text-sm sm:text-base leading-relaxed">
            Profissionais renomados, com sólida trajetória acadêmica e atuação de ponta em
            nutrição, medicina e suporte atlético.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden bg-santt-surface/80 border transition-all duration-300 flex flex-col ${
                member.featured
                  ? "border-santt-gold/50 shadow-card-dark"
                  : "border-santt-border/30 hover:border-santt-gold/40"
              }`}
            >
              {member.tag && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-gold-gradient text-[#0c100f] text-[11px] font-bold uppercase tracking-wider shadow-gold-soft">
                  {member.tag}
                </div>
              )}

              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-santt-surface">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121715] via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-white mb-1">
                    {member.name}
                  </h3>
                  <span className="block text-xs uppercase tracking-wider text-santt-gold font-medium mb-4">
                    {member.role}
                  </span>
                  <p className="text-santt-text-muted text-xs sm:text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-santt-border/20">
                  {member.pills.map((pill, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-2.5 py-1 rounded-md bg-santt-gold/10 text-santt-gold-light text-[11px] font-medium"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

