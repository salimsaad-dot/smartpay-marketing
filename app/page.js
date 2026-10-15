import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Problem, HowItWorks, PaymentOptions, Features, Trust, Faq } from "@/components/Sections";
import { Contact, Footer } from "@/components/Contact";

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
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
