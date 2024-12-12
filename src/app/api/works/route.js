import { Work } from "@/models/work";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description, startDate, endDate } = await request.json();

    // Validation: Ensure startDate is before endDate
    if (new Date(startDate) >= new Date(endDate)) {
      return NextResponse.json(
        {
          message: "startDate must be earlier than endDate",
          success: false,
        },
        { status: 400 }
      );
    }

    // Create new work object
    const work = new Work({
      title,
      description,
      startDate,
      endDate,
    });

    // Save to database
    const savedWork = await work.save();

    return NextResponse.json(
      {
        message: "Work created successfully",
        success: true,
        data: savedWork,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to create work",
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const works = await Work.find();
    return NextResponse.json({
      message: "successfully fetch works",
      success: true,
      data: works,
    });
  } catch (error) {
    console.log("failed to retrieved works");
    return NextResponse.json({
      message: "failed to get works",
      success: false,
      data: error.message,
    });
  }
}
