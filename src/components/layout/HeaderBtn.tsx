import { FC } from "react";

import { cookies } from "next/headers";
import { HeaderProrfile } from "./HeaderProrfile";
import Link from "next/link";
import { ShimmerBtn } from "../ui/shimmer-btn";
import { routes } from "@/shared/constants/routes";

interface IProps {}

const HeaderBtn: FC<IProps> = () => {
	const isAuth: boolean = JSON.parse(cookies().get("authorization")?.value ?? "false");

	return isAuth ? (
		<HeaderProrfile />
	) : (
		<Link href={`${routes.auth}`} className="ml-4">
			<ShimmerBtn>Sign in</ShimmerBtn>
		</Link>
	);
};

export { HeaderBtn };
