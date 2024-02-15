"use client";

import { ExchangeInfo } from "@/components/pages/exchange/ExchangeInfo";
import { FormExchange } from "@/components/pages/exchange/FormExchange";
import { FC } from "react";
import { useSwapStage } from "../context/swap-stage/useSwapStage";
import { DetailsExchange } from "@/components/pages/exchange/DetailsExchange";
import { ExchangeStateProvider } from "../context/exchange/exchangeStateProvider";

interface IProps {}

const ExchangeProvider: FC<IProps> = () => {
	const { stage } = useSwapStage();

	return (
		<ExchangeStateProvider>
			{stage === "creatingApplication" && (
				<div className="flex gap-10 justify-center">
					<FormExchange />
					<ExchangeInfo
						swapData={{
							confirmation: 4,
							exchangeFee: 0.5,
							networkCommission: "3 ETH",
							processingTime: "2 minutes",
						}}
					/>
				</div>
			)}

			{stage === "waitingDeposit" && <DetailsExchange />}
		</ExchangeStateProvider>
	);
};

export { ExchangeProvider };
