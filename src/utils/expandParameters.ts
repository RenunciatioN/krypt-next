export const expandParameters = (params: Record<string, unknown>): string => {
	return (
		"&" +
		Object.entries(params)
			.map(([key, value]) => `${key}=${value}`)
			.join("&")
	);
};
