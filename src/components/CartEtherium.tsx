import { FC } from "react";
import { EthereumIcon } from "./icons/Etherium";

interface IProps {}

const CartEtherium: FC<IProps> = () => {
	return (
		<div className="absolute z-[1] -top-20 p-3 flex justify-end items-start flex-col rounded-xl h-20 sm:w-72 w-full my-5 eth-card white-glassmorphism  mb-8">
			<div className="flex justify-between flex-col w-full h-full">
				<div className="flex justify-between items-start">
					<div className="w-10 h-10 rounded-full border-2  border-white/40 flex justify-center items-center">
						<EthereumIcon />
					</div>
					<p className="text-white/80 font-semibold text-lg mt-1">Ethereum</p>
				</div>
			</div>
		</div>
	);
};

export { CartEtherium };
