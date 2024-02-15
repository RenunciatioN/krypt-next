import { FC } from "react";

interface IProps {
	title?: string;
	children?: React.ReactNode;
}

const BackroundDots: FC<IProps> = ({ title, children }) => {
	return (
		<div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			{title && (
				<h2 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
					{title}
				</h2>
			)}

			{children}
		</div>
	);
};

export { BackroundDots };
