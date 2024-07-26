import { NextResponse } from "next/server";
import { tasksUrl } from "@utils/endpoint";

export async function GET() {
  const res = await fetch(tasksUrl);
  const data = await res.json();
  return NextResponse.json({ data });
}
