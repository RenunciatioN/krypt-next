import { useEffect, useState } from "react";

export const useCountdown = (defaultTime = 600) => {
	const [time, setTime] = useState(defaultTime);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prev) => prev - 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [time]);
	return { time };
};
