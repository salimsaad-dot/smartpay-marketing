import HeroVideo from "./HeroVideo";
import { ArrowRightIcon, CheckIcon, WhatsAppIcon } from "./icons";
import { whatsappLink } from "@/lib/site";

const POINTS = ["No app to install", "No parent account or password", "Mobile Money or card", "Part-payments allowed"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_85%_-10%,var(--blue-wash),transparent_70%)]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:pb-28">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-slate shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-green-bright" />
            Built for schools in Ghana
          </span>
          <h1 className="mt-5 text-balance font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[3.25rem]">
            School fees, paid straight from a text message.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
            SmartPay texts each parent what they owe with a secure payment link. They tap it, pay by
            Mobile Money or card, and your school sees the payment right away. Reminders for unpaid
            fees go out by themselves every Friday.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue px-6 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-deep dark:text-[#0B1120]"
            >
              Book a free demo <ArrowRightIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 text-base font-semibold text-ink shadow-sm transition-colors hover:border-green-bright"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> Chat on WhatsApp
            </a>
          </div>

          <ul className="mt-8 grid max-w-lg grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm font-medium text-slate">
                <CheckIcon className="h-4 w-4 shrink-0 text-green" /> {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="fade-up [animation-delay:120ms]">
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
