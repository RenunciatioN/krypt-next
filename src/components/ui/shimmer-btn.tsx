import { FC } from "react";

interface IProps {
	children: React.ReactNode;
	onclick?: () => void;
}

const ShimmerBtn: FC<IProps> = ({ children, onclick, ...props }) => {
	return (
		<button
			{...props}
			className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 "
		>
			{children}
		</button>
	);
};

export { ShimmerBtn };
