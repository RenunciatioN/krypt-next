import axios from "axios";
import { API_URL } from "@/shared/constants";
import { COOKIE } from "@/constants/cookies";

const api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
});

api.interceptors.request.use(async (config) => {
	const isSSR = typeof window === "undefined";

	if (isSSR) {
		const { cookies } = await import("next/headers");

		const accessToken = cookies().get(COOKIE.ACCESS_TOKEN)?.value;

		if (accessToken) {
			config.headers.set("cookie", `${COOKIE.ACCESS_TOKEN}=${accessToken}`);
		}
	}

	return config;
});

export { api };
