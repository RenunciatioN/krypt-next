"use client";

import { FC, useMemo, useState } from "react";
import { Exchange, ExchangeContext, defaultStateExchange } from "./exchange.context";

export interface ExchangeProviderProps {
	children: React.ReactNode;
}

export const ExchangeStateProvider: FC<ExchangeProviderProps> = ({ children }) => {
	const [exchange, setExchange] = useState<Exchange>(defaultStateExchange);

	const value = useMemo(() => ({ exchange, setExchange }), [exchange]);

	return <ExchangeContext.Provider value={value}>{children}</ExchangeContext.Provider>;
};
