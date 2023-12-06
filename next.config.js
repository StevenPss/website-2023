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
};

module.exports = withContentlayer(nextConfig);
