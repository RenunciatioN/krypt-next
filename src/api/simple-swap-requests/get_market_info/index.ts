import { simpleSwapInstance } from "@/api/instance";

export const getMarketInfo = async ({ config }: AxiosRequestConfig) =>
	simpleSwapInstance.get(`/get_market_info?api_key=${process.env.NEXT_PUBLIC_SIMPLE_SWAP_API_KEY}`, config);
