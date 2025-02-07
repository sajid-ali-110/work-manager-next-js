import { NextResponse } from "next/server";

export async function POST(request) {
  const response = NextResponse.json({
    message: "logged out!!",
    success: true,
  });

  response.cookies.set("auhtToken", "", {
    expiresIn: new Date(0),
  });

  return response;
}
