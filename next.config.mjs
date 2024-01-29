/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "s2.coinmarketcap.com",
				port: "",
				pathname: "static/img/coins/64x64/**",
			},
		],
		// domains: ["s2.coinmarketcap.com"],
	},
};

export default nextConfig;
