"use client";

import { FC, useMemo, useState } from "react";
import { Stage, StageContext } from "./stage.context";

export interface StageProviderProps {
	defaultStage?: Stage;
	children: React.ReactNode;
}

export const StageProvider: FC<StageProviderProps> = ({ children, defaultStage = "signIn" }) => {
	const [stage, setStage] = useState<Stage>(defaultStage);

	const value = useMemo(() => ({ stage, setStage }), [stage]);

	return <StageContext.Provider value={value}>{children}</StageContext.Provider>;
};
