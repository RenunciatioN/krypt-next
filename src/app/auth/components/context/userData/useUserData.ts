import { useContext } from "react";
import { UserDataContext } from "./saveUserData";

export const useUserData = () => useContext(UserDataContext);
