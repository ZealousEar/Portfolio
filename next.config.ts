/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portfolio',  // Your repo name
  assetPrefix: '/Portfolio/',  // Your repo name
  images: {
    unoptimized: true
  },
  trailingSlash: true,
}

module.exports = nextConfig