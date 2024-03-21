import { Badge } from "@/components/ui/badge";
import { Spotlight } from "@/components/shared/Spotlight";
import { Cubic } from "@/components/spline/Cubic";
import { routes } from "@/shared/constants/routes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

const words = ["Easily", "Fast", "Safely"];

const Welcome = () => {
	return (
		<div className="relative overflow-hidden flex w-full justify-center items-center px-20   ">
			<Spotlight className="-left-36" fill="#FFFFFF" />

			<div className="container flex md:flex-row flex-col gap-10 items-center justify-between md:py-24 py-12 px-4 ">
				<div className="flex flex-1 justify-start items-start flex-col -mt-20 ">
					<div className="flex items-center gap-3 mb-4">
						{words.map((item, index) => (
							<Badge
								key={index}
								className="px-4 rounded-md text-sm bg-transparent border border-white/20 text-white/80 cursor-default hover:bg-transparent hover:text-white"
							>
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
							<Button className="w-[160px] bg-transparent text-md   text-white/40 hover:bg-zinc-800  hover:text-white/80 hover:border-white/20">
								Tutorials
								<span>
									<svg
										fill="none"
										height="24"
										viewBox="0 0 24 24"
										width="24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.75 8.75L14.25 12L10.75 15.25"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
										></path>
									</svg>
								</span>
							</Button>
						</Link>
					</div>
				</div>

				<div className="relative flex flex-col flex-1 items-center justify-start w-full mf:mt-0  ">
					<div className="z-10 w-[600px] h-[600px]">
						{/* <Suspense fallback={null}><Cubic /></Suspense> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export { Welcome };
