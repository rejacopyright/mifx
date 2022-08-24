/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fe.dev.dxtr.asia'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
