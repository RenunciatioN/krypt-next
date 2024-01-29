import { FormExchange } from "@/components/pages/exchange/FormExchange";

const ExchangePage = () => {
	return (
		<div className=" pt-20 p-8 ">
			<div className=" mx-auto p-16  border border-1 border-white/20 rounded-xl">
				<FormExchange coinList={[]} className="w-[500px]" />
			</div>
		</div>
	);
};

export default ExchangePage;
