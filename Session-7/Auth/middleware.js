import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { jwtVerify, SignJWT } from "jose";


export async function middleware(request) {
  if (request.nextUrl.pathname.includes("dashboard")) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken");
    if (!accessToken) {
      const refreshToken = cookieStore.get("expireRefreshToken");
      
      if(!refreshToken){
        return NextResponse.redirect(new URL("/login", request.url));
      }
      else{
          const refreshToken = cookieStore.get("expireRefreshToken");
          console.log(refreshToken);
          const tmp = await JWTgetData(refreshToken.value);

          const payload = {userName : tmp.userName,password : tmp.password};
          const token = await JWTgenerate(payload);
          const expires = new Date(Date.now() + 60 * 1000);
          cookieStore.set('accessToken', token, {httpOnly: true, expires});
          return NextResponse.next();
      }
    } else {
      return NextResponse.next();
    }
  }
}


const JWTgetData = async (input) => {
    const secretKey = new TextEncoder().encode("harchi");
    const token = await jwtVerify(input, secretKey, {
        algorithms: ["HS256"],      
    });
    return token;
};


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