import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'beloved-shrimp-813.convex.cloud',
        protocol: 'https',
        port: '',
      },
    ],
  },
};

export default nextConfig;
