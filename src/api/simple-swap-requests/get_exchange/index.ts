import { simpleSwapInstance } from "@/api/instance";
import { expandParameters } from "@/utils/expandParameters";
import { ResponseExchange } from "../simple-swap";

export type GetExchangeParams = {
	id: string;
};
export type GetExchangeConfig = AxiosRequestConfig<GetExchangeParams>;
export const getExchange = async ({ params, config }: GetExchangeConfig) =>
	simpleSwapInstance.get<ResponseExchange>(
		`/get_exchange?api_key=${process.env.NEXT_PUBLIC_SIMPLE_SWAP_API_KEY}${expandParameters(params)}`,
		config
	);
