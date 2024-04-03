import { useQuery } from "@tanstack/react-query";
import { getExchange } from "@/api/simple-swap-requests";

export const useWaitingDeposit = (orderId: string | null) => {
	const checkOrderQuery = useQuery({
		queryKey: ["check-order", orderId],
		queryFn: async () => await getExchange({ params: { id: orderId! } }),
		enabled: !!orderId,
	});

	return {
		functions: {},
		query: { checkOrderQuery },
		data: {
			exhange: checkOrderQuery.data?.data,
		},
	};
};
