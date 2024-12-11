import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";

connectDB();
export function GET(request) {
  const users = [
    {
      name: "sajid ali",
      phone: "031313938",
      course: "java",
    },
    {
      name: "buqrat wali",
      phone: "031313938",
      course: "python",
    },
    {
      name: "saqlain abbas",
      phone: "031313938",
      course: "nodejs",
    },
  ];
  return NextResponse.json(users);
}

// post api
export function POST(request) {
  const body = request.body;
  console.log(body);
  console.log(request.method);
  console.log(request.cookies);
  return NextResponse.json({
    message: "posting our data",
  });
}

export function DELETE(request) {
  console.log("delete api called");
  return NextResponse.json(
    {
      message: "deleted !!",
      status: true,
    },
    { status: 201, statusText: "changed text" }
  );
}
export function PUT() {}
