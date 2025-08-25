/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  i18n: {
    locales: ["he", "ar", "en"],
    defaultLocale: "he",
    localeDetection: false,
    domains: [
      {
        domain: "khamisuniform.com",
        defaultLocale: "he",
      },
    ],
  },
  devIndicators: false,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Prevent ESLint errors from failing the build on Netlify
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
