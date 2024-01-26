import { FC } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { FormContainer } from "./components/FormContainer/FormContainer";
import { StageProvider } from "@/app/auth/components/context/authStage/stageProvider";
import { UserDataProvider } from "./components/context/userData/UserDataProvider";

export const metadata: Metadata = {
	title: "Authentication",
	description: "Authentication forms built using the components.",
};

interface AuthPageProps {
	searchParams?: { stage?: any };
}

const AuthPage: FC<AuthPageProps> = ({ searchParams }) => {
	const stage = searchParams?.stage ?? "signIn";

	return (
		<div className="lg:p-8 bg-black/30 backdrop-blur-lg max-w-[450px] m-auto rounded-md ">
			<UserDataProvider>
				<StageProvider defaultStage={stage}>
					<FormContainer />
				</StageProvider>
			</UserDataProvider>

			<p className="mt-4 px-14 text-center text-sm text-muted-foreground">
				By clicking continue, you agree to our{" "}
				<Link href="/terms" className="underline underline-offset-4 hover:text-primary">
					Terms of Service
				</Link>{" "}
				and{" "}
				<Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
					Privacy Policy
				</Link>
			</p>
		</div>
	);
};

export default AuthPage;
