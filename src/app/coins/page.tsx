import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import axios from "axios";
import { FC } from "react";

interface IResponse {
	data: ICoin[];
}

export interface ICoin {
	id: number;
	name: string;
	symbol: string;
	slug: string;
	quote: Quote;
}

export interface Quote {
	USD: Usd;
}

export interface Usd {
	price: number;
	volume_24h: number;
	volume_change_24h: number;
	percent_change_1h: number;
	percent_change_24h: number;
	percent_change_7d: number;
	percent_change_30d: number;
	percent_change_60d: number;
	percent_change_90d: number;
	market_cap: number;
	market_cap_dominance: number;
	fully_diluted_market_cap: number;
	tvl: any;
	last_updated: string;
}

interface IProps {}

const API_KEY_COINMARKETCAP = "fd184017-3856-41bb-9526-72d215900ca7";
const MARKETCAP_LINK = "https://coinmarketcap.com/eu/currencies";

const getData = async () => {
	const { data } = await axios.get<IResponse>(
		`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_KEY_COINMARKETCAP}&limit=10`
	);

	return data.data;
};

const CoinsPage: FC<IProps> = async () => {
	// const coins = await getData();
	const coins: ICoin[] = [];

	return (
		<div className="text-center text-5xl">
			<div className="max-w-[1200px] mx-auto mt-10">
				<h1 className="text-center mb-10">Popular coins</h1>
				<Table>
					<TableCaption>A list of your recent invoices.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-1/4">Name</TableHead>
							<TableHead className="text-center">Symbol</TableHead>
							<TableHead className="text-center">Price</TableHead>
							<TableHead className="text-right">Volume 24h</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{!!coins.length &&
							coins.map((coin) => (
								<TableRow key={coin.id}>
									<TableCell className=" w-[160px] font-medium text-start">{coin.name}</TableCell>
									<TableCell className="text-center">{coin.symbol}</TableCell>
									<TableCell>${coin.quote.USD.price.toFixed(3)}</TableCell>
									<TableCell
										className={`text-right text-red-700 ${cn({
											["text-green-600"]: Math.sign(+coin.quote.USD.percent_change_24h),
										})}`}
									>
										{coin.quote.USD.percent_change_24h}
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export default CoinsPage;
