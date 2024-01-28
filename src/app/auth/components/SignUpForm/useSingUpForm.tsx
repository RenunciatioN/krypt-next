import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

import { useStage } from "@/app/auth/components/context/authStage/useStage";
import { AuthService } from "@/services/auth.service";
import { useUserData } from "../context/userData/useUserData";

interface SingUpForm {
	login: string;
	password: string;
	passwordConfirmation: string;
}

export const useSignUpForm = () => {
	const { setStage } = useStage();
	const { setUserData } = useUserData();

	const signUpForm = useForm<SingUpForm>({
		// resolver: zodResolver(signUpSchema),
	});
	const singUpMutation = useMutation({
		mutationFn: (formData: SingUpForm) => AuthService.signUp(formData),
		onSuccess: () => {
			toast.success("Your account has been created 👍", {
				cancel: { label: "Close" },
				description: "We are very glad to see you, have fun",
			});
		},
	});

	const goToSignIn = () => setStage("signIn");

	const onSubmit = signUpForm.handleSubmit(async (formData) => {
		console.log("@formdata- Sign up", formData);

		await singUpMutation.mutateAsync(formData);

		setUserData(formData);
		goToSignIn();
	});

	return {
		state: { loading: singUpMutation.isPending },
		form: signUpForm,
		functions: { onSubmit, goToSignIn },
		controll: signUpForm.register,
	};
};
