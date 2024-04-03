import axios from "axios";

const API_URL = "http://localhost:5000";

const api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
});
export const simpleSwapInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SIMPLE_SWAP_API_URL,
});

// api.interceptors.request.use(async (config) => {
// 	const isSSR = typeof window === "undefined";

// 	if (isSSR) {
// 		const { cookies } = await import("next/headers");

// 		const accessToken = cookies().get(COOKIE.ACCESS_TOKEN)?.value;
// 		const refreshToken = cookies().get(COOKIE.REFRESH_TOKEN)?.value;

// 		if (accessToken && refreshToken) {
// 			config.headers.set(
// 				"cookie",
// 				`${COOKIE.ACCESS_TOKEN}=${accessToken};${COOKIE.REFRESH_TOKEN}=${refreshToken}`
// 			);
// 		}
// 	}

// 	return config;
// });
// api.interceptors.response.use(
// 	async (config) => {
// 		return config;
// 	},
// 	async (error: AxiosError) => {
// 		const originalRequest = error.config;

// 		if (error.response?.status !== 401 && originalRequest) {
// 			try {
// 				const data = await api.get<AxiosResponse>(`${API_URL}/refresh-token`, { withCredentials: true });
// 				console.log("@refresh", data);

// 				return api.request(originalRequest);
// 			} catch (error) {
// 				console.log("@error interceptor", error);
// 			}
// 		}
// 	}
// );

export { api };
