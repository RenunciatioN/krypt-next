import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ISwapState {
	value: number;
	coin: string;
}

interface Props {
	sendItem: ISwapState;
	reciveItem: ISwapState;
	swapParams?: {
		from: string;
		to: string;
		amount: string;
	};
}

interface IResponse {
	[key: string]: number;
}

export const useFormExchangeQuery = ({ sendItem, reciveItem }: Props) => {
	const exchangeQuery = useQuery({
		queryKey: ["exchange-rate", sendItem.coin, reciveItem.coin, sendItem.value, reciveItem.value],
		queryFn: async () => {
			return (
				await axios.get<IResponse>(
					`https://api.coinconvert.net/convert/${sendItem.coin}/${reciveItem.coin}?amount=${sendItem.value}`
				)
			).data;
		},
		refetchInterval: 15000,
	});
	return {
		data: exchangeQuery.data,
		functions: {},
		query: exchangeQuery,
	};
};
