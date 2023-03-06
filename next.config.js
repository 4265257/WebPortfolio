/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  pageDataCollectionTimeout: 5000
}

// module.exports = {
//   compiler: {
//     // Enables the styled-components SWC transform
//     styledComponents: true
//   }
// }

module.exports = nextConfig
