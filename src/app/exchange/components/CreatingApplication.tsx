import { ExchangeInfo } from "@/components/pages/exchange/ExchangeInfo";
import { FormExchange } from "@/components/pages/exchange/FormExchange";

const CreatingApplication = () => {
	return (
		<div className="flex gap-10 justify-center">
			<FormExchange />
			<ExchangeInfo
				swapData={{
					confirmation: 4,
					exchangeFee: 0.5,
					networkCommission: "3 ETH",
					processingTime: "2 minutes",
				}}
			/>
		</div>
	);
};

export { CreatingApplication };
