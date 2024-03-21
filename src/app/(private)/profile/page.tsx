import { FC } from "react";
import { getUser } from "@workos-inc/nextjs";
import { Metadata } from "next";
import { generateTitle } from "@/utils/metadata";

interface IProps {}

export const metadata: Metadata = {
	title: generateTitle("Profile"),
	description: "Profile",
};

const ProfilePage: FC<IProps> = async () => {
	const { user } = await getUser();

	return (
		<div className="text-center text-5xl py-10">
			<h1 className="mb-10">Profile</h1>

			<div>
				<p>Hello {user?.firstName}</p>
				{user?.profilePictureUrl && <img src={user?.profilePictureUrl} alt="" />}
			</div>
		</div>
	);
};

export default ProfilePage;
