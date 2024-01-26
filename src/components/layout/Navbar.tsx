import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/images/logo.png";

import { Button } from "../ui/button";
import { MobileNav } from "./MobileNav";
import { cookies, headers } from "next/headers";
import { HeaderProrfile } from "./HeaderProrfile";
import { isAuth } from "@/utils/isAuth";

interface INavBarItemProps {
	title: string;
	classprops?: string;
}

const navItems = ["Exchange", "Tutorials", "Wallets"];

const NavBarItem: FC<INavBarItemProps> = ({ title, classprops }) => (
	<li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
	return (
		<nav className="w-full flex md:justify-center justify-between items-center p-4">
			<Link href="/" className="md:flex-[0.5] flex-initial justify-center items-center">
				<Image src={logo} alt="logo" className="w-32 cursor-pointer" />
			</Link>
			<ul className="text-white md:flex hidden list-none flex-row gap-12 items-center flex-initial">
				{navItems.map((item, index) => (
					<NavBarItem key={item + index} title={item} />
				))}

				{isAuth() ? (
					<HeaderProrfile />
				) : (
					<Link href="/auth" className="ml-4">
						<Button variant="outline">Login</Button>
					</Link>
				)}
			</ul>

			<MobileNav>
				{navItems.map((item, index) => (
					<NavBarItem key={String(item + index)} title={item} classprops="my-2 text-lg" />
				))}
			</MobileNav>
		</nav>
	);
};

export { Navbar };
