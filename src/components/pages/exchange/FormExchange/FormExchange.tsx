"use client";

import { useEffect, useState } from "react";
import { ArrowDownUp } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { InputSpinner } from "@/components/icons/InputSpinner";
import { useFormExchangeQuery } from "./useFormExchangeQuery";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSwapStage } from "@/app/exchange/context/swap-stage/useSwapStage";
import { useExchangeContext } from "@/app/exchange/context/exchange/useExchange";

const defaultState = {
	value: 1,
	coin: "ETH",
};

const defaultCoins = ["BTC", "ETH", "USDT", "USDC", "DAI"];

const FormExchange = () => {
	const params = useSearchParams();
	const swapParams = {
		from: params.get("from"),
		to: params.get("to"),
		amount: params.get("amount"),
	};

	const [sendItem, setSendItem] = useState(defaultState);
	const [reciveItem, setReciveItem] = useState(defaultState);
	const [addres, setAddres] = useState("");

	const exhangeFormQuery = useFormExchangeQuery({ sendItem, reciveItem });
	const { setStage } = useSwapStage();
	const { setExchange } = useExchangeContext();

	const handleSubmit = () => {
		setStage("waitingDeposit");
		setExchange({
			destinationAddres: addres,
			fromCoin: sendItem.coin,
			toCoin: reciveItem.coin,
			fromValue: sendItem.value,
			toValue: reciveItem.value,
		});
	};

	useEffect(() => {
		if (params) {
			setSendItem({
				value: swapParams.amount ? +swapParams.amount : 1,
				coin: swapParams.from ? swapParams.from : "ETH",
			});

			setReciveItem({
				value: 1,
				coin: swapParams.to ? swapParams.to : "ETH",
			});
		}
	}, [params]);

	return (
		<div className="bg-black flex-1  p-8 pt-5 border border-1 border-gray-300/20 rounded-xl">
			<div className="mb-4">
				<div className="mb-4">
					<Label>You sent</Label>
					<div className="flex items-center gap-2 mt-2">
						<Input
							type="text"
							value={sendItem.value}
							onChange={(e) => setSendItem({ ...sendItem, value: +e.target.value })}
						/>

						<div>
							<Select
								onValueChange={(value) => setSendItem({ ...sendItem, coin: value })}
								value={sendItem.coin}
							>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="ETH" />
								</SelectTrigger>
								<SelectContent>
									{defaultCoins.map((coin) => (
										<SelectItem key={coin} value={coin}>
											{coin}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>

				<div className="mb-4">
					<Label>You receive</Label>
					<div className="flex items-center gap-2 mt-2">
						<div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground    disabled:cursor-not-allowed disabled:opacity-50 focus:outline focus:outline-1 outline-white/30">
							{exhangeFormQuery.data &&
								!exhangeFormQuery.query.isFetching &&
								// exhangeFormQuery.data[reciveItem.coin].toFixed(7)
								exhangeFormQuery.data[reciveItem.coin]}

							{exhangeFormQuery.query.isFetching && <InputSpinner fontSize={24} />}
						</div>

						<div>
							<Select
								onValueChange={(value) => setReciveItem({ ...reciveItem, coin: value })}
								value={reciveItem.coin}
							>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="ETH" />
								</SelectTrigger>
								<SelectContent>
									{defaultCoins.map((coin) => (
										<SelectItem key={coin} value={coin}>
											{coin}
										</SelectItem>
									))}
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
						/>
					</div>
				</div>
			</div>

			<div className="flex items-center gap-3">
				<Button className="flex-1 font-bold" disabled={addres === ""} onClick={handleSubmit}>
					Exchange
				</Button>

				<Button
					className="px-3"
					onClick={() => {
						setSendItem({ ...reciveItem });
						setReciveItem({ ...sendItem });
					}}
				>
					<ArrowDownUp />
				</Button>
			</div>
		</div>
	);
};

export { FormExchange };
