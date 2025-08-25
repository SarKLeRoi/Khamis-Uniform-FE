/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  i18n: {
    locales: ["he", "ar", "en"],
    defaultLocale: "he",
    localeDetection: false, // Optional: auto-detect browser language
  },
  devIndicators: false,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Prevent ESLint errors from failing the build on Netlify
  },
};

module.exports = nextConfig;
