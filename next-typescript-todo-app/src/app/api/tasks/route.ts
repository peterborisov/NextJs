import { NextRequest, NextResponse } from "next/server";
import { tasksUrl } from "@app/utils/endpoint";
export async function GET(req: NextRequest) {
  const res = await fetch(tasksUrl);
  const data = await res.json();
  return NextResponse.json({ data: data });
}
