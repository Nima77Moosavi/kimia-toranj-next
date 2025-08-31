/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["kimiatoranj-api.liara.run", "api.kimiatoranj.com"], // ✅ allow external image host
  },
};

export default nextConfig;
