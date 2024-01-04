// @ts-check

const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // for docker
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => [
    {
      source: "/posts/test",
      destination: "/posts/get-started",
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "website-2023-bucket.s3.af-south-1.amazonaws.com",
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
