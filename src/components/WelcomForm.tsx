"use client";

import { FC, FormEvent } from "react";
import { Loader } from "./Loader";

interface IFormProps {
	handleSubmit: (e: FormEvent) => void;
	setAddress: (state: string) => void;
}

const inputClass =
	"w-full rounded-[5px] bg-gray-200/10  py-2 px-4 mb-2 focus:outline-1 focus:outline focus:outline-white/30";

export const Form: FC<IFormProps> = ({ handleSubmit, setAddress }) => {
	return (
		<div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
			<input
				placeholder="Address To"
				className={inputClass}
				name="addressTo"
				type="text"
				onChange={(e) => setAddress(e.target.value)}
			/>
			<input placeholder="Amount (ETH)" className={inputClass} name="amount" type="number" onChange={() => {}} />
			<input placeholder="Keyword (Gif)" className={inputClass} name="keyword" type="text" onChange={() => {}} />
			<input placeholder="Enter Message" className={inputClass} name="message" type="text" onChange={() => {}} />

			{false ? (
				<Loader />
			) : (
				<button
					type="button"
					onClick={handleSubmit}
					className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer transition-all duration-500"
				>
					Send now
				</button>
			)}
		</div>
	);
};
