"use client";

import { FC } from "react";
import { QRCodeCanvas } from "qrcode.react";

import { useExchangeContext } from "@/app/exchange/context/exchange/useExchange";
import { Button } from "@/components/ui/button";
import { Copy, Loader } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Progress } from "@/components/ui/progress";
import { useCountdown } from "@/hooks/useCountdown";
import { Meteors } from "@/components/ui/meteors";

const defaultLeftTime = 600; //seconds

interface IProps {}

const DetailsExchange: FC<IProps> = () => {
	const { exchange } = useExchangeContext();
	const { copyHandler } = useCopyToClipboard();

	return (
		<div className="relative overflow-hidden bg-black border rounded-md p-8 ">
			<Meteors number={20} />
			<div>
				<div className="flex items-center justify-between gap-10 mb-14">
					<div className="flex items-center gap-3">
						<Loader className="animate-spin transition-transform" />
						<p className="text-white/70 font-semibold text-xl">Waiting for payment</p>
					</div>
					{/* <TimerTimeLeft defaultTime={defaultLeftTime} /> */}
					<Badge
						className="cursor-pointer"
						onClick={() => {
							copyHandler("43534543");
							toast("Order ID copied to clipboard");
						}}
					>
						Order ID - #43534543
					</Badge>
				</div>

				<div className="flex justify-between ">
					<div>
						<p className="mb-4">
							Payment amount: {exchange.fromValue} {exchange.fromCoin}
						</p>
						<div className="flex items-center gap-4 mb-4">
							<div className="py-2 px-4 border border-1 border-white/10 rounded-md">
								0x9a332cc71a44f7e8adde7d2426c1a32a48e50556
							</div>

							<TooltipProvider delayDuration={400}>
								<Tooltip>
									<TooltipTrigger>
										<div
											className="p-2"
											onClick={() => {
												copyHandler("0x9a332cc71a44f7e8adde7d2426c1a32a48e50556");
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

						<p className="mb-4	">
							Transfer the current amount shown above. <br />
							<span className="text-red-600">If the difference is reached the coins will be lost</span>
						</p>
						<p>After payment, you will automatically proceed to the next stage</p>
					</div>
					<div className="p-1 border rounded-md ">
						<QRCodeCanvas
							value={"0x9a332cc71a44f7e8adde7d2426c1a32a48e50556"}
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
	);
};

export { DetailsExchange };

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
