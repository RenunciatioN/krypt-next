"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { routes } from "@/shared/constants/routes";

interface IProps {
	children: React.ReactNode;
}

const HeaderProvider: FC<IProps> = ({ children }) => {
	const path = usePathname();

	if (path.includes(routes.auth)) return null;

	return children;
};

export { HeaderProvider };
