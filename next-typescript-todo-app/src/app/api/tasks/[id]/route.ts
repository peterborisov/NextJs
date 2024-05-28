import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log(params);
  return NextResponse.json({ msg: `Task id : ${params.id}` });
}
