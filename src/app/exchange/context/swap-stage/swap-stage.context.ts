"use client";

import { createContext } from "react";

export type SwapStage = "creatingApplication" | "waitingDeposit" | "waitingConfirmation" | "SendingFunds";

export interface SwapStageContextProps {
	stage: SwapStage;
	setStage: (stage: SwapStage) => void;
}

export const SwapStageContext = createContext<SwapStageContextProps>({
	stage: "creatingApplication",
	setStage: () => {},
});
