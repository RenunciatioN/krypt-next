import { simpleSwapInstance } from "@/api/instance";
import { expandParameters } from "@/utils/expandParameters";

export type GetEstimatedParams = {
	fixed: boolean;
	currency_from: string;
	currency_to: string;
	amount: number;
};
export type GetEstimatedConfig = AxiosRequestConfig<GetEstimatedParams>;
export const getEstimated = async ({ params, config }: GetEstimatedConfig) =>
	simpleSwapInstance.get(
		`/get_estimated?api_key=${process.env.NEXT_PUBLIC_SIMPLE_SWAP_API_KEY}${expandParameters(params)}`,
		config
	);
