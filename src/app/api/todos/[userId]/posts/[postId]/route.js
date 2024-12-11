import { NextResponse } from "next/server";

export function GET(request, { params }) {
  const { userId, postId } = params;

  console.log("userid: ", userId);
  console.log("postid: ", postId);
  return NextResponse.json(params);
}
