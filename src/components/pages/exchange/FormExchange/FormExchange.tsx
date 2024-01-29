"use client";

import { FC } from "react";

import { useFormExchange } from "./useFormExchange";

import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useWatch } from "react-hook-form";
import { ArrowLeftRight, MoreHorizontal } from "lucide-react";
import { InputSpinner } from "@/components/icons/InputSpinner";
import { FormSkeleton } from "./FormSkeleton";
import { useDebounce } from "@uidotdev/usehooks";
interface IProps {
	coinList: [];
}
interface IResponse {
	[key: string]: number;
}

const FormExchange: FC<IProps> = ({ coinList }) => {
	const { form, functions, isLoading } = useFormExchange();
	const values = useWatch({
		name: ["paymentCoin", "receivedCoin", "paymentAmount"],
		control: form.control,
	});

	const paymentAmount = useDebounce(values[2], 1000);

	const exchangeData = useQuery({
		queryKey: ["exchange-rate", values[0], values[1], paymentAmount],
		queryFn: async () =>
			(
				await axios.get<IResponse>(
					`https://api.coinconvert.net/convert/${values[0]}/${values[1]}?amount=${values[2]}`
				)
			).data,
		refetchInterval: 20000,
	});

	// if (exchangeRateList.isFetching) return <FormSkeleton />;

	return (
		<Form {...form}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					functions.onSubmit();
				}}
				className="p-6 border border-1 rounded-xl backdrop-blur-xs bg-gray-400/10"
			>
				<div className="flex gap-6 mb-2 items-center">
					<FormField
						control={form.control}
						name="paymentCoin"
						render={({ field }) => (
							<FormItem className="w-full ">
								<FormLabel>From:</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl className="bg-black/50">
										<SelectTrigger>
											<SelectValue placeholder="ETH" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="ETH">ETH</SelectItem>
										<SelectItem value="BTC">BTC</SelectItem>
										<SelectItem value="USDT">USDT</SelectItem>
									</SelectContent>
								</Select>

								<FormMessage />
							</FormItem>
						)}
					/>
					{/* <div className="p-2 bg-black rounded-full translate-y-[14px] cursor-pointer" onClick={() => {}}>
						<ArrowLeftRight size={20} />
					</div> */}
					<FormField
						control={form.control}
						name="receivedCoin"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>To:</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl className="bg-black/50">
										<SelectTrigger>
											<SelectValue placeholder="USDT" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="ETH">ETH</SelectItem>
										<SelectItem value="BTC">BTC</SelectItem>
										<SelectItem value="USDT">USDT</SelectItem>
									</SelectContent>
								</Select>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={form.control}
					name="paymentAmount"
					render={({ field }) => (
						<FormItem className="w-full">
							<Label className="" htmlFor="payment-amount-input">
								You send
							</Label>
							<FormControl>
								<Input
									id="payment-amount-input"
									placeholder="13.2323"
									autoCapitalize="none"
									autoCorrect="off"
									{...field}
									className="bg-black/50"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div id="amount-received" className="mt-2">
					<Label>You receive</Label>
					<div className="flex items-center h-10 w-full mt-2 rounded-md border border-input bg-black/50 px-3 py-2 text-sm ">
						{exchangeData.isLoading ? (
							<InputSpinner fontSize={24} />
						) : (
							exchangeData.data && Number(exchangeData.data[values[1]]).toFixed(3) + "  " + values[1]
						)}
					</div>
				</div>

				<Button
					className="w-full mt-4  font-bold bg-green-600 duration-500 hover:bg-opacity-65 hover:bg-green-600"
					disabled={exchangeData.isLoading}
				>
					Start exchange
				</Button>
			</form>
		</Form>
	);
};

export { FormExchange };
