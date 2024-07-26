import { NextRequest, NextResponse } from "next/server";
import { usersUrl } from "@utils/endpoint";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } },
) {
  const res = await fetch(`${usersUrl}/${params.id}`);
  const data = await res.json();
  return NextResponse.json({ user: data });
}
