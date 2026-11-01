"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Como funciona a primeira consulta na Santt Clínica?",
    answer:
      "A primeira consulta é uma imersão completa na sua rotina. Realizamos anamnese detalhada, avaliação física e de composição corporal, alinhamento de exames e compreensão dos seus objetivos (seja emagrecimento, hipertrofia, melhora de exames de sangue ou rendimento em provas). O plano é construído em conjunto com você.",
  },
  {
    question: "Vocês atendem planos de saúde ou apenas particular?",
    answer:
      "Para assegurar o tempo necessário a cada paciente, atendimento sem pressa e acompanhamento contínuo de alto padrão, nossos atendimentos são exclusivamente particulares. No entanto, fornecemos toda a documentação comprobatória e recibos médicos necessários para que você solicite reembolso junto ao seu plano de saúde.",
  },
  {
    question: "Preciso ser atleta ou praticar esportes intensos para ser atendido?",
    answer:
      "Não. Embora tenhamos profunda autoridade em nutrição esportiva e atletas, uma grande parcela de nossos pacientes busca simplesmente qualidade de vida, emagrecimento com saúde, aumento de disposição diária e longevidade sustentável.",
  },
  {
    question: "Como tenho suporte após sair da consulta?",
    answer:
      "Nosso diferencial é não deixar você sozinho. Oferecemos canais diretos para sanar dúvidas sobre substituições, suplementação e evolução, mantendo a constância até seu próximo retorno programado.",
  },
  {
    question: "Como posso agendar minha consulta ou tirar dúvidas adicionais?",
    answer:
      "Você pode clicar em qualquer um dos botões de agendamento desta página para falar diretamente com nossa equipe de concierge via WhatsApp. Responderemos com brevidade para encontrar o melhor horário disponível.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-santt-surface/40" id="faq">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-santt-gold font-semibold mb-4">
            TRANSPARÊNCIA E CUIDADO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-santt-text-muted text-sm sm:text-base leading-relaxed">
            Tire suas principais dúvidas sobre nosso formato de atendimento e protocolos integrados.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-santt-surface/90 border-santt-gold/40 shadow-card-dark"
                    : "bg-santt-surface/50 border-santt-border/30 hover:border-santt-gold/30"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-white">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? "bg-santt-gold/20 border-santt-gold text-santt-gold rotate-180"
                        : "bg-transparent border-santt-border/50 text-santt-text-muted"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm text-santt-text-muted leading-relaxed border-t border-santt-border/20 pt-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

