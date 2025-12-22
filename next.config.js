/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.clikkle.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig

