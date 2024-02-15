"use client";

import { FC } from "react";
import CryptoTransferQR from "qrcode.react";
import { useExchange } from "@/app/exchange/context/exchange/useExchange";

interface IProps {}

const DetailsExchange: FC<IProps> = () => {
	const { exchange } = useExchange();

	console.log(exchange);

	return (
		<div>
			<CryptoTransferQR value="dwadawdawd" />
		</div>
	);
};

export { DetailsExchange };
