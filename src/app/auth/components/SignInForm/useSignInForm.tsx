import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInSchema } from "./constants";
import { AuthService } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";

import { useStage } from "@/app/auth/components/context/authStage/useStage";
import { useUserData } from "../context/userData/useUserData";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface SingUpForm {
	login: string;
	password: string;
}

export const useSignInForm = () => {
	const { setStage } = useStage();
	const { userData } = useUserData();
	const router = useRouter();

	const signInForm = useForm<SingUpForm>({
		// resolver: zodResolver(signInSchema),
		defaultValues: {
			login: userData.login,
			password: userData.password,
		},
	});

	const signInMutate = useMutation({
		mutationKey: ["sign-in"],
		mutationFn: (params: SingUpForm) => AuthService.signIn(params),
		onSuccess() {
			toast.success("Sign in is successful 👍", {
				cancel: { label: "Close" },
				description: "We are very glad to see you, have fun",
			});

			router.replace("/profile");
		},
		onError(error) {
			toast.error("Error", {
				cancel: { label: "Close" },
				description: error.message,
			});
		},
	});

	const onSubmit = signInForm.handleSubmit(async (formData) => {
		signInMutate.mutateAsync(formData);
	});

	const goToSignUp = () => setStage("signUp");

	return { state: { loading: signInMutate.isPending }, form: signInForm, functions: { onSubmit, goToSignUp } };
};
