import { prisma } from "@/lib/prisma";
import { ITelegramUser } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const data: ITelegramUser = await req.json();

    const res = await prisma.user.create({
      data: {
        id: data.id,
        first_name: data.first_name,
        last_name: data.last_name,
        username: data.username,
        language_code: data.language_code,
        is_premium: data.is_premium,
        photo_url: data.photo_url,
        petMemoryRecords: {
          create: [],
        },
      },
    });

    if (!res) return new NextResponse("User creation failed.", { status: 400 });

    return new NextResponse("User sucsessfuly created!", { status: 200 });
  } catch (error) {
    return new NextResponse("Something went wrong while creating user...", {
      status: 500,
    });
  }
};
