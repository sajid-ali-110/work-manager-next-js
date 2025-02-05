import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function GET(request) {
  try {
    await connectDB(); // Ensure database connection

    const users = await User.find().select("-password"); // Fetch all users
    return NextResponse.json({
      message: "Users retrieved successfully",
      success: true,
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error.message);
    return NextResponse.json({
      message: "Failed to fetch users",
      success: false,
      error: error.message,
    });
  }
}

export async function POST(request) {
  try {
    await connectDB(); // Ensure database connection

    const { name, email, password, about, profileURL } = await request.json();

    // Create new user object
    const user = new User({
      name,
      email,
      password,
      about,
      profileURL,
    });

    user.password = bcrypt.hashSync(
      user.password,
      parseInt(process.env.BCRYPT_SALT)
    );
    const createdUser = await user.save();
    return NextResponse.json(
      {
        message: "User created successfully",
        success: true,
        data: createdUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error.message);
    return NextResponse.json(
      {
        message: "Failed to create userrrrrrrrr",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request) {
  try {
    console.log("DELETE API called");
    // Placeholder: You can implement user deletion logic here
    return NextResponse.json({
      message: "Delete API not yet implemented",
      success: false,
    });
  } catch (error) {
    console.error("Error in DELETE API:", error.message);
    return NextResponse.json({
      message: "Failed to delete user",
      success: false,
    });
  }
}

export async function PUT(request) {
  try {
    console.log("PUT API called");
    // Placeholder: You can implement user update logic here
    return NextResponse.json({
      message: "PUT API not yet implemented",
      success: false,
    });
  } catch (error) {
    console.error("Error in PUT API:", error.message);
    return NextResponse.json({
      message: "Failed to update user",
      success: false,
    });
  }
}
