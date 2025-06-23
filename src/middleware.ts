import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/authService";
type Role = keyof typeof roleBasedRoutes;
const authRoutes = ["/login", "/register"];
const roleBasedRoutes = {
  user: [/^\/user/, /^\/create-shop/],
  admin: [/^\/user/],
};
export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const user = await getCurrentUser();
  if (!user) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }
  if (user.role && roleBasedRoutes[user.role as Role]) {
    const routes = roleBasedRoutes[user.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
};
export const config = {
  matcher: ["/login", "/create-shop", "/admin", "/admin:page", "/user"],
};
