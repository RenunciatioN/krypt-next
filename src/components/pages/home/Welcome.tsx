import { Badge } from "@/components/ui/badge";
import { FormSwap } from "./FormSwap/FormSwap";
import { Spotlight } from "@/components/shared/Spotlight";
import { EthereumIcon } from "@/components/icons/Etherium";

const words = ["benefit", "benefit", "benefit"];

const Welcome = () => {
	return (
		<div className="relative overflow-hidden flex w-full justify-center items-center px-20 dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2]">
			<Spotlight className="-left-10" fill="white" />

			<div className="container flex md:flex-row flex-col gap-10 items-center justify-between md:py-32 py-12 px-4 ">
				<div className="flex flex-1 justify-start items-start flex-col ">
					<div className="flex items-center gap-3 mb-4">
						{words.map((item, index) => (
							<Badge key={index} className="rounded-md text-sm">
								{item}
							</Badge>
						))}
					</div>

					<h1 className="text-8xl font-bold sm:text-6xl   bg-gradient-to-b from-[#f4f4f5] to-[#2c2c2c] text-transparent  bg-clip-text py-1">
						Swap Crypto <br /> across the world
					</h1>
					<p className="text-left mt-5 mb-2 text-[#6a6a73]  font-base md:w-9/12 w-11/12 text-xl">
						Explore the crypto world. Swap cryptocurrencies easily on Krypto.
					</p>
				</div>

				<div className="relative flex flex-col flex-1 items-center justify-start w-full mf:mt-0 ">
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

					<div className="z-10">
						<FormSwap />
					</div>
				</div>
			</div>
		</div>
	);
};

export { Welcome };
