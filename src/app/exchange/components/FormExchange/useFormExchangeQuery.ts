"use client";

import { useMutation, useQuery } from "@tanstack/react-query";

import { useExchange } from "../../context/exchange/useExchange";
import { useSwapStage } from "../../context/swap-stage/useSwapStage";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createExchange, getEstimated, getRanges } from "@/api/simple-swap-requests";
import type { CreateExchangeParams } from "@/api/simple-swap-requests";
import { usePathname, useRouter } from "next/navigation";
import type { Coin } from "./FormExchange";

interface Props {
	fromCoin: Coin;
	toCoin: Coin;
	amount: number;
}

export const useFormExchangeQuery = (exchangeParams: Props) => {
	const { setExchange } = useExchange();
	const { setStage } = useSwapStage();
	const localStorage = useLocalStorage();
	const router = useRouter();
	const pathname = usePathname();

	const exchangeRangesQuery = useQuery({
		queryKey: ["exhange-ranges", exchangeParams.fromCoin, exchangeParams.toCoin],
		queryFn: async () =>
			await getRanges({
				params: {
					currency_from: exchangeParams.fromCoin.simpleSymbol,
					currency_to: exchangeParams.toCoin.simpleSymbol,
					fixed: true,
				},
			}),
		// refetchInterval: 15000,
	});

	const www = exchangeRangesQuery.data && exchangeParams.amount >= exchangeRangesQuery?.data?.data.min;

	const exchangeRateQuery = useQuery({
		queryKey: ["exchange-rate", exchangeParams.fromCoin, exchangeParams.toCoin, exchangeParams.amount],
		queryFn: async () =>
			await getEstimated({
				params: {
					currency_from: exchangeParams.fromCoin.simpleSymbol,
					currency_to: exchangeParams.toCoin.simpleSymbol,
					amount: exchangeParams.amount,
					fixed: true,
				},
			}),
		enabled: !!www,
		// refetchInterval: 15000,
	});

	const createExchangeMutation = useMutation({
		mutationKey: ["create_exchange"],
		mutationFn: async (params: CreateExchangeParams) => await createExchange({ params }),
		onSuccess({ data }) {
			setExchange({
				id: data.id,
				destinationAddres: data.address_to,
				fromCoin: data.currency_from,
				toCoin: data.currency_to,
				fromValue: +data.amount_from,
				toValue: +data.amount_to,
			});

			const paramsUrl = new URLSearchParams();
			paramsUrl.set("orderId", data.id);
			router.replace(`${pathname}?${paramsUrl.toString()}`);

			setStage("waitingDeposit");

			localStorage.setItem("exchange", JSON.stringify({ orderId: data.id, stage: "waitingDeposit" }));
		},
		onError(error, params, context) {
			console.log(context);
			console.log(params);
		},
	});

	return {
		functions: { createExchangeMutation },
		query: { exchangeRateQuery, exchangeRangesQuery },
		data: {
			exchangeRateData: exchangeRateQuery.data?.data as string,
			exchangeRangesData: exchangeRangesQuery.data?.data,
		},
	};
};
