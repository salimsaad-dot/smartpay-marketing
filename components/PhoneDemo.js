import { CheckIcon, LockIcon } from "./icons";

// The whole product in one picture: the reminder SMS a parent receives,
// the checkout it opens, and the moment it's paid. Built in HTML rather
// than a screenshot so it stays sharp and themable. Wording follows
// SmartPay's real reminder and checkout screens; the school and child are
// fictional (never a real pilot school's name).
export default function PhoneDemo() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div aria-hidden="true" className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-blue/20 via-green-bright/15 to-transparent blur-2xl" />

      <div className="rounded-[2.5rem] border border-border bg-ink p-2.5 shadow-[var(--shadow-lift)] dark:bg-[#1E293B]">
        <div className="overflow-hidden rounded-[2rem] bg-[#F1F5F9]">
          <div className="flex items-center justify-between px-5 pt-3 pb-2 text-[11px] font-semibold text-[#0F172A]">
            <span>9:41</span>
            <span className="h-4 w-16 rounded-full bg-[#0F172A]" />
            <span>100%</span>
          </div>

          <div className="space-y-3 px-3.5 pb-5 pt-2">
            <p className="text-center text-[10px] font-medium text-[#64748B]">Friday, 9:00 AM</p>

            <div className="phone-step-1 max-w-[88%] rounded-2xl rounded-bl-md bg-white p-3 text-[12.5px] leading-snug text-[#0F172A] shadow-sm">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-[#64748B]">SmartPay</p>
              Hillview Academy: Kofi Boateng owes Term 1 Fees GHS 850, PTA Dues GHS 50. Total GHS 900. Pay:{" "}
              <span className="font-medium text-[#2563EB] underline">smartpay…/pay/k7Qx2</span> or MoMo 024 555 0123
            </div>

            <div className="phone-step-2 rounded-2xl bg-white p-3.5 text-[#0F172A] shadow-sm">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-[#64748B]">
                <LockIcon className="h-3 w-3" /> Secure checkout
              </div>
              <p className="mt-1.5 text-[13px] font-semibold">Kofi Boateng · Basic 5</p>
              <div className="mt-2 space-y-1.5 text-[12px]">
                <div className="flex items-center justify-between rounded-lg border-2 border-[#2563EB] bg-[#EFF6FF] px-2.5 py-1.5"><span className="font-medium">Term 1 Fees</span><span className="font-medium">GHS 850.00</span></div>
                <div className="flex items-center justify-between rounded-lg border border-[#E2E8F0] px-2.5 py-1.5"><span className="text-[#475569]">PTA Dues</span><span className="text-[#475569]">GHS 50.00</span></div>
              </div>
              <p className="mt-2 text-[10.5px] text-[#64748B]">You may pay part of this amount.</p>
              <div className="mt-3 rounded-lg bg-[#2563EB] py-2 text-center text-[12px] font-semibold text-white">
                Pay GHS 850.00 · MoMo or card
              </div>
            </div>

            <div className="phone-step-3 flex items-center gap-2.5 rounded-2xl bg-[#059669] p-3 text-white shadow-sm">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
                <CheckIcon className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-[13px] font-semibold">Payment received</p>
                <p className="text-[11px] text-white/85">GHS 850.00 · Term 1 Fees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
