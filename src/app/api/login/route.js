import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function POST(request) {
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
    const matched = bycrypt.compareSync(password, user.password);
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
        success: flase,
      },
      {
        status: 500,
      }
    );
  }
}
