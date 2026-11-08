import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Concept } from "@/components/Concept";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { Team } from "@/components/Team";
import { Professionals } from "@/components/Professionals";
import { Location } from "@/components/Location";
import { Faq } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Services />
        <Experience />
        <Team />
        <Professionals />
        <Location />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

