/** @type {import('next').NextConfig} */
const nextConfig = {
  // Proxies /api/* to the SmartPay backend so the demo form posts
  // same-origin, the same pattern as the SmartPay app itself. The backend
  // still sees this site's Origin header (the proxy forwards it), so this
  // site's address must be in the backend's ADDITIONAL_ORIGINS.
  async rewrites() {
    const backendOrigin = process.env.NEXT_PUBLIC_API_ORIGIN;
    if (!backendOrigin) return [];
    return [{ source: "/api/:path*", destination: `${backendOrigin}/api/:path*` }];
  },
};

export default nextConfig;
