import Image from "next/image";
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ICoin } from "@/@types/coins.interface";
import { coinmarketV1 } from "@/shared/constants/api-url";
import { Chart } from "./chart";

interface IResponse {
	data: ICoin[];
}

const getData = async () => {
	const res = await fetch(
		`${coinmarketV1}/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.COINMARKETCAP_API_KEY}&limit=10`,
		{
			next: { revalidate: 1000 },
		}
	);
	const data = (await res.json()) as IResponse;

	return data.data;
};

const url = "/cryptocurrency/quotes/historical";
const coinmarket = "https://coinmarketcap.com/api/v1";

const formatter = new Intl.NumberFormat("eu", { currency: "USD", minimumFractionDigits: 2 });

const CoinsPage = async () => {
	const coins = await getData();

	return (
		<div className="text-center text-5xl">
			<div className="max-w-[1200px] mx-auto mt-10">
				<Table>
					<TableCaption>A list of popular coins.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[78px]"></TableHead>
							<TableHead className="w-1/5">Name</TableHead>
							<TableHead className="text-center">Last price</TableHead>
							<TableHead className="text-center">Monthly price chart</TableHead>
							<TableHead className="text-right">Volume 24h</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{!!coins.length &&
							coins.map((coin) => (
								<TableRow key={coin.id}>
									<TableCell className="">
										<Image
											src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
											alt=""
											width={36}
											height={36}
										/>
									</TableCell>
									<TableCell className=" w-[100px] font-medium text-start">
										<span>{coin.name}</span> <i className="opacity-60 px-1">/</i>{" "}
										<span className="opacity-60">{coin.symbol}</span>
									</TableCell>
									<TableCell>${formatter.format(coin.quote.USD.price)}</TableCell>
									<TableCell className="flex justify-center">
										<div className="h-[64px] w-[220px]">
											<Chart id={coin.id} />
										</div>
									</TableCell>
									<TableCell
										className={`text-right  text-green-600 ${cn({
											["text-red-700"]: coin.quote.USD.percent_change_24h
												.toString()
												.startsWith("-"),
										})}`}
									>
										{coin.quote.USD.percent_change_24h.toFixed(2)}
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
