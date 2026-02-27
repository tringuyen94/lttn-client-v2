/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    dangerouslyAllowSVG: true,
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
