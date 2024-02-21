"use client";

import { FC, useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

import { useExchangeContext } from "@/app/exchange/context/exchange/useExchange";
import { Ban, Copy, Loader } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Progress } from "@/components/ui/progress";
import { useCountdown } from "@/hooks/useCountdown";
import { Meteors } from "@/components/ui/meteors";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useSearchParams } from "next/navigation";
import * as Dialog from "@/components/ui/alert-dialog";
import { useSwapStage } from "../context/swap-stage/useSwapStage";
// const defaultLeftTime = 600; //seconds

const testAddress = "0x9a332cc71a44f7e8adde7d2426c1a32a48e50556";

interface IProps {}

const DetailsExchange: FC<IProps> = () => {
	const [exchangeData, setExchangeData] = useState<ExchangeLocalStoregeData | null>(null);
	const { exchange } = useExchangeContext();
	const { setStage } = useSwapStage();
	const { copyHandler } = useCopyToClipboard();
	const localStorage = useLocalStorage();
	const exchangeDataStorage = localStorage.getItem("exchange");

	const orderId = useSearchParams().get("orderId");

	useEffect(() => {
		if (exchangeDataStorage) {
			const exchangeData: ExchangeLocalStoregeData = JSON.parse(exchangeDataStorage);
			setExchangeData(exchangeData);
		} else {
			setExchangeData({
				orderId: orderId ?? "1",
				stage: "waitingDeposit",
				data: exchange,
			});
		}
	}, [exchangeDataStorage, setExchangeData]);

	const cancelExchangeHandler = () => {
		setExchangeData(null);
		localStorage.removeItem("exchange");
		setStage("creatingApplication");
		toast("Exchange has been canceled", {
			cancel: { label: "Close" },
		});
	};

	return (
		<>
			<div className="relative overflow-hidden max-w-[900px] mx-auto bg-black border rounded-md p-8 ">
				<Meteors number={20} />
				<div className="flex justify-between ">
					<div>
						<div className="flex items-center justify-between gap-10 mb-14">
							<div className="flex items-center gap-3">
								<Loader className="animate-spin transition-transform" />
								<p className="text-white/70 font-semibold text-xl">Waiting for payment</p>
								{/* <TimerTimeLeft defaultTime={defaultLeftTime} /> */}
							</div>
						</div>
						<div>
							<p className="mb-4">
								Payment amount: {exchangeData?.data.fromValue} {exchangeData?.data.fromCoin}
							</p>
							<div className="flex items-center gap-4 py-2 px-4 pr-1 mb-4 border border-1 border-white/10 rounded-md">
								<span> 0x9a332cc71a44f7e8adde7d2426c1a32a48e50556</span>
								<TooltipProvider delayDuration={400}>
									<Tooltip>
										<TooltipTrigger>
											<div
												className="p-2 hover:opacity-60 transition-opacity"
												onClick={() => {
													copyHandler(testAddress);
													toast("Address copied to clipboard");
												}}
											>
												<Copy />
											</div>
										</TooltipTrigger>
										<TooltipContent>
											<p>Copy address</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</div>

							<p className="mb-4 text-sm">
								Transfer the current amount shown above. <br />
								<span className="text-red-600">
									If the difference is reached the coins will be lost
								</span>
							</p>
							<p className="text-sm">After payment, you will automatically proceed to the next stage</p>
						</div>
					</div>

					<div>
						<div className="flex justify-center">
							<Badge
								className="cursor-pointer mb-6"
								onClick={() => {
									copyHandler("43534543");
									toast("Order ID copied to clipboard");
								}}
							>
								Order ID - #{exchangeData?.orderId}
							</Badge>
						</div>
						<div className="p-1 border rounded-md relative z-20">
							<QRCodeCanvas
								value={testAddress}
								size={200}
								bgColor={"#000"}
								fgColor={"#fff"}
								level={"H"}
								includeMargin={true}
								imageSettings={{
									src: "/logo.png",
									x: undefined,
									y: undefined,
									height: 40,
									width: 40,
									excavate: true,
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center mt-4 bg-black border rounded-md max-w-[900px] mx-auto py-4 ">
				<AlertConfirm submitHanlder={cancelExchangeHandler} />
			</div>
		</>
	);
};

export { DetailsExchange };

const AlertConfirm = ({ submitHanlder }: { submitHanlder: () => void }) => (
	<Dialog.AlertDialog>
		<Dialog.AlertDialogTrigger className="w-[180px] flex items-center gap-2 border border-white/10  rounded-md p-2 hover:opacity-80 hover:border-red-700/60">
			<Ban size={18} /> <span>Cancel exchange</span>
		</Dialog.AlertDialogTrigger>

		<Dialog.AlertDialogContent className="max-w-sm">
			<Dialog.AlertDialogHeader>
				<Dialog.AlertDialogTitle className="mb-4">Confirm action</Dialog.AlertDialogTitle>
				<Dialog.AlertDialogDescription>
					<p>It will not be possible to cancel the action</p>
				</Dialog.AlertDialogDescription>
			</Dialog.AlertDialogHeader>
			<Dialog.AlertDialogFooter>
				<Dialog.AlertDialogCancel>Cancel</Dialog.AlertDialogCancel>
				<Dialog.AlertDialogAction className="bg-red-600 text-white hover:bg-red-700" onClick={submitHanlder}>
					Confirm
				</Dialog.AlertDialogAction>
			</Dialog.AlertDialogFooter>
		</Dialog.AlertDialogContent>
	</Dialog.AlertDialog>
);

const TimerTimeLeft: FC<{ defaultTime: number }> = ({ defaultTime }) => {
	const { time } = useCountdown(defaultTime);
	return (
		<div className="relative">
			<p className="absolute -top-8 left-1/2 -translate-x-1/2 text-white/70 font-semibold text-xl text-center mb-1">
				{time}
			</p>
			<Progress value={time} className="w-[300px] h-3 bg-emerald-400" />
		</div>
	);
};
