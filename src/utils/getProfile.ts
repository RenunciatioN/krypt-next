import { api } from "../api/instance";

interface User {
	id: number;
	login: string;
	role: string;
}

export const getProfile = () => api.get<User>(`/get-profile`);
