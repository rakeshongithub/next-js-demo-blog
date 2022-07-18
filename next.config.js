
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/us-locations',
  env: {
    BUILD_ENV: process.env.BUILD_ENV
  },
  i18n: {
    locales: ['en-us', 'es-us'],
    defaultLocale: 'en-us',
    localeDetection: false
  },

  // experimental: {
  //   outputStandalone: true
  // },
  // localeBeforeBasePath: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/locations',
        locale: false,
        permanent: false,
      },
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig
