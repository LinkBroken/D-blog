import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  if (req.method == "GET") {
    const usersInfo = await prisma?.user.findMany();
    if (!usersInfo?.length) {
      return NextResponse.json([]);
    }

    return NextResponse.json(usersInfo);
  }
  return null;
}
