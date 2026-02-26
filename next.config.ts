import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', 
  '192.168.1.175'
 ],
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;