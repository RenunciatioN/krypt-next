"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowDownUp } from "lucide-react";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { InputSpinner } from "@/components/icons/InputSpinner";
import { useFormExchangeQuery } from "./useFormExchangeQuery";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import coinsData from "@/shared/coin-list.json";
import { cn } from "@/lib/utils";
import revertArrowIcon from "@/assets/images/icons/revert-arrow.svg";

//Сделать свой селект , с этим проблемы

export interface Coin {
	symbol: string;
	curency: string;
	simpleSymbol: string;
	network: string;
	icon: string;
}

const FormExchange = () => {
	const [exchange, setExchange] = useState({
		fromCoin: coinsData[0],
		toCoin: coinsData[1],
		amount: 0.1,
	});

	const btnRevertIconRef = useRef<HTMLSpanElement>(null);
	const [addres, setAddres] = useState("");
	const { functions, query, data } = useFormExchangeQuery(exchange);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		functions.createExchangeMutation.mutate({
			address_to: addres,
			currency_from: exchange.fromCoin.simpleSymbol,
			currency_to: exchange.toCoin.simpleSymbol,
			amount: exchange.amount,
			fixed: false,
		});
	};

	const isMinAmountError = data?.exchangeRangesData && exchange.amount < data?.exchangeRangesData?.min;

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-black flex-1  p-8 pt-5 border border-1 border-gray-300/20 rounded-xl"
		>
			<div className="mb-4">
				<div>
					<div className="flex items-center gap-2 mt-2 relative">
						<Label className="left-4 absolute top-1/2 -translate-y-1/2 opacity-80 font-light">
							You sent
						</Label>
						<Input
							type="text"
							value={exchange.amount}
							onChange={(e) => setExchange((prev) => ({ ...prev, amount: Number(e.target.value) }))}
							className="h-14 text-end text-xl"
						/>

						<div className="w-1/4">
							<Select
								onValueChange={(value: Coin) => setExchange((prev) => ({ ...prev, fromCoin: value }))}
							>
								<SelectTrigger className="h-14">
									<SelectValue placeholder={<SelectItemCustom coin={coinsData[0]} />} />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										{coinsData.map((coin, index) => (
											<SelectItem key={index + coin.symbol} value={coin}>
												<SelectItemCustom coin={coin} />
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>

					<div className="h-[16px] text-xs mt-2 ml-2 flex gap-4 text-white/60">
						{data.exchangeRangesData && (
							<>
								<span
									className={cn({
										["text-red-500"]: isMinAmountError,
									})}
								>
									min: {data.exchangeRangesData.min}
								</span>
								<span>max: {data.exchangeRangesData.max}</span>
							</>
						)}
					</div>
				</div>

				<div className="flex justify-end py-1 -mt-[17px]">
					<button
						className="rounded-lg bg-black border border-input "
						onClick={() => {
							setExchange((prev) => ({ ...prev, fromCoin: prev.toCoin, toCoin: prev.fromCoin }));

							btnRevertIconRef.current?.classList.add("animate-spin");

							console.log(btnRevertIconRef.current);

							setTimeout(() => {
								btnRevertIconRef.current?.classList.remove("animate-spin");
							}, 500);
						}}
					>
						<span
							ref={btnRevertIconRef}
							className="block w-8 h-8  bg-center bg-cover"
							style={{ backgroundImage: `url(${revertArrowIcon.src})` }}
						></span>
					</button>
				</div>

				<div className="mb-4">
					<div className="flex items-center gap-2 mt-2 relative">
						<Label className="left-4 absolute top-1/2 -translate-y-1/2 opacity-80 font-light">
							You receive
						</Label>
						<div className="flex items-center justify-end h-14 w-full rounded-md border border-input bg-background px-3 py-2  text-xl ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground    disabled:cursor-not-allowed disabled:opacity-50 focus:outline focus:outline-1 outline-white/30 text-end">
							{query.exchangeRateQuery.isFetched ? (
								Number(data.exchangeRateData).toFixed(3)
							) : (
								<InputSpinner fontSize={24} />
							)}
						</div>

						<div className="w-1/4">
							<Select
								onValueChange={(value: Coin) => setExchange((prev) => ({ ...prev, toCoin: value }))}
							>
								<SelectTrigger className="h-14">
									<SelectValue placeholder={<SelectItemCustom coin={coinsData[1]} />} />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										{coinsData.map((coin, index) => (
											<SelectItem key={index + coin.symbol} value={coin}>
												<SelectItemCustom coin={coin} />
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>

				<div className="mb-4">
					<Label>Destination address</Label>
					<div className="mt-2">
						<Input
							type="text"
							placeholder="Enter your address on the selected network"
							value={addres}
							onChange={(e) => setAddres(e.target.value)}
							className="h-14"
						/>
					</div>
				</div>
			</div>

			<div className="flex items-center gap-3">
				<Button
					type="submit"
					disabled={addres === ""}
					className="w-full flex-1 h-10 px-4 py-2  font-bold  rounded-md bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-70 disabled:hover:bg-primary"
				>
					Exchange
				</Button>
			</div>
		</form>
	);
};

export { FormExchange };

const SelectItemCustom = ({ coin }: { coin: Coin }) => {
	return (
		<div className="flex gap-3 items-center w-full">
			<img src={coin.icon} alt="" />
			<span className="font-semibold">{coin.symbol.toUpperCase()}</span>

			{coin.network.length > 0 && (
				<div className="absolute right-2 top-1/2 translate-y-[-50%] py-[2px] px-1 bg-pink-800/40 rounded-md text-[10px] z-10">
					{coin.network.toUpperCase()}
				</div>
			)}
		</div>
	);
};
