"use client";

import { createContext } from "react";

export type Exchange = {
	id: string;
	destinationAddres: string;
	fromValue: number;
	fromCoin: string;
	toValue: number;
	toCoin: string;
};

export interface ExchangeContextProps {
	exchange: Exchange;
	setExchange: (exchange: Exchange) => void;
}

export const defaultStateExchange = {
	id: "",
	destinationAddres: "",
	fromValue: 0,
	fromCoin: "",
	toValue: 0,
	toCoin: "",
};

export const ExchangeContext = createContext<ExchangeContextProps>({
	exchange: defaultStateExchange,
	setExchange: () => {},
});
