import { FC } from "react";
import Image from "next/image";

import logo from "@/assets/images/logo.png";

interface IProps {}

const navItems = ["Exchange", "Tutorials", "Wallets"];

const Footer: FC<IProps> = () => {
	return (
		<footer className="w-full    p-4 gradient-bg-footer">
			<div className="max-w-[1200px] mx-auto flex sm:flex-row flex-col justify-between items-center my-4">
				<div className="">
					<Image src={logo} alt="logo" className="w-32" />
				</div>
				<ul className="1 gap-12 items-center justify-end  flex-wrap sm:mt-0 mt-5 w-full md:flex hidden">
					{navItems.map((item, index) => (
						<p key={index} className="text-white text-base text-center mx-2 cursor-pointer">
							{item}
						</p>
					))}
				</ul>
			</div>
		</footer>
	);
};

export { Footer };
