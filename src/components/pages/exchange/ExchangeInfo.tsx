import { FC } from "react";
import { Meteors } from "@/components/ui/meteors";

interface IProps {
	swapData: {
		exchangeFee: number;
		processingTime: string;
		networkCommission: string;
		confirmation: number;
	};
}

const ExchangeInfo: FC<IProps> = ({ swapData }) => {
	return (
		<div className="overflow-hidden relative flex-1 bg-black p-8 pt-5 border border-1 border-gray-300/20 rounded-xl">
			<h4 className="text-white text-xl font-bold text-center mb-8">Information on the exchange</h4>

			{/* <Meteors number={20} /> */}

			<div>
				<div className="flex justify-between text-white/70 mb-3">
					<p>Exchange fee</p>
					<p>~ {swapData.exchangeFee}%</p>
				</div>
				<div className="flex justify-between text-white/70 mb-3">
					<p>Confirmation</p>
					<p>{swapData.confirmation}</p>
				</div>
				<div className="flex justify-between text-white/70 mb-3">
					<p>Network Commission</p>
					<p>{swapData.networkCommission}</p>
				</div>
				<div className="flex justify-between text-white/70 mb-3">
					<p>Processing time</p>
					<p>{swapData.processingTime}</p>
				</div>
			</div>
		</div>
	);
};

export { ExchangeInfo };
