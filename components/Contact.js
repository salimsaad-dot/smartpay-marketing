import Reveal from "./Reveal";
import DemoForm from "./DemoForm";
import { Logo } from "./Logo";
import { WhatsAppIcon, PhoneIcon, MailIcon } from "./icons";
import { CONTACT, whatsappLink, APP_LOGIN_URL } from "@/lib/site";

const CHANNELS = [
  { label: "WhatsApp", detail: "Fastest reply", href: whatsappLink(), external: true, Icon: WhatsAppIcon, tone: "text-[#25D366]" },
  { label: "Call us", detail: CONTACT.phoneDisplay, href: `tel:${CONTACT.phone}`, Icon: PhoneIcon, tone: "text-blue" },
  { label: "Email", detail: CONTACT.email, href: `mailto:${CONTACT.email}?subject=${encodeURIComponent("SmartPay for my school")}`, Icon: MailIcon, tone: "text-blue" },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-card py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-8 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue">Get started</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            See SmartPay working with your own fees.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate">
            In a short demo we set up a few of your classes and fees, send a test reminder to your own
            phone, and walk you through exactly what your parents will see. No commitment.
          </p>

          <div className="mt-8 space-y-3">
            {CHANNELS.map(({ label, detail, href, external, Icon, tone }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex min-h-16 items-center gap-4 rounded-2xl border border-border bg-paper px-5 py-3 transition-colors hover:border-blue"
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card ${tone}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-ink">{label}</span>
                  <span className="block truncate text-sm text-slate">{detail}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <DemoForm />
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-8">
        <div>
          <Logo size={28} />
          <p className="mt-2 text-sm text-slate-quiet">School fees, simplified.</p>
        </div>
        <div className="-mx-2 flex flex-wrap text-sm text-slate">
          <a href="#how-it-works" className="px-2 py-3 hover:text-ink">How it works</a>
          <a href="#features" className="px-2 py-3 hover:text-ink">Features</a>
          <a href="#faq" className="px-2 py-3 hover:text-ink">FAQ</a>
          <a href="#about" className="px-2 py-3 hover:text-ink">About</a>
          <a href={APP_LOGIN_URL} className="px-2 py-3 hover:text-ink">Log in</a>
        </div>
        <p className="text-sm text-slate-quiet">&copy; {new Date().getFullYear()} SmartPay</p>
      </div>
    </footer>
  );
}
