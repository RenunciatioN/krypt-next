import { Button } from "@/components/ui/button";

import { useAuthButtonsContainer } from "./useAuthButtonsContainer";
import { SpinnerIcon } from "@/components/icons/Spinner";
import { GithubIcon } from "@/components/icons/GutHub";

interface AuthButtonsContainerProps {
	loading: boolean;
}

export const AuthButtonsContainer: React.FC<AuthButtonsContainerProps> = ({ loading }) => {
	useAuthButtonsContainer();

	return (
		<div className="flex flex-col gap-6 mt-1">
			<div className="relative">
				<div className="absolute inset-0 flex items-center ">
					<span className="w-full border-t" />
				</div>
				<div className="relative flex justify-center text-xs uppercase">
					<span className="px-2 text-muted-foreground">Or continue with</span>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<Button variant="outline" type="button" className="bg-black hover:bg-gray-400/10" disabled={loading}>
					{loading ? (
						<SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />
					) : (
						<GithubIcon className="mr-2 h-4 w-4" />
					)}
					GitHub
				</Button>
			</div>
		</div>
	);
};
