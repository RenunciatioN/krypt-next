import { FC } from "react";
import { redirect } from "next/navigation";
import { getProfile } from "@/utils/getProfile";
import { getUser } from "@workos-inc/nextjs";

interface PrivateLayoutProps {
	children: React.ReactNode;
}

const PrivateLayout: FC<PrivateLayoutProps> = async ({ children }) => {
	// const user = await getProfile().catch((e) => {
	// 	console.log("@getProfile-error", e);
	// 	redirect("/auth");
	// });

	const { user } = await getUser();

	if (!user) redirect("/auth");

	return <>{children}</>;
};

export default PrivateLayout;
