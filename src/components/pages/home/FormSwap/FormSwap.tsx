"use client";

import { useState } from "react";
import { ArrowDownUp } from "lucide-react";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InputSpinner } from "@/components/icons/InputSpinner";
import { useFormSwapQuery } from "./useFormSwapQuery";
import { useRouter } from "next/navigation";
import { routes } from "@/shared/constants/routes";

const defaultState = {
	value: 1,
	coin: "ETH",
};

const defaultCoins = ["BTC", "ETH", "USDT", "USDC", "DAI"];

const FormSwap = () => {
	const [sendItem, setSendItem] = useState(defaultState);
	const [reciveItem, setReciveItem] = useState(defaultState);

	const exhangeFormQuery = useFormSwapQuery({ sendItem, reciveItem });
	const router = useRouter();

	return (
		<div className="bg-black w-[460px] p-4 pt-5 border border-1 border-gray-300/20 rounded-xl ">
			<p className="text-white/80 mb-4 text-sm">Exchange rate first currency - Second currency</p>
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

				<div>
					<Label>You recive</Label>
					<div className="flex items-center gap-2 mt-2">
						<div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground    disabled:cursor-not-allowed disabled:opacity-50 focus:outline focus:outline-1 outline-white/30">
							{exhangeFormQuery.data &&
								!exhangeFormQuery.query.isFetching &&
								// exhangeFormQuery.data[reciveItem.coin].toFixed(7)
								String(exhangeFormQuery.data[reciveItem.coin]).replace(/0*$/, "")}

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
			</div>

			<div className="flex items-center gap-3">
				<Button
					className="flex-1 font-bold"
					disabled={exhangeFormQuery.query.isLoading}
					onClick={() =>
						router.push(
							`${routes.exchange}?from=${sendItem.coin}&to=${reciveItem.coin}&amount=${sendItem.value}`
						)
					}
				>
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

export { FormSwap };
