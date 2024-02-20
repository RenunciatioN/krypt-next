"use client";

import { FC } from "react";
import Spline from "@splinetool/react-spline";

interface IProps {}

const Tutorials: FC<IProps> = () => {
	return (
		<div className="w-full h-screen">
			<div className="w-[600px] h-[600px] m-auto">
				<Spline scene="https://prod.spline.design/BvjVhWF5OKOKiZ0H/scene.splinecode" />
			</div>
		</div>
	);
};

export { Tutorials };
