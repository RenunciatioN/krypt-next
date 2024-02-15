import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ISwapState {
	value: number;
	coin: string;
}

interface IResponse {
	[key: string]: number;
}

export const useFormSwapQuery = ({ sendItem, reciveItem }: { sendItem: ISwapState; reciveItem: ISwapState }) => {
	const exchangeQuery = useQuery({
		queryKey: ["exchange-rate", sendItem.coin, reciveItem.coin, sendItem.value],
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
