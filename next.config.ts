import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.29.56",
    "192.168.*.*",
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
