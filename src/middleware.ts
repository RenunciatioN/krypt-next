import { NextRequest, NextResponse } from "next/server";
import { authkitMiddleware } from "@workos-inc/nextjs";

export default authkitMiddleware();

export const config = {
	matcher: [
		"/",
		"/dashboard/:path*",
		"/profile/:path*",
		"/manage/:path*",
		"/((?!api|_next/static|_next/image|.*\\.png$).*)",
	],
};
