import { Bricolage_Grotesque, Geist } from "next/font/google";
import "./globals.css";
import { THEME_INIT_SCRIPT } from "@/components/ThemeToggle";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata = {
  title: "SmartPay | School fees, paid from a text message",
  description:
    "SmartPay texts parents a secure link to pay school fees by Mobile Money or card. No app, no account, no password. Automatic Friday reminders for arrears.",
  openGraph: {
    title: "SmartPay | School fees, paid from a text message",
    description: "Parents tap the SMS, pay by Mobile Money or card, and the school sees it instantly. No app, no account.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: THEME_INIT_SCRIPT may set data-theme on
    // <html> before React hydrates, which is intended.
    <html lang="en" className={`${bricolage.variable} ${geist.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
