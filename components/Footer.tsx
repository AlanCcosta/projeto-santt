import Link from "next/link";
import { Instagram, MapPin, Clock, Phone, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[#080b0a] border-t border-santt-border/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="#" className="flex flex-col group cursor-pointer mb-6" aria-label="SANTT Clínica">
              <span className="font-serif text-3xl font-bold tracking-[0.2em] text-white">
                SANTT
              </span>
              <span className="text-[10px] tracking-[0.3em] text-santt-gold font-medium uppercase -mt-1">
                Clínica Integrada
              </span>
            </Link>
            <p className="text-santt-text-muted text-sm leading-relaxed mb-6 max-w-sm">
              Espaço multiprofissional voltado à saúde, alta performance, longevidade e emagrecimento
              consciente.
            </p>
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-santt-surface/80 border border-santt-border/40 text-santt-text-muted hover:text-santt-gold hover:border-santt-gold/50 transition-colors text-xs font-medium"
            >
              <Instagram className="w-4 h-4 text-santt-gold" />
              <span>{siteConfig.instagram.handle}</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg text-white font-normal mb-5">Navegação</h4>
            <ul className="space-y-3">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-santt-text-muted hover:text-santt-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg text-white font-normal mb-5">Especialidades</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-santt-text-muted">
              <li>Nutrição Esportiva</li>
              <li>Emagrecimento Saudável</li>
              <li>Composição Corporal</li>
              <li>Medicina & Longevidade</li>
              <li>Saúde Integrada</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg text-white font-normal mb-5">Santt Clínica</h4>
            <div className="space-y-4 text-xs sm:text-sm text-santt-text-muted">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-santt-gold shrink-0 mt-0.5" />
                <span>
                  Rua Industrial João Motta, 1510
                  <br />
                  Capim Macio, Natal - RN
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-santt-gold shrink-0 mt-0.5" />
                <span>
                  Seg. a Sex. das 07h às 20h
                  <br />
                  Sáb. das 08h às 13h
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-santt-gold shrink-0 mt-0.5" />
                <span>{siteConfig.phoneFormatted}</span>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-santt-gold shrink-0 mt-0.5" />
                <span>Projeto por Paulo Costa Arquiteto</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-santt-text-subtle">
          <p>&copy; {new Date().getFullYear()} Santt Clínica Integrada. Todos os direitos reservados.</p>
          <p className="max-w-xl text-[11px] leading-relaxed">
            As informações contidas neste site possuem caráter informativo e não substituem consulta
            médica ou nutricional presencial.
          </p>
        </div>
      </div>
    </footer>
  );
}

