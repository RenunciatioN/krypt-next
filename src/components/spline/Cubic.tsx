"use client";

import { FC,  lazy, Suspense } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

interface IProps {}

const Cubic: FC<IProps> = () => {
	

	return (
		<Suspense fallback={<div className="w-[600px] h-[600px]"></div>}>
			<Spline scene="https://draft.spline.design/S-18ArVV92Xx1xPr/scene.splinecode" />
		</Suspense>
	);
};
// const Cubic: FC<IProps> = () => <Spline scene="https://draft.spline.design/KAcvc-tSSABd7CUp/scene.splinecode" />;

export { Cubic };
