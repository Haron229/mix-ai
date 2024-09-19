import { prisma } from "@/lib/prisma";
import { SaveMemoryRecordProps } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const data: SaveMemoryRecordProps = await req.json(); // validate with zod schema

    if (data.id) {
      const isExisting = await prisma.petMemoryRecord.findFirst({
        where: {
          id: data.id,
        },
      });

      if (isExisting) {
        const res = await prisma.petMemoryRecord.update({
          // try to update only given fields
          where: {
            id: data.id,
          },
          data: {
            title: data.title,
            emoji: data.emoji,
            content: data.content,
            color: data.color,
            isPinned: data.isPinned,
          },
        });

        if (res) {
          return new NextResponse(JSON.stringify(res), {
            status: 200,
          });
        }

        return new NextResponse("Faild to save memory record", { status: 400 });
      } else {
        return new NextResponse("Faild to find given memory record", {
          status: 404,
        });
      }
    }

    const res = await prisma.petMemoryRecord.create({
      data: {
        userId: data.userId,
        title: data.title,
        emoji: data.emoji ?? "",
        content: data.content,
        color: data.color ?? "000000",
        isPinned: data.isPinned,
      },
    });

    if (res) {
      return new NextResponse(JSON.stringify(res), {
        status: 200,
      });
    }

    return new NextResponse("Faild to create new memory record", {
      status: 400,
    });
  } catch (error) {
    return new NextResponse("Something went wrong while saving memory record", {
      status: 500,
    });
  }
};
