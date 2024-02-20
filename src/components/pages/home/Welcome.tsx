import { Badge } from "@/components/ui/badge";
import { Spotlight } from "@/components/shared/Spotlight";
import { Cubic } from "@/components/spline/Cubic";
import { routes } from "@/shared/constants/routes";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const words = ["benefit", "benefit", "benefit"];

const Welcome = () => {
	return (
		<div className="relative overflow-hidden flex w-full justify-center items-center px-20   ">
			<Spotlight className="-left-36" fill="#FFFFFF" />

			<div className="container flex md:flex-row flex-col gap-10 items-center justify-between md:py-28 py-12 px-4 ">
				<div className="flex flex-1 justify-start items-start flex-col -mt-28 ">
					<div className="flex items-center gap-3 mb-4">
						{words.map((item, index) => (
							<Badge key={index} className="rounded-md text-sm">
								{item}
							</Badge>
						))}
					</div>

					<h1 className="text-8xl font-bold sm:text-7xl   bg-gradient-to-b from-[#f4f4f5] to-[#2c2c2c] text-transparent  bg-clip-text py-1">
						Swap Crypto <br /> across the world
					</h1>
					<p className="mb-4 text-left mt-5  text-[#6a6a73]  font-base md:w-9/12 w-11/12 text-xl">
						Explore the crypto world. Swap cryptocurrencies easily on Krypto.
					</p>

					<div className="flex gap-4">
						<Link href={routes.exchange}>
							<Button className="w-[180px] font-semibold text-md">Go to exchange</Button>
						</Link>
						<Link href={routes.tutorials}>
							<Button className="bg-transparent border border-white/20 text-white/40 hover:bg-transparent hover:text-white/80 hover:border-white/30">
								Tutorials
							</Button>
						</Link>
					</div>
				</div>

				<div className="relative flex flex-col flex-1 items-center justify-start w-full mf:mt-0  ">
					<div className="z-10 w-[600px] h-[600px]">
						<Cubic />
					</div>
				</div>
			</div>
		</div>
	);
};

export { Welcome };
