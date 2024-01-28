"use client";

import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../ui/carousel";
import { currencyReserveData } from "@/data/currencyReserve";

interface IProps {}
interface ISlideItemProps {
	icon: StaticImageData;
	name: string;
	amount: number;
	symbol: string;
}

const СurrencyReserve: FC<IProps> = () => {
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

	return (
		<div className="pt-10 pb-12 gradient-bg-carusel ">
			<h2 className="text-3xl text-center mb-10 text-white/80">Our Reserves for exchange</h2>

			<Carousel className="max-w-[1000px] mx-auto relative">
				<CarouselContent>
					{currencyReserveData.map((coin, index) => (
						<CarouselItem
							key={coin.symbol + index}
							className="basis-1/1 lg:basis-2/5 xl:basis-1/3 flex justify-center"
						>
							<SlideItem {...coin} />
						</CarouselItem>
					))}
				</CarouselContent>
				{!isSmallDevice && (
					<>
						<CarouselPrevious variant="ghost" />
						<CarouselNext variant="ghost" />
					</>
				)}
			</Carousel>
		</div>
	);
};

const SlideItem: FC<ISlideItemProps> = ({ icon, name, amount, symbol }) => {
	return (
		<div className="w-[220px] flex flex-col gap-3 py-5 px-4 items-center white-glassmorphism ">
			<Image src={icon} alt={name} />

			<div className="text-center">
				<div className="mb-1 text-gray-400/60">{name}</div>
				{amount} {symbol}
			</div>
		</div>
	);
};

export { СurrencyReserve };
