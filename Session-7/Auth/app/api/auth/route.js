import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  const token = await JWTgenerate(payload);
  const cookieStore = await cookies();
  const expires = new Date(Date.now() + 60 * 1000);
  cookieStore.set('accessToken', token, {httpOnly: true, expires});
  return NextResponse.json({ message: "success" });
}

const JWTgenerate = async (payload) => {
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const secretKey = new TextEncoder().encode("harchi");
  const token = await new SignJWT(payload)
    .setProtectedHeader(header)
    .setIssuedAt()
    .setExpirationTime("2 minutes")
    .sign(secretKey);

  return token;
};
