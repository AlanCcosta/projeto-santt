import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Concept } from "@/components/Concept";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
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
        <Testimonials />
        <Location />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

