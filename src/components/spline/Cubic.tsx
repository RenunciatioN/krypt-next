"use client";

import Spline from "@splinetool/react-spline";
import { FC, Suspense, lazy } from "react";

interface IProps {}

const Cubic: FC<IProps> = () => {
	return (
		<Suspense fallback={<div className="w-full h-full bg-background"></div>}>
			<Spline
				scene="https://draft.spline.design/QIjSjUvKZYbJL1Mi/scene.splinecode"
				// style={{ pointerEvents: "none" }}
			/>
		</Suspense>
	);
};

export { Cubic };
