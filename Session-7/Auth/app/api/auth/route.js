import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  const token = await JWTgenerate(payload);
  const cookieStore = await cookies();
  const expires = new Date(Date.now() + 60 * 1000);
  cookieStore.set('accessToken', token, {httpOnly: true, expires});

  const expireRefreshToken = new Date(Date.now() + 60 * 60 * 1000);
   const refreshToken = await JWTrefreshToken(payload);
  cookieStore.set("expireRefreshToken", refreshToken, {
      httpOnly: true,
      expires: expireRefreshToken,
  });
  return NextResponse.json({ message: "success" });
}



export async function DELETE(req){
  const cookieStore = await cookies();

  cookieStore.delete('accessToken');

  cookieStore.delete("expireRefreshToken");

  return NextResponse.redirect(new URL("/login", req.url));
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


const JWTrefreshToken = async (payload) => {
    const header = {
        alg: "HS256",
        typ: "JWT",
    };

    const secretKey = new TextEncoder().encode("harchi");
    const token = await new SignJWT(payload)
        .setProtectedHeader(header)
        .setIssuedAt()
        .setExpirationTime("20 minutes")
        .sign(secretKey);

    return token;
};
