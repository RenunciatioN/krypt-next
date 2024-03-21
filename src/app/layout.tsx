import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import { Header } from "@/components/layout/header/Header";
import { AppProvider } from "./Providers/AppProvider";
import { HeaderProvider } from "./Providers/HeaderProvider";
import { HeaderBtn } from "@/components/layout/header/HeaderBtn";

import "@/assets/styles/global.css";

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
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={` ${inter.className}`}>
				<AppProvider>
					<HeaderProvider>
						<Header />
					</HeaderProvider>

					<main>{children}</main>
				</AppProvider>
				<Toaster theme="dark" />
			</body>
		</html>
	);
}
