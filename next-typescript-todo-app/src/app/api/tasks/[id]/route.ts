import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@app/lib/db";
import { Task } from "@app/lib/models";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    dbConnect();
    const data = await Task.findById(params.id);
    return NextResponse.json({ task: data });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch task!");
  }
}
