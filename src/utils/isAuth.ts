"use server";

import { cookies } from "next/headers";

export const isAuth = () => !!cookies().get("access-token")?.value;
