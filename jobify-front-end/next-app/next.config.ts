import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
async function rewrites() {
  return [
    {
      source: "/jobify/:path*",
      destination: "http://localhost:8081/jobify/:path*",
    },
  ];
}
