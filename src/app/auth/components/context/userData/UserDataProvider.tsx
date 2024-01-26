"use client";

import { FC, useMemo, useState } from "react";
import { UserData, UserDataContext } from "./saveUserData";

export interface UserDataProviderProps {
	children: React.ReactNode;
}

const defaultState = {
	login: "",
	password: "",
};

export const UserDataProvider: FC<UserDataProviderProps> = ({ children }) => {
	const [userData, setUserData] = useState<UserData>(defaultState);

	const value = useMemo(() => ({ userData, setUserData }), [userData]);

	return <UserDataContext.Provider value={value}>{children}</UserDataContext.Provider>;
};
