"use client";

import { useCallback } from "react";

export const useLocalStorage = () => {
	const setItem = useCallback((key: string, value: string) => {
		localStorage.setItem(key, value);
	}, []);

	const getItem = useCallback((key: string) => {
		return localStorage.getItem(key);
	}, []);
	const removeItem = useCallback((key: string) => {
		return localStorage.removeItem(key);
	}, []);

	return {
		setItem,
		getItem,
		removeItem,
	};
};
