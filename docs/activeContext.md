# Active Context: Migração para Next.js 14 (App Router)

## 📌 Status do Projeto
- **Origem:** HTML/CSS estático (`index.html`, `index.css`)
- **Destino:** Next.js 14 com App Router, TypeScript e Tailwind CSS
- **Localização:** `c:\Users\Jessica\Desktop\Projeto - Santt`

## 🛠️ Especificações Técnicas Implementadas
1. **Tipografia e Estilo:**
   - Fontes Google via `next/font/google`: `Cormorant Garamond` (serif para títulos de alto padrão) e `Plus Jakarta Sans` (sans-serif para legibilidade do corpo).
   - Paleta de cores nobre: tons de preto e grafite profundo (`#0c100f`, `#121715`), acentos em ouro champanhe (`#c7a77b`, `#e4d3ba`, `#9e7f53`), gradiente metálico e glassmorphism.
2. **Assets e Otimização:**
   - Imagem oficial da recepção em `public/recepcao-santt.webp` integrada no Hero via `next/image` (`aspect-ratio: 584/510`, `priority`, `sizes`).
   - Correção do erro de sintaxe do HTML original (tag malformada corrigida).
   - Dois badges flutuantes estilizados e animados sobre a imagem no desktop (`Performance & Longevidade` e `Corpo Clínico Integrado`).
   - Contato centralizado: `5584996140959` via `config/site.ts` com gerador de links para mensagens contextuais de WhatsApp.
3. **Componentização Modular (/components):**
   - `Navbar`: Fundo translúcido com detecção de scroll (>40px) e menu gaveta mobile interativo.
   - `Hero`: Layout responsivo com selo de localização, tipografia de luxo, badges flutuantes e botões de conversão.
   - `Concept`: Os 3 pilares do conceito Santt com destaque para Interdisciplinaridade Real.
   - `Services`: As 4 áreas de atuação com lista de benefícios e banner para contato direto.
   - `Experience`: Galeria de fotos, certificação do projeto Paulo Costa e atributos da clínica.
   - `Team`: Dr. Rodrigo Santos e corpo multiprofissional com tags e especialidades.
   - `Testimonials`: Avaliações 5 estrelas e depoimentos de pacientes e atletas.
   - `Location`: Dados de localização em Capim Macio (Natal/RN), horário de atendimento e links para GPS.
   - `Faq`: Accordion interativo com abertura/fechamento suave.
   - `CtaBanner`: Chamada final de alto impacto para agendamento concierge.
   - `Footer`: Links de navegação, especialidades, créditos ao arquiteto e notas éticas.
   - `WhatsAppFloat`: Botão flutuante com animação de pulso, ícone oficial e tooltip.

