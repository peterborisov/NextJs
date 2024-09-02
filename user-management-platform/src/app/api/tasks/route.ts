import dbConnect from "@app/lib/db";
import { Task } from "@app/lib/models";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();
    const data = await Task.find();

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching Tasks" + error.message, {
      status: 500,
    });
  }
};
