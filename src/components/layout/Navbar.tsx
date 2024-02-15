import { FC } from "react";
import { cookies, headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";

import { MobileNav } from "./MobileNav";
import { HeaderProrfile } from "./HeaderProrfile";

import logo from "@/assets/images/logo.png";
import { navLinks, routes } from "@/shared/constants/routes";
import { ShimmerBtn } from "../ui/shimmer-btn";

interface INavBarItemProps {
	title: string;
	href: string;
	classprops?: string;
}

const NavBarItem: FC<INavBarItemProps> = ({ title, classprops, href }) => (
	<li className={`mx-4 cursor-pointer hover:text-accent-blue transition-colors ${classprops}`}>
		<Link href={href}>{title}</Link>
	</li>
);

const Navbar = () => {
	const isAuth: boolean = JSON.parse(cookies().get("authorization")?.value ?? "false");

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<nav className="w-full flex justify-between items-center px-4 py-3 container">
				<Link href="/" className="md:flex-[0.5] flex-initial justify-center items-center">
					<Image src={logo} alt="logo" className="w-32 cursor-pointer" />
				</Link>
				<ul className="text-white/80  md:flex hidden list-none flex-row gap-8 items-center flex-initial">
					{navLinks.map((item, index) => (
						<NavBarItem key={index} title={item.name} href={item.path} />
					))}

					{isAuth ? (
						<HeaderProrfile />
					) : (
						<Link href={routes.auth} className="ml-4">
							<ShimmerBtn>Sign in</ShimmerBtn>
						</Link>
					)}
				</ul>

				{/* <MobileNav>
					{navLinks.map((item, index) => (
						<NavBarItem key={String(index)} title={item.name} classprops="my-2 text-lg" href={item.path} />
					))}
				</MobileNav> */}
			</nav>
		</header>
	);
};

export { Navbar };
