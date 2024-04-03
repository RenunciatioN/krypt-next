import { simpleSwapInstance } from "@/api/instance";
import { ResponseExchange } from "../simple-swap";

export type CreateExchangeParams = {
	currency_from: string;
	currency_to: string;
	amount: number;
	address_to: string;
	fixed: boolean;
};
export type CreateExchangeConfig = AxiosRequestConfig<CreateExchangeParams>;
export const createExchange = async ({ params, config }: CreateExchangeConfig) =>
	simpleSwapInstance.post<ResponseExchange>(`/create_exchange?api_key=${process.env.NEXT_PUBLIC_SIMPLE_SWAP_API_KEY}`, params, config);
