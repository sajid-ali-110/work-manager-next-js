import { User } from "@/models/user";
import { NextResponse } from "next/server";

// get single user
export async function GET(request, { params }) {
  const { userId } = params;
  try {
    const user = await User.findById(userId).select("-password");
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({
      message: "failed to get single user",
      success: true,
    });
  }
}

// update user
export async function PUT(request, { params }) {
  const { userId } = params;
  const { name, about, password, profielURL } = await request.json();

  try {
    const user = await User.findById(userId);
    user.name = name;
    user.about = about;
    user.password = password;
    user.profielURL = profielURL;

    const updatedUser = await user.save();
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({
      message: "failed to update user",
      status: false,
    });
  }
}

// delete user
export async function DELETE(request, { params }) {
  const { userId } = params;

  try {
    await User.deleteOne({
      _id: userId,
    });
    return NextResponse.json({
      message: "user deleted successfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "failed to delete user",
      success: false,
    });
  }

  return NextResponse.json({
    message: "testing deleted",
  });
}
