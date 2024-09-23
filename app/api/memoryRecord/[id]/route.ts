import { prisma } from "@/lib/prisma";
import { PetMemoryRecordSchema } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const resRaw = await prisma.petMemoryRecord.findFirst({
      where: {
        id: params.id,
      },
    });

    if (!resRaw)
      return new NextResponse("No memory record found", { status: 404 });

    const res = PetMemoryRecordSchema.safeParse(resRaw);

    if (res.success) {
      return new NextResponse(JSON.stringify(res.data), {
        status: 200,
      });
    } else {
      return new NextResponse(
        "Faild to get memory record. Error: " + JSON.stringify(res.error),
        { status: 400 }
      );
    }
  } catch (error) {
    return new NextResponse("Faild to get memory record", { status: 500 });
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const res = await prisma.petMemoryRecord.delete({
      where: {
        id: params.id,
      },
    });

    if (!res) return new NextResponse("No memory record found", { status: 404 });
    
    return new NextResponse("Memory record deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("Faild to delete memory record", { status: 500 });
  }
};
