import { FC } from "react";
import Link from "next/link";
import type { Metadata } from "next";

import { StageProvider } from "@/app/auth/components/context/authStage/stageProvider";
import { FormContainer } from "./components/FormContainer/FormContainer";
import type { Stage } from "./components/context/authStage/stage.context";
import { UserDataProvider } from "./components/context/userData/UserDataProvider";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "Authentication",
	description: "Authentication forms built using the components.",
};

interface AuthPageProps {
	searchParams?: { stage?: Stage };
}

const AuthPage: FC<AuthPageProps> = ({ searchParams }) => {
	const stage = searchParams?.stage ?? "signIn";

	return (
		<div className="gradient-bg absolute top-0 left-0 right-0 bottom-0 flex">
			<Link href="/">
				<Button variant="link">Back</Button>
			</Link>

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
		</div>
	);
};

export default AuthPage;
