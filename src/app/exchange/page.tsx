import { FormExchange } from "@/components/pages/exchange/FormExchange";

const ExchangePage = () => {
	return (
		<div className="pt-20 ">
			<div className="w-[500px] mx-auto ">
				<FormExchange coinList={[]} />
			</div>
		</div>
	);
};

export default ExchangePage;
