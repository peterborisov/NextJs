import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@app/lib/db";
import { User } from "@app/lib/models";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } },
) {
  try {
    dbConnect();
    const data = await User.findById(params.id);
    return NextResponse.json({ user: data });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
}
