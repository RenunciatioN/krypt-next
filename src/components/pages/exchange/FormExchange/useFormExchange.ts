import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export const useFormExchange = () => {
	const form = useForm({
		defaultValues: {
			paymentCoin: "ETH",
			receivedCoin: "USDT",
			paymentAmount: "1",
		},
	});

	const mutatation = useMutation({});

	const onSubmit = form.handleSubmit(async (formData) => {
		console.log(formData);
	});

	return {
		form: form,
		functions: {
			onSubmit,
		},
		isLoading: false,
	};
};
