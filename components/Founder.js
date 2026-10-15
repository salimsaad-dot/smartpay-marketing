import Reveal from "./Reveal";
import { WhatsAppIcon } from "./icons";
import { whatsappLink } from "@/lib/site";

// A real photo and a first-person note from the founder, added for trust:
// SmartPay handles a school's fee money and parents' phone numbers, and a
// headteacher deciding whether to use it should see there's a real,
// reachable person behind it. Same idea as Academia Hub's FounderSection
// (same photo), with its own text so it doesn't repeat the "Why SmartPay"
// section above. Pilot schools aren't named without their consent.
export default function Founder() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <Reveal className="grid gap-10 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow)] sm:p-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14">
          <div className="mx-auto h-52 w-52 shrink-0 overflow-hidden rounded-full border-4 border-green-wash sm:h-64 sm:w-64">
            {/* eslint-disable-next-line @next/next/no-img-element -- static marketing asset */}
            <img src="/founder.jpg" alt="Saad Salim, founder of SmartPay" width={548} height={513} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue">Who&rsquo;s behind SmartPay</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              A real person you can call.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              I&rsquo;m Saad, and I built SmartPay here in Ghana for schools that want one thing done
              well: collecting fees without the chasing. Parents pay from a text message, and the school
              office sees every payment in one place, with nothing complicated to learn.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              It&rsquo;s already running at schools, and I work with each one directly. When you
              message SmartPay, you reach me, not a call centre. If something isn&rsquo;t working for
              your school, I want to hear about it.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <p className="font-display text-lg font-semibold text-ink">
                Saad Salim <span className="text-base font-normal text-slate-quiet">· Founder</span>
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border px-4 text-sm font-semibold text-ink transition-colors hover:border-green-bright"
              >
                <WhatsAppIcon className="h-4.5 w-4.5 text-[#25D366]" /> Message me on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
