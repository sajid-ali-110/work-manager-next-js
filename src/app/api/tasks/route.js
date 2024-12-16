import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description, userId } = await request.json();

    const task = new Task({
      title,
      description,
      userId,
    });

    const createdTask = await task.save();

    return NextResponse.json(
      {
        message: "task created successfully",
        success: true,
        data: createdTask,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return getResponseMessage("failed to create task!", 500, false);
  }
}

export async function GET(request) {
  try {
    const tasks = await Task.find();
    return NextResponse.json({
      message: "successfully fetch tasks",
      success: true,
      data: tasks,
    });
  } catch (error) {
    console.log("failed to retrieved tasks");
    return getResponseMessage("failed to fetch tasks!", 500, false);
  }
}
