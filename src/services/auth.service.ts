import { api } from "@/utils/api";

export const AuthService = {
	async signIn(formData: { login: string; password: string }) {
		try {
			return await api.post(`/login`, formData);
		} catch (error: any) {
			new Error(error.message);
		}
	},
	async signUp(formData: { login: string; password: string }) {
		try {
			return await api.post(`/register`, formData);
		} catch (error: any) {
			new Error(error.message);
		}
	},
};
