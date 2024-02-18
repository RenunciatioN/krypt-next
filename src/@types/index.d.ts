declare module "tailwindcss/lib/util/flattenColorPalette";

interface Request extends Request {
	nextUrl: {
		pathname: string;
	};
}

interface ExchangeLocalStoregeData {
	stage: SwapStage;
	orderId: string;
	data: {
		destinationAddres: string;
		fromValue: number;
		fromCoin: string;
		toValue: number;
		toCoin: string;
	};
}
