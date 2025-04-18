/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net"], // se estiver usando imagens do Contentful
  },
};

module.exports = nextConfig;
