import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import "@/assets/styles/global.css";
import { AppProvider } from "./Providers/AppProvider";
import { headers } from "next/headers";
import { Toaster } from "sonner";

export const metadata: Metadata = {
	title: "KRYPT EXCHANGE",
	description: "Send Crypto across the world",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const path = headers().get("x-pathname");
	const isExistAuthPath = path?.startsWith("/auth");
	const isHomePath = path === "/";

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={` ${inter.className}`}>
				<AppProvider>
					{!isExistAuthPath && <Navbar />}
					{children}
					{isHomePath && <Footer />}
				</AppProvider>
				<Toaster theme="dark" />
			</body>
		</html>
	);
}
