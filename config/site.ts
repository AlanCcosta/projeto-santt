export const siteConfig = {
  name: "SANTT Clínica Integrada",
  description:
    "Espaço de saúde e atendimento integrado de alto padrão em Capim Macio, Natal/RN. Nutrição esportiva, emagrecimento, medicina e performance com atendimento exclusivo.",
  phone: "5584996140959",
  phoneFormatted: "(84) 99614-0959",
  address: "Rua Industrial João Motta, 1510 — Capim Macio, Natal - RN, CEP 59082-410",
  addressShort: "Rua Industrial João Motta, 1510, Capim Macio, Natal - RN",
  hours: {
    weekdays: "Segunda a Sexta: 08:00 às 19:00",
    saturday: "",
  },
  instagram: {
    handle: "@santtclinica",
    url: "https://www.instagram.com/santtclinica",
  },
  mapsUrl:
    "https://maps.google.com/?q=Rua+Industrial+Jo%C3%A3o+Motta+1510+Capim+Macio+Natal+RN",
  getWhatsAppLink: (message?: string) => {
    const defaultMsg =
      "Olá, gostaria de solicitar informações sobre atendimento na Santt Clínica.";
    return `https://wa.me/5584996140959?text=${encodeURIComponent(
      message || defaultMsg
    )}`;
  },
  navItems: [
    { label: "O Conceito", href: "#conceito" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "A Experiência", href: "#experiencia" },
    { label: "Corpo Clínico", href: "#corpo-clinico" },
    { label: "Resultados", href: "#depoimentos" },
    { label: "Localização", href: "#localizacao" },
    { label: "Dúvidas", href: "#faq" },
  ],
};

