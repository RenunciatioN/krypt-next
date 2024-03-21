import Link from "next/link";
import Image from "next/image";

import { MobileNav } from "./MobileNav";
import { NavList } from "./NavList";
import logo from "@/assets/images/logo.png";
import { HeaderBtn } from "./HeaderBtn";
import { getUser } from "@workos-inc/nextjs";

const Header = async () => {
	const { user } = await getUser();

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<nav className="w-full flex justify-between items-center px-4 py-3 container">
				<Link href="/" className="md:flex-[0.5] flex-initial justify-center items-center">
					<Image src={logo} alt="logo" className="w-32 cursor-pointer" />
				</Link>
				<NavList headerBtn={<HeaderBtn />} user={user} />

				{/* <MobileNav>
					{navLinks.map((item, index) => (
						<NavBarItem key={String(index)} title={item.name} classprops="my-2 text-lg" href={item.path} />
					))}
				</MobileNav> */}
			</nav>
		</header>
	);
};

export { Header };
