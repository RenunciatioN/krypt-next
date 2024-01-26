import { api } from "./api";

export const getProfile = () => api.get(`/get-profile`);
