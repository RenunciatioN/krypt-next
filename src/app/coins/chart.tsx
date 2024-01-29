"use client";

import { FC } from "react";
import { AreaChart } from "@mantine/charts";
import { chartData } from "./chartData";

interface IProps {
	id: number;
}

const url = "/cryptocurrency/quotes/historical";

const Chart: FC<IProps> = ({ id }) => {
	// const { data } = useQuery({
	// 	queryKey: ["history-price-coins"],
	// 	queryFn: async () =>
	// 		(
	// 			await axios.get<IRes>(
	// 				`${coinmarket}/${url}?CMC_PRO_API_KEY=${process.env.COINMARKETCAP_API_KEY}&id=${id}&time_end=32452353`
	// 			)
	// 		).data,
	// });

	return (
		<AreaChart
			h={64}
			data={chartData}
			dataKey="coin"
			series={[{ name: "coin", color: "#05eded", label: "coin" }]}
			curveType="bump"
			tickLine="x"
			withTooltip={false}
			withXAxis={false}
			withYAxis={false}
			withDots={false}
			gridAxis="none"
			className="!h-[82px]"

		/>
	);
};

export { Chart };
