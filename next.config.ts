import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      // Anda bisa menambahkan domain lain di sini di masa depan
      // contoh: { hostname: 'cdn.organisasi.com' }
    ],
  },
};

export default nextConfig;
