import { simpleSwapInstance } from "@/api/instance";
import { expandParameters } from "@/utils/expandParameters";

export type GetCurrencyParams = {
	symbol: string;
	fixed: boolean;
};
export type GetCurrencyConfig = AxiosRequestConfig<GetCurrencyParams>;
export const getCurrency = async ({ params, config }: GetCurrencyConfig) =>
	simpleSwapInstance.get(
		`/get_currency?api_key=${process.env.NEXT_PUBLIC_SIMPLE_SWAP_API_KEY}${expandParameters(params)}`,
		config
	);
