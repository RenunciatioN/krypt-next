import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import { Navbar } from "@/components/layout/Navbar";
import { AppProvider } from "./Providers/AppProvider";
import { HeaderProvider } from "./Providers/HeaderProvider";
import { HeaderBtn } from "@/components/layout/HeaderBtn";

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
						<Navbar headerBtn={<HeaderBtn />} />
					</HeaderProvider>

					<main>{children}</main>
				</AppProvider>
				<Toaster theme="dark" />
			</body>
		</html>
	);
}
