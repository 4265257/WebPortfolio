/** @type {import('next').NextConfig} */
const nextConfig = {
  pageDataCollectionTimeout: 5000,
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGES_URL],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
};

module.exports = {
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
