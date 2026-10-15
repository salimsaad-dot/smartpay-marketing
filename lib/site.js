// Contact details used across the site. Change them here only.
// whatsapp/phone: international format, digits only for whatsapp
// (e.g. "233241234567"), display form for phoneDisplay.
export const CONTACT = {
  whatsapp: "233000000000",
  phone: "+233000000000",
  phoneDisplay: "+233 00 000 0000",
  email: "hello@example.com",
};

export const WHATSAPP_MESSAGE = "Hello, I'd like to know more about SmartPay for my school.";

export const whatsappLink = () =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// The live SmartPay app, for schools that already have an account.
export const APP_LOGIN_URL = "https://smartpay-tan.vercel.app/login";
