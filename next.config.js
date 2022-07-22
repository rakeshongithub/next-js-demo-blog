
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/us-locations',
  env: {
    BUILD_ENV: process.env.BUILD_ENV
  },
  i18n: {
    locales: ['en-us', 'es-us'],
    defaultLocale: 'en-us'
  },
  // trailingSlash: true,

  // experimental: {
  //   outputStandalone: true
  // },
  // localeBeforeBasePath: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/locations',
        permanent: false,
      },
      {
        source: "/posts/:id*.html",  // Old url with .html
        destination: "/posts/:id*", // Redirect without .html
        permanent: false,
      },
      {
        source: "/todos/:id*.html",  // Old url with .html
        destination: "/todos/:id*", // Redirect without .html
        permanent: false,
      },
      {
        source: `/locations.html`,
        destination: `/locations`,
        permanent: false,
      },
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig
