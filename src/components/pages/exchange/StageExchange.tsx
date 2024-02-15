"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";

import { useSwapStage } from "@/app/exchange/context/swap-stage/useSwapStage";

interface IProps {}

const className = "px-4 py-2 border border-white/10 rounded-md min-w-[200px] text-center select-none";
const lineCLassName = "h-[1px] w-[50px] bg-white/40";
const activeStage = "bg-white text-black border-none shadow-md shadow-slate-200";
const activeStageLine = "bg-white";

const StageExchange: FC<IProps> = () => {
	const { stage } = useSwapStage();

	return (
		<div className="flex items-center gap-6 justify-center">
			<div
				className={cn(className, {
					[activeStage]: stage === "creatingApplication",
				})}
			>
				Creating application
			</div>
			<span className={cn(lineCLassName)}></span>
			<div
				className={cn(className, {
					[activeStage]: stage === "waitingDeposit",
				})}
			>
				Waiting deposit
			</div>
			<span className={cn(lineCLassName)}></span>
			<div
				className={cn(className, {
					[activeStage]: stage === "waitingConfirmation",
				})}
			>
				Waiting confirmation
			</div>
			<span className={cn(lineCLassName)}></span>
			<div
				className={cn(className, {
					[activeStage]: stage === "SendingFunds",
				})}
			>
				Sending funds
			</div>
		</div>
	);
};

export { StageExchange };
