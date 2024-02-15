"use client";

import { FC, useMemo, useState } from "react";
import { SwapStage, SwapStageContext } from "./swap-stage.context";

export interface StageProviderProps {
	defaultStage?: SwapStage;
	children: React.ReactNode;
}

export const SwapStageProvider: FC<StageProviderProps> = ({ children, defaultStage = "creatingApplication" }) => {
	const [stage, setStage] = useState<SwapStage>(defaultStage);

	const value = useMemo(() => ({ stage, setStage }), [stage]);

	return <SwapStageContext.Provider value={value}>{children}</SwapStageContext.Provider>;
};
