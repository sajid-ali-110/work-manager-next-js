import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // console.log("middleware excuted");

  const authToken = request.cookies.get("authToken")?.value;

  if (request.nextUrl.pathname === "/api/login") {
    return;
  }

  const loggedInUserNotAccessPaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";

  if (loggedInUserNotAccessPaths) {
    if (authToken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    if (!authToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  // console.log(authToken);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-task",
    "/show-tasks",
    "/profile/:path*",
    "/api/:path*",
  ],
};
