import { FC } from "react";
import { redirect } from "next/navigation";
import { getProfile } from "@/utils/getProfile";
import { UserRole } from "@/shared/constants/user";

interface AdminLayoutProps {
	children: React.ReactNode;
}

const AdminLayout: FC<AdminLayoutProps> = async ({ children }) => {
	const data = await getProfile();

	if (data?.status !== 200) return redirect("/auth");

	if (data.data.role !== UserRole.ADMIN) {
		redirect("/");
	}

	return <>{children}</>;
};

export default AdminLayout;
