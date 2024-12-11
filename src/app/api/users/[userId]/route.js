import { NextResponse } from "next/server";

export function DELETE(request, { params }) {
  console.log("Params:", params); // Logs params
  const userId = params.userId;
  console.log("User ID:", userId); // Logs userId
  return NextResponse.json({
    message: "testing deleted",
  });
}
