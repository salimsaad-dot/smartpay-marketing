// The SmartPay app's own mark (smartpay-frontend/components/Logo.js): a
// graduation cap on a payment card. The cap uses currentColor here instead
// of fixed navy so it stays visible in dark mode.
export function LogoMark({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="16" width="32" height="20" rx="5" fill="#10B981" />
      <rect x="4" y="21" width="32" height="5" fill="#FFFFFF" fillOpacity="0.35" />
      <rect x="9" y="30" width="10" height="2.5" rx="1.25" fill="#FFFFFF" fillOpacity="0.7" />
      <path d="M20 3 L37 11 L20 19 L3 11 Z" fill="currentColor" />
      <path d="M12 14.5 V21 C12 23 16 24.5 20 24.5 C24 24.5 28 23 28 21 V14.5 L20 18.5 Z" fill="currentColor" />
      <circle cx="35" cy="11" r="1.6" fill="currentColor" />
      <line x1="35" y1="11" x2="35" y2="19" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Logo({ size = 32 }) {
  return (
    <span className="flex items-center gap-2.5 text-ink">
      <LogoMark size={size} />
      <span className="font-display text-xl font-bold tracking-tight">
        Smart<span className="text-green-bright">Pay</span>
      </span>
    </span>
  );
}
