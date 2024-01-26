import { FC } from "react";
import { redirect } from "next/navigation";
import { getProfile } from "@/utils/getProfile";

interface PrivateLayoutProps {
	children: React.ReactNode;
}

const PrivateLayout: FC<PrivateLayoutProps> = async ({ children }) => {
	await getProfile().catch(() => {
		redirect("/auth");
	});

	return <>{children}</>;
};

export default PrivateLayout;
