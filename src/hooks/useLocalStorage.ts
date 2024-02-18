import { useCallback } from "react";

export const useLocalStorage = () => {
	const setItem = useCallback((key: string, value: string) => {
		window.localStorage.setItem(key, value);
	}, []);

	const getItem = useCallback((key: string) => {
		return window.localStorage.getItem(key);
	}, []);
	const removeItem = useCallback((key: string) => {
		return window.localStorage.removeItem(key);
	}, []);

	return {
		setItem,
		getItem,
		removeItem,
	};
};
