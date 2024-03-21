import { StageExchange } from "@/components/pages/exchange/StageExchange";
import { SwapStageProvider } from "./context/swap-stage/swapStateProvider";

import { ExchangeProvider } from "./providers/ExchangeProvider";
import { Metadata } from "next";
import { generateTitle } from "@/utils/metadata";

export const metadata: Metadata = {
	title: generateTitle("Exchange"),
	description: "Exchange",
};

const ExchangePage = () => {
	return (
		<div className="h-[52rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative ">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

			<div className="pt-20 max-w-[1200px] mx-auto relative">
				<SwapStageProvider>
					<div className="mb-20">
						<StageExchange />
					</div>

					<ExchangeProvider />
				</SwapStageProvider>
			</div>
		</div>
	);
};

export default ExchangePage;
