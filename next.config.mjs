/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kimiatoranj-api.liara.run",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.kimiatoranj.com",
        pathname: "/**",
      },
    ],
  },

  experimental: {
    turbo: false, // ⛔ disable Turbopack to avoid font fetch build errors
  },
};

export default nextConfig;
