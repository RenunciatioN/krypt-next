import { StageExchange } from "@/components/pages/exchange/StageExchange";
import { SwapStageProvider } from "./context/swap-stage/swapStateProvider";

import { ExchangeProvider } from "./providers/ExchangeProvider";

const ExchangePage = () => {
	return (
		<div className="h-[52rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative ">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

			<div className="pt-20 max-w-[1200px] mx-auto relative">
				<SwapStageProvider>
					<StageExchange />
					<div className="mt-20 flex gap-10 justify-center ">
						<ExchangeProvider />
					</div>
				</SwapStageProvider>
			</div>
		</div>
	);
};

export default ExchangePage;
