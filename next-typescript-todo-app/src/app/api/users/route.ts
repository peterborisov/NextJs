import dbConnect from "@app/lib/db";
import { User } from "@app/lib/models";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();
    const data = await User.find();

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error in fetching users" + error.message, {
      status: 500,
    });
  }
};
