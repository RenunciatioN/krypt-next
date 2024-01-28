"use client";

import { createContext } from "react";

export interface UserData {
	login: string;
	password: string;
}

export interface UserDataContextProps {
	setUserData: (value: UserData) => void;
	userData: UserData;
}

export const UserDataContext = createContext<UserDataContextProps>({
	userData: {
		login: "",
		password: "",
	},
	setUserData: () => {},
});
