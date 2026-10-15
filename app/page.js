import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Problem, HowItWorks, PaymentOptions, Features, Trust, Faq } from "@/components/Sections";
import { Contact, Footer } from "@/components/Contact";
import Founder from "@/components/Founder";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <PaymentOptions />
        <Features />
        <Trust />
        <Founder />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
