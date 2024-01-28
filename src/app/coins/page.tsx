import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ICoin } from "@/@types/coins.interface";

interface IResponse {
	data: ICoin[];
}

// const MARKETCAP_LINK = "https://coinmarketcap.com/eu/currencies";

const getData = async () => {
	const res = await fetch(
		`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.COINMARKETCAP_API_KEY}&limit=10`,
		{
			next: { revalidate: 10 },
		}
	);
	const data = (await res.json()) as IResponse;

	return data.data;
};

const CoinsPage = async () => {
	const coins = await getData();

	return (
		<div className="text-center text-5xl">
			<div className="max-w-[1200px] mx-auto mt-10">
				<Table>
					<TableCaption>A list of popular coins.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-1/5">Name</TableHead>
							<TableHead className="text-center">Symbol</TableHead>
							<TableHead className="text-center">Last price</TableHead>
							<TableHead className="text-right">Volume 24h</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{!!coins.length &&
							coins.map((coin) => (
								<TableRow key={coin.id}>
									<TableCell className=" w-[100px] font-medium text-start">{coin.name}</TableCell>
									<TableCell className="text-center">{coin.symbol}</TableCell>
									<TableCell>${coin.quote.USD.price.toFixed(3)}</TableCell>
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
