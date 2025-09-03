/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["kimiatoranj-api.liara.run", "api.kimiatoranj.com"], // ✅ allow external image host
  },
  experimental: {
    turbo: false, // ⛔ disable Turbopack to avoid font fetch build errors
  },
};

export default nextConfig;
