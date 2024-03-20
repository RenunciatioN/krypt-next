"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { MobileNav } from "./MobileNav";
import logo from "@/assets/images/logo.png";
import { navLinks } from "@/shared/constants/routes";
import { HeaderDropMenu } from "./HeaderProrfile";
import { cn } from "@/lib/utils";

interface Props {
	headerBtn: React.ReactNode;
}

const Navbar: FC<Props> = ({ headerBtn }) => {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<nav className="w-full flex justify-between items-center px-4 py-3 container">
				<Link href="/" className="md:flex-[0.5] flex-initial justify-center items-center">
					<Image src={logo} alt="logo" className="w-32 cursor-pointer" />
				</Link>
				<ul className="  md:flex hidden list-none flex-row gap-8 items-center flex-initial">
					{navLinks.map((item, index) => {
						const isActive = pathname === item.path;

						return (
							<li
								key={index}
								className={cn(
									"mx-4 cursor-pointer text-[#eff5ffb1] hover:text-white  transition-colors ",
									{
										["text-white"]: isActive,
									}
								)}
							>
								<Link href={item.path}>{item.name}</Link>
							</li>
						);
					})}

					<li>
						<HeaderDropMenu />
					</li>

					<li>{headerBtn}</li>
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
