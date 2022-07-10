
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/us-locations',
  env: {
    BUILD_ENV: process.env.BUILD_ENV
  },
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
    localeDetection: false
  },

  // experimental: {
  //   outputStandalone: true
  // },
  // localeBeforeBasePath: true,
  reactStrictMode: true,
}

module.exports = nextConfig
