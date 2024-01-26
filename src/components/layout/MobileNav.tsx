"use client";

import { MenuIcon, XSquare } from "lucide-react";
import { FC, useState } from "react";

interface IProps {
	children: React.ReactNode;
}

const MobileNav: FC<IProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex relative">
			{isOpen ? (
				<XSquare
					fontSize={28}
					className="text-white md:hidden cursor-pointer"
					onClick={() => setIsOpen(false)}
				/>
			) : (
				<MenuIcon
					fontSize={28}
					className="text-white md:hidden cursor-pointer"
					onClick={() => setIsOpen(true)}
				/>
			)}
			{isOpen && (
				<ul
					className="z-10 fixed -top-0 -right-2 p-3 w-[40vw]  h-screen shadow-2xl md:hidden list-none
flex flex-col justify-start items-end rounded-none blue-glassmorphism text-white animate-slide-in"
				>
					<li className="text-xl w-full my-2">
						<XSquare onClick={() => setIsOpen(false)} />
					</li>
					{children}
				</ul>
			)}
		</div>
	);
};

export { MobileNav };
