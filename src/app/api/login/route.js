import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connectDB } from "@/helper/db";

export async function POST(request) {
  connectDB();
  const { email, password } = await request.json();
  try {
    // get user
    const user = await User.findOne({
      email: email,
    });
    if (user == null) {
      throw new Error("user not found");
    }
    // password check
    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("password not matched");
    }

    // generate token
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );
    // create next response-- cookie
    const response = NextResponse.json({
      message: "Login Success!!",
      success: true,
    });

    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
