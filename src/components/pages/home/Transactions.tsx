import { FC } from "react";

import dummyData from "@/utils/dummyData";
import { shortenAddress } from "@/utils/shortenAddress";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

interface ITransactionsCardProps {
	addressTo: string;
	addressFrom: string;
	timestamp: string;
	message: string;
	amount: string;
}

const TransactionsCard: FC<ITransactionsCardProps> = ({ addressTo, addressFrom, timestamp, message, amount }) => {
	return (
		<div
			className="bg-[#18191850] backdrop-blur-lg m-4 flex flex-1
  w-[500px]
      
    
      flex-col p-3 rounded-md hover:shadow-2xl"
		>
			<div className="flex flex-col items-center w-full mt-3">
				<div className="display-flex justify-start w-full mb-6 p-2">
					<a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
						<p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
					</a>
					<a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
						<p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
					</a>
					<p className="text-white text-base">Amount: {amount} ETH</p>
					{message && (
						<>
							<br />
							<p className="text-white text-base">Message: {message}</p>
						</>
					)}
				</div>

				<div className="border border-1 border-gray-500/30 p-1 px-5 w-max rounded-md  -mt-5 shadow-2xl">
					<p className="text-[#37c7da9f] text-xs font-medium">{timestamp}</p>
				</div>
			</div>
		</div>
	);
};

const Transactions = () => {
	return (
		<div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
			<div className="flex flex-col md:p-12 py-12 px-4">
				<h3 className="text-white text-3xl text-center my-2">Latest Transactions</h3>

				<div className="h-[20rem] rounded-md flex flex-col antialiased bg-whitedark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
					<InfiniteMovingCards direction="left" speed="slow">
						{[...dummyData].reverse().map((transaction, i) => (
							<TransactionsCard key={transaction.id} {...transaction} />
						))}
					</InfiniteMovingCards>
				</div>
			</div>
		</div>
	);
};

export { Transactions };
