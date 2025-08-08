import type { NextConfig } from "next";
import path from "path";

const nextConfig = {
	images: {
		domains: ["localhost"], // ← add 'localhost'
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "3001",
				pathname: "/uploads/**",
			},
		],
	},
};

export default nextConfig;
