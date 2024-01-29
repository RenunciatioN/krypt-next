"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./ThemeProvider";
import { MantineProvider } from "@mantine/core";

const queryClient = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
			<MantineProvider>
				<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			</MantineProvider>
		</ThemeProvider>
	);
};

export { AppProvider };
