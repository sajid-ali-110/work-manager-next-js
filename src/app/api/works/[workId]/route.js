import { Work } from "@/models/work";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { workId } = params;

  try {
    const singleWork = await Work.findById(workId);
    return NextResponse.json({
      message: "successfully get sigle work",
      success: true,
      data: singleWork,
    });
  } catch (error) {
    return NextResponse.json({
      message: "failed to get sibgle work",
      success: true,
      data: error.message,
    });
  }
}

// for delete work
export async function DELETE(request, { params }) {
  const { workId } = params;
  try {
    await Work.deleteOne({ _id: workId });
    return NextResponse.json({
      message: "work successfully deleted ",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "failed to delete work",
      success: false,
    });
  }
}

export async function PUT(request, { params }) {
  const { workId } = params;
  const { title, description, startDate, endDate } = await request.json();
  try {
    const work = await Work.findById(workId);
    (work.title = title),
      (work.description = description),
      (work.startDate = startDate),
      (work.endDate = endDate);

    const updatedWork = await work.save();
    return NextResponse.json({
      message: "work successfully updated",
      success: true,
      data: updatedWork,
    });
  } catch (error) {
    return NextResponse.json({
      message: "failed to update work",
      success: false,
    });
  }
}
