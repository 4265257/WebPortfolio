/** @type {import('next').NextConfig} */
const nextConfig = {
  pageDataCollectionTimeout: 5000,
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
}

// module.exports = {
//   compiler: {
//     // Enables the styled-components SWC transform
//     styledComponents: true
//   }
// }

module.exports = nextConfig
