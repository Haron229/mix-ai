import { prisma } from "@/lib/prisma";
import { GetAllMemoryRecordsResponseSchema } from "@/lib/types";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const resRaw = await prisma.petMemoryRecord.findMany({
      select: {
        id: true,
        title: true,
        emoji: true,
        color: true,
        isPinned: true,
        updatedAt: true,
      },
    });

    if (!resRaw)
      return new NextResponse("No memory records found", { status: 404 });

    const res = GetAllMemoryRecordsResponseSchema.safeParse(resRaw);

    if (res.success) {
      return new Response(JSON.stringify(res.data), {
        status: 200,
      });
    } else {
      return new NextResponse(
        "Faild to get memory records. Error: " + JSON.stringify(res.error),
        { status: 400 }
      );
    }
  } catch (error) {
    return new NextResponse("Faild to get memory records", { status: 500 });
  }
};
