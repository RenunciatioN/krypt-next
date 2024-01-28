import { useForm } from "react-hook-form";

export const useFormExchange = () => {
	const form = useForm();

	return {
		form: form,
	};
};
