import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Add your config options here
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@components": path.resolve(__dirname, "src/app/components"),
      "@styles": path.resolve(__dirname, "src/app/styles"),
      "@utils": path.resolve(__dirname, "src/app/lib/utils"),
      "@assets": path.resolve(__dirname, "src/app/lib/assets"),
      "@": path.resolve(__dirname),
    };
    return config;
  },
};

export default nextConfig;