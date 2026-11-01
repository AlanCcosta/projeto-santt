"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c100f]/90 backdrop-blur-md border-b border-santt-border/40 shadow-card-dark py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#"
          className="flex flex-col group cursor-pointer"
          aria-label="SANTT Clínica Integrada"
          onClick={closeMenu}
        >
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.2em] text-white group-hover:text-santt-gold-light transition-colors">
            SANTT
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-santt-gold font-medium uppercase -mt-1">
            Clínica Integrada
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-santt-text/80 hover:text-santt-gold transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.getWhatsAppLink(
              "Olá, gostaria de solicitar informações sobre agendamento concierge na Santt Clínica."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gold-gradient text-[#0c100f] font-semibold text-xs tracking-wider uppercase shadow-gold-soft hover:shadow-gold-glow hover:brightness-105 active:scale-95 transition-all duration-200"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Concierge</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-santt-text hover:text-santt-gold focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 top-[70px] bg-[#0c100f]/95 backdrop-blur-xl border-t border-santt-border/30 z-40 lg:hidden flex flex-col justify-between p-8 transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <nav className="flex flex-col gap-6 pt-4">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="text-lg font-medium text-santt-text hover:text-santt-gold transition-colors py-1 border-b border-white/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="pt-6 pb-8 border-t border-santt-border/30">
          <a
            href={siteConfig.getWhatsAppLink(
              "Olá, gostaria de agendar uma consulta na Santt Clínica."
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="w-full flex items-center justify-center gap-3 py-3.5 rounded-full bg-gold-gradient text-[#0c100f] font-semibold text-sm tracking-wider uppercase shadow-gold-soft active:scale-95 transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Consulta</span>
          </a>
        </div>
      </div>
    </header>
  );
}

