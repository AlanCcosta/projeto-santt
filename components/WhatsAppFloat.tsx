import { siteConfig } from "@/config/site";

export function WhatsAppFloat() {
  return (
    <aside
      aria-label="Atendimento no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center group pointer-events-auto"
    >
      {/* Tooltip */}
      <span className="hidden md:inline-block mr-3 px-3.5 py-1.5 rounded-lg bg-[#121715]/95 border border-santt-border text-santt-gold-light text-xs font-medium tracking-wide shadow-card-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Atendimento Concierge
      </span>

      {/* Floating Button */}
      <a
        href={siteConfig.getWhatsAppLink(
          "Olá, vim pelo site da Santt Clínica e gostaria de informações de agendamento."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/50 hover:scale-110 active:scale-95 transition-transform duration-300"
        aria-label="Fale conosco no WhatsApp"
      >
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />

        {/* WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>
    </aside>
  );
}

