import { FC } from "react";
import { getSignInUrl, getUser } from "@workos-inc/nextjs";

import { ShimmerBtn } from "../../ui/shimmer-btn";
import { SignOutBtn } from "./SignOutBtn";

interface IProps {}

const HeaderBtn: FC<IProps> = async () => {
	const { user } = await getUser();
	const signInUrl = user ? null : await getSignInUrl();

	return user ? (
		<SignOutBtn />
	) : (
		<a className="ml-4" href={signInUrl!!}>
			<ShimmerBtn>Sign in</ShimmerBtn>
		</a>
	);
};

export { HeaderBtn };
