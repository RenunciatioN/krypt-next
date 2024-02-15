"use server";
import { FC } from "react";


interface IProps {
	id: number;
}

const url = "/cryptocurrency/quotes/historical";
const coinmarket = "https://coinmarketcap.com/api/v1";

// const getData = async (id: number) => {
// 	const response = await fetch(
// 		`${coinmarket}/${url}?CMC_PRO_API_KEY=${process.env.COINMARKETCAP_API_KEY}&id=${id}&time_end=32452353`
// 	);

// 	return response.json();
// };

const Chart: FC<IProps> = async ({ id }) => {
	// const data = await getData(id);

	return (
		

		<div>wadawd</div>
	);
};

export { Chart };
