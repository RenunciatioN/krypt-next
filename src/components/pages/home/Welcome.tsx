"use client";

import { FormEvent, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";

import { shortenAddress } from "@/utils/shortenAddress";
import { Form } from "./WelcomForm";
import { Button } from "../../ui/button";

const defaultAddress = "0xCF8e569A97C423952DdFf902375C7C76549A6A90";

const companyCommonStyles =
	"min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] text-sm font-light text-white/80";

const Welcome = () => {
	const [address, setAddress] = useState(defaultAddress);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<div className="flex w-full justify-center items-center gradient-bg">
			<div className="flex md:flex-row flex-col gap-24 items-center justify-between md:p-20 py-12 px-4">
				<div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
					<h1 className="text-3xl font-semibold sm:text-5xl  text-white text-gradient py-1">
						Send Crypto <br /> across the world
					</h1>
					<p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
						Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
					</p>

					<Button className="mt-4 bg-accent-blue rounded-lg" variant="outline">
						Connect Wallet
					</Button>

					<div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
						<div className={`rounded-tl-2xl ${companyCommonStyles}`}>Reliability</div>
						<div className={companyCommonStyles}>Security</div>
						<div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>Ethereum</div>
						<div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>Web 3.0</div>
						<div className={companyCommonStyles}>Low Fees</div>
						<div className={`rounded-br-2xl ${companyCommonStyles}`}>Blockchain</div>
					</div>
				</div>

				<div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
					<div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
						<div className="flex justify-between flex-col w-full h-full">
							<div className="flex justify-between items-start">
								<div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
									<SiEthereum fontSize={21} color="#fff" />
								</div>
								<BsInfoCircle fontSize={17} color="#fff" />
							</div>
							<div>
								<p className="text-white font-light text-sm">
									{shortenAddress(address || defaultAddress)}
								</p>
								<p className="text-white font-semibold text-lg mt-1">Ethereum</p>
							</div>
						</div>
					</div>
					<Form handleSubmit={handleSubmit} setAddress={setAddress} />
				</div>
			</div>
		</div>
	);
};

export { Welcome };
