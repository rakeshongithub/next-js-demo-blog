/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/us-locations',
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
  async rewrites() {
    return [
      {
        source: '/en-US', // automatically handles all locales
        destination: '/us-locations', // automatically passes the locale on
        locale: false,
      },
      {
        source: '/', // automatically handles all locales
        destination: '/us-locations', // automatically passes the locale on
        locale: false,
      },
    ]
  },
}

module.exports = nextConfig
