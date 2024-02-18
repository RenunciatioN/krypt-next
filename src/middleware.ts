import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const requestHeaders = new Headers(request.headers);

	requestHeaders.append(
		"cookie",
		`authorization=${request.cookies.get("access-token")?.value ? "true" : "false"}; x-pathname=${
			request.nextUrl.pathname
		}`
	);

	return NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
