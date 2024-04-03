"use client";

import { useEffect } from "react";
import { useSwapStage } from "../context/swap-stage/useSwapStage";
import { DetailsExchange } from "@/app/exchange/components/WaitingDeposit";
import { ExchangeStateProvider } from "../context/exchange/exchangeStageProvider";
import { CreatingApplication } from "../components/CreatingApplication";
import { SwapStage } from "../context/swap-stage/swap-stage.context";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const ExchangeProvider = () => {
	const { stage, setStage } = useSwapStage();

	// const exchangeStorageData = useLocalStorage().getItem("exchange");

	// useEffect(() => {
	// 	if (exchangeStorageData) {
	// 		const exchangeStage: SwapStage = JSON.parse(exchangeStorageData).stage;
	// 		setStage(exchangeStage);
	// 	}
	// }, [exchangeStorageData, setStage]);

	return (
		<>
			<ExchangeStateProvider>
				{stage === "creatingApplication" && <CreatingApplication />}

				{stage === "waitingDeposit" && <DetailsExchange />}
			</ExchangeStateProvider>
		</>
	);
};

export { ExchangeProvider };
