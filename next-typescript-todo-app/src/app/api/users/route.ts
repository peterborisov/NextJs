import { NextResponse } from "next/server";
import { usersUrl } from "@app/utils/endpoint";

export async function GET() {
  const res = await fetch(usersUrl);
  const data = await res.json();
  return NextResponse.json({ data });
}
