import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.102', '192.168.0.10'],
  turbopack: {
    rules: {
      '*.svg': [{ loaders: ['@svgr/webpack'], as: '*.js' }],
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: 'ac.goit.global',
      },
    ],
  },
};

export default nextConfig;
