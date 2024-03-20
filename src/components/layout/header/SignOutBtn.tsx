import { LogoutIcon } from "@/components/icons/LogoutIcon";
import { signOut } from "@workos-inc/nextjs";

const SignOutBtn = () => {
	console.log("SignOutBtn");

	return (
		<form
			action={async () => {
				"use server";

				await signOut();
			}}
		>
			<button type="submit" className="flex items-center hover:opacity-70">
				<LogoutIcon className=" h-6 w-6" />
			</button>
		</form>
	);
};

export { SignOutBtn };
