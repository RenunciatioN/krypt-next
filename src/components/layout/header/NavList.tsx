"use client";
import { FC } from "react";
import { navLinks } from "@/shared/constants/routes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HeaderDropMenu } from "./HeaderDropMenu";
import { cn } from "@/lib/utils";
import { User } from "@workos-inc/node";

interface Props {
	headerBtn: React.ReactNode;
	user: User | null;
}

const NavList: FC<Props> = ({ headerBtn, user }) => {
	const pathname = usePathname();
	return (
		<ul className="  md:flex hidden list-none flex-row gap-8 items-center flex-initial">
			{navLinks.map((item, index) => {
				const isActive = pathname === item.path;

				return (
					<li
						key={index}
						className={cn("mx-4 cursor-pointer text-[#eff5ffb1] hover:text-white  transition-colors ", {
							["text-white"]: isActive,
						})}
					>
						<Link href={item.path}>{item.name}</Link>
					</li>
				);
			})}

			{!!user && (
				<li>
					<HeaderDropMenu />
				</li>
			)}

			<li>{headerBtn}</li>
		</ul>
	);
};

export { NavList };
