import { simpleSwapInstance } from "@/api/instance";
import { expandParameters } from "@/utils/expandParameters";

export type GetRangesParams = {
	currency_from: string;
	currency_to: string;
	fixed: boolean;
};
interface ResponseRanges {
	min: number;
	max: number;
}

export type GetRangesConfig = AxiosRequestConfig<GetRangesParams>;
export const getRanges = async ({ params, config }: GetRangesConfig) =>
	simpleSwapInstance.get<ResponseRanges>(
		`/get_ranges?api_key=${process.env.NEXT_PUBLIC_SIMPLE_SWAP_API_KEY}${expandParameters(params)}`,
		config
	);
