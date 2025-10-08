/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'kuzco201\'s registry',
    description: 'The official store for kuzco201\'s custom Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://kuzco201.github.io/kasm-registry/',
    contactUrl: 'https://github.com/kuzco201/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
