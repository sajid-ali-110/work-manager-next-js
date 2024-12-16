import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { taskId } = params;

  try {
    const singleTask = await Task.findById(taskId);
    return NextResponse.json({
      message: "successfully get sigle task",
      success: true,
      data: singleTask,
    });
  } catch (error) {
    return NextResponse.json({
      message: "failed to get sibgle task",
      success: true,
      data: error.message,
    });
  }
}

// for delete task
export async function DELETE(request, { params }) {
  const { taskId } = params;
  try {
    await Task.deleteOne({ _id: taskId });
    return NextResponse.json({
      message: "task successfully deleted ",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "failed to delete task",
      success: false,
    });
  }
}

export async function PUT(request, { params }) {
  const { taskId } = params;
  const { title, description, userId } = await request.json();
  try {
    const task = await Task.findById(taskId);
    (task.title = title),
      (task.description = description),
      (task.userId = userId);

    const updartedTask = await task.save();
    return NextResponse.json({
      message: "task successfully updated",
      success: true,
      data: updartedTask,
    });
  } catch (error) {
    return NextResponse.json({
      message: "failed to update task",
      success: false,
    });
  }
}
