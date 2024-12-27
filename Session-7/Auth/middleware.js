import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request) {
  if (request.nextUrl.pathname.includes("dashboard")) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken");
    if (!accessToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else {
      return NextResponse.next();
    }
  }
}
