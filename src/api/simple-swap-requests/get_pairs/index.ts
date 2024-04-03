import { simpleSwapInstance } from "@/api/instance";
import { expandParameters } from "@/utils/expandParameters";

export type GetPairsParams = {
	symbol: string;
	fixed: boolean;
};
export type GetPairsConfig = AxiosRequestConfig<GetPairsParams>;
export const getPairs = async ({ params, config }: GetPairsConfig) =>
	simpleSwapInstance.get<string[]>(
		`/get_pairs?api_key=${process.env.NEXT_PUBLIC_SIMPLE_SWAP_API_KEY}${expandParameters(params)}`,
		config
	);
