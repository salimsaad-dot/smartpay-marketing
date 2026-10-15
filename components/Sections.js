import Reveal from "./Reveal";
import {
  LayersIcon, FileIcon, WalletIcon, AlertIcon, CalendarIcon, UserIcon, ChartIcon, SparkleIcon,
  UploadIcon, ShieldIcon, LockIcon, ListIcon, MessageIcon, PhoneIcon, CheckCircleIcon,
} from "./icons";

// Every claim on this page maps to a shipped SmartPay feature (see
// smartpay/DESIGN.md Build Progress). Left out on purpose because SmartPay
// doesn't do them: payment receipts by SMS, multiple staff accounts per
// school (each school has one admin login), and in-app parent accounts.

function SectionHeading({ eyebrow, title, intro, center = true }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-sm font-semibold uppercase tracking-wider text-blue">{eyebrow}</p>
      <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-slate">{intro}</p>}
    </Reveal>
  );
}

export function Problem() {
  return (
    <section className="border-y border-border bg-card py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber">Why SmartPay</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Chasing school fees shouldn&rsquo;t take up the whole term.
          </h2>
        </Reveal>
        <Reveal delay={80} className="space-y-4 text-lg leading-relaxed text-slate">
          <p>
            In many schools, fees still run on printed bills, phone calls to parents and a notebook of
            who has paid. It eats into the bursar&rsquo;s week, and balances slip through the cracks.
          </p>
          <p>
            SmartPay takes that one job and makes it simple. Parents get a text with exactly what they
            owe and pay from their phone, with nothing to install or sign up for. The school sees every
            payment in one place, and reminders go out without anyone having to chase.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const STEPS = [
  {
    title: "Set your fees once",
    copy: "Add your classes and fee types, set the fees for each class and term, and SmartPay creates every student's invoice in one go.",
    Icon: LayersIcon,
  },
  {
    title: "Parents get a text",
    copy: "Each parent receives an SMS listing what's owed for each fee and the total, with a secure payment link for their child.",
    Icon: MessageIcon,
  },
  {
    title: "They pay on their phone",
    copy: "The link opens a checkout. They pick a fee, pay all of it or part of it, by Mobile Money or card. Payments are processed by Paystack.",
    Icon: PhoneIcon,
  },
  {
    title: "You see it instantly",
    copy: "The invoice updates the moment the payment clears. Cash and bank payments you receive at the office are recorded in the same place.",
    Icon: CheckCircleIcon,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From fee setup to money received, in four steps."
          intro="Your office does the setup once. After that, reminders and payments run on their own."
        />
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ title, copy, Icon }, i) => (
            <Reveal as="li" key={title} delay={i * 70} className="relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow)]">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-wash text-blue">
                  <Icon className="h-5.5 w-5.5" />
                </span>
                <span className="font-display text-3xl font-bold text-border">{i + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate">{copy}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PaymentOptions() {
  return (
    <section className="bg-[#0F172A] py-20 text-[#F1F5F9] sm:py-28 dark:border-y dark:border-white/5 dark:bg-[#152038]">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#34D399]">Your parents, your choice</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Not every parent taps links. SmartPay works for them too.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#A3B1C6]">
            Each school decides what its reminders say. Use payment links, or send reminders that ask
            parents to pay straight to your school&rsquo;s own Mobile Money number.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <span className="rounded-full bg-[#2563EB]/20 px-3 py-1 text-xs font-semibold text-[#93C5FD]">Option 1 · Payment link</span>
            <h3 className="mt-5 font-display text-xl font-semibold">Tap, pay, done</h3>
            <p className="mt-2 leading-relaxed text-[#A3B1C6]">
              The SMS carries a secure link to a checkout for that child. Parents pay by Mobile Money or
              card through Paystack, and the invoice updates by itself.
            </p>
            <p className="mt-4 rounded-xl bg-black/30 p-4 font-mono text-[13px] leading-relaxed text-[#CBD5E1]">
              Hillview Academy: Kofi Boateng owes Term 1 Fees GHS 850. Total GHS 850. Pay: smartpay…/pay/k7Qx2
            </p>
          </Reveal>
          <Reveal delay={80} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <span className="rounded-full bg-[#10B981]/20 px-3 py-1 text-xs font-semibold text-[#6EE7B7]">Option 2 · Mobile Money only</span>
            <h3 className="mt-5 font-display text-xl font-semibold">No link at all</h3>
            <p className="mt-2 leading-relaxed text-[#A3B1C6]">
              The SMS tells parents what they owe and the school&rsquo;s MoMo number and account name, so
              they pay the way they already know. It works on any phone. Your office then records the
              payment in SmartPay.
            </p>
            <p className="mt-4 rounded-xl bg-black/30 p-4 font-mono text-[13px] leading-relaxed text-[#CBD5E1]">
              Hillview Academy: Kofi Boateng owes Term 1 Fees GHS 850. Total GHS 850. Pay by MoMo to 024 555 0123 (HILLVIEW ACADEMY).
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  { title: "Automatic Friday reminders", copy: "Every Friday, parents with unpaid fees get a reminder, without anyone pressing send. Brothers and sisters are combined into one message.", Icon: CalendarIcon },
  { title: "Fee structures and invoices", copy: "Fees per class and term, built from your own fee types. Bill a whole class or only selected students, with a preview before anything is created.", Icon: FileIcon },
  { title: "Record any payment", copy: "Cash, Mobile Money, bank transfer and online payments all land on the same invoice. Mistakes are voided with a reason, never deleted.", Icon: WalletIcon },
  { title: "Arrears at a glance", copy: "One list of everyone who still owes, with balances and last payment dates. Filter by class or term and send a reminder from there.", Icon: AlertIcon },
  { title: "Each student's account", copy: "Tap a student to see everything they've been billed, what's paid, what's overdue and their full payment history.", Icon: UserIcon },
  { title: "Reports you can export", copy: "Collection summaries, outstanding fees, payment history, SMS activity and printable student and parent statements, with CSV export.", Icon: ChartIcon },
  { title: "AI financial summary", copy: "A short daily summary of your school's fee position on the dashboard, in plain language, so the numbers tell a story.", Icon: SparkleIcon },
  { title: "Bring your records in", copy: "Import your students from a spreadsheet (CSV or Excel). Download the template, fill it in, check the preview, import.", Icon: UploadIcon },
  { title: "Your own SMS wording", copy: "Write reminders in your school's voice, with each fee listed and the total, and preview the exact message before it goes out.", Icon: ListIcon },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="For your school office"
          title="Everything the bursar needs. Nothing parents have to learn."
          intro="SmartPay focuses on one job, collecting school fees, so it's quick to set up and easy for the office to learn."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ title, copy, Icon }, i) => (
            <Reveal key={title} delay={(i % 3) * 70} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-wash text-green">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-slate">{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const TRUST = [
  { title: "Payments by Paystack", copy: "Online payments go through Paystack's checkout. SmartPay never sees or stores card or wallet details.", Icon: LockIcon },
  { title: "Your school's data stays yours", copy: "Every school's records are kept separate, and the separation is tested on every change so one school can never see another's.", Icon: ShieldIcon },
  { title: "Every change is logged", copy: "An audit log records who did what and when, from fee changes to voided payments, so nothing changes quietly.", Icon: ListIcon },
];

export function Trust() {
  return (
    <section className="border-y border-border bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionHeading eyebrow="Trust" title="Money and children's records, handled with care." />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {TRUST.map(({ title, copy, Icon }, i) => (
            <Reveal key={title} delay={i * 70} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-wash text-blue">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-slate">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "Do parents need a smartphone?",
    a: "Every parent receives the reminder SMS on any phone. Paying through the link needs a phone with internet. If many of your parents don't have one, use Mobile Money-only reminders, which ask them to pay to your school's MoMo number from any phone.",
  },
  {
    q: "Do parents need to download an app or create an account?",
    a: "No. There's nothing to install and no password to remember. The link in the SMS opens the payment page for their child directly.",
  },
  {
    q: "Can parents pay in instalments?",
    a: "Yes. Parents choose which fee to pay and can pay part of it. The balance stays on the invoice, and the next reminder shows what's left.",
  },
  {
    q: "What does an online payment cost?",
    a: "Paystack charges 1.95% on each online payment in Ghana. Your school decides whether to absorb that or pass it on. Mobile Money-only reminders don't go through Paystack, so there's no Paystack fee on those.",
  },
  {
    q: "How much does SmartPay cost?",
    a: "Pricing depends on your school's size and how many reminders you send. Book a demo or message us on WhatsApp and we'll give you a clear price.",
  },
  {
    q: "We already have our students in a spreadsheet. Do we retype them?",
    a: "No. Import them from a CSV or Excel file using SmartPay's template, check the preview, and import.",
  },
  {
    q: "Is it a full school management system?",
    a: "No. SmartPay focuses on fees: billing, payments, reminders and reports. If your school would also like attendance, grades and report cards, ask us about Academia Hub, our full school management system.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <SectionHeading eyebrow="Questions" title="What headteachers ask us." />
        <Reveal className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card shadow-[var(--shadow)]">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group px-5 sm:px-6">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-base font-semibold text-ink sm:text-lg [&::-webkit-details-marker]:hidden">
                {q}
                <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-wash text-lg text-blue transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="pb-5 text-[15px] leading-relaxed text-slate">{a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
