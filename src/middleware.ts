import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const requestHeaders = new Headers(request.headers);
	requestHeaders.set("x-pathname", request.nextUrl.pathname);
	requestHeaders.append("cookie", `authorization=${request.cookies.get("access-token")?.value ? "true" : "false"}`);

	return NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});
}
