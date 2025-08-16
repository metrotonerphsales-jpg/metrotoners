import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.tina.io',
        port: '',
      },
    ]
  }
}

export default nextConfig
