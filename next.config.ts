import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/course/arabic", destination: "/arabe", permanent: true },
      { source: "/course/arabic/:path*", destination: "/arabe/:path*", permanent: true },
      { source: "/course/nourania", destination: "/nourania", permanent: true },
      { source: "/course/nourania/:path*", destination: "/nourania/:path*", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
} as NextConfig;

export default nextConfig;
