import { NextRequest, NextResponse } from "next/server";
import { tasksUrl } from "@utils/endpoint";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } },
) {
  const res = await fetch(`${tasksUrl}/${params.id}`);
  const data = await res.json();
  return NextResponse.json({ task: data });
}
