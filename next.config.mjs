/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
	reactStrictMode: false,

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "s2.coinmarketcap.com",
				port: "",
				pathname: "/static/img/coins/64x64/**",
			},
		],
		// domains: ["s2.coinmarketcap.com"],
	},
};

export default nextConfig;
