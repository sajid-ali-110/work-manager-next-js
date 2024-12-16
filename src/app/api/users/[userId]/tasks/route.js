import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;

  try {
    const userTasks = await Task.find({
      userId: userId,
    });
    return NextResponse.json(userTasks);
  } catch (error) {
    return getResponseMessage("user tasks fetch failed", 404, false);
  }
}
