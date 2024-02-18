"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowDownUp } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { InputSpinner } from "@/components/icons/InputSpinner";
import { useFormExchangeQuery } from "./useFormExchangeQuery";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSwapStage } from "@/app/exchange/context/swap-stage/useSwapStage";
import { useExchangeContext } from "@/app/exchange/context/exchange/useExchange";
import * as Dialog from "@/components/ui/alert-dialog";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const defaultState = {
	value: 1,
	coin: "ETH",
};

const defaultCoins = ["BTC", "ETH", "USDT", "USDC", "DAI"];
const orderId = "12345";

const FormExchange = () => {
	const params = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
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
	const localStorage = useLocalStorage();

	const handleSubmit = useCallback(() => {
		const exchangeData = {
			destinationAddres: addres,
			fromCoin: sendItem.coin,
			toCoin: reciveItem.coin,
			fromValue: sendItem.value,
			toValue: reciveItem.value,
		};
	
		setExchange({ ...exchangeData });
		setStage("waitingDeposit");

		localStorage.setItem("exchange", JSON.stringify({ orderId, stage: "waitingDeposit", data: exchangeData }));

		const paramsUrl = new URLSearchParams();
		paramsUrl.set("orderId", orderId);
		router.replace(`${pathname}?${paramsUrl.toString()}`);
	}, [addres, reciveItem, sendItem, setExchange, setStage]);

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
		<>
			<Dialog.AlertDialog>
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
						<Dialog.AlertDialogTrigger
							className="w-full flex-1 h-10 px-4 py-2  font-bold  rounded-md bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-70 disabled:hover:bg-primary"
							disabled={addres === ""}
						>
							{/* <Button className="flex-1 w-full font-bold" disabled={addres === ""}></Button> */}
							Exchange
						</Dialog.AlertDialogTrigger>
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

				<Dialog.AlertDialogContent>
					<Dialog.AlertDialogHeader>
						<Dialog.AlertDialogTitle className="mb-4">Confirm exchange</Dialog.AlertDialogTitle>
						<Dialog.AlertDialogDescription>
							<p>
								You are exchanging {sendItem.value} {sendItem.coin} for {reciveItem.value}{" "}
								{reciveItem.coin}
							</p>
						</Dialog.AlertDialogDescription>
					</Dialog.AlertDialogHeader>
					<Dialog.AlertDialogFooter>
						<Dialog.AlertDialogCancel>Cancel</Dialog.AlertDialogCancel>
						<Dialog.AlertDialogAction onClick={handleSubmit}>Continue</Dialog.AlertDialogAction>
					</Dialog.AlertDialogFooter>
				</Dialog.AlertDialogContent>
			</Dialog.AlertDialog>
		</>
	);
};

export { FormExchange };
