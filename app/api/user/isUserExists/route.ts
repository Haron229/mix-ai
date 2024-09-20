import { prisma } from "@/lib/prisma";
import { ITelegramUser } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const data: ITelegramUser = await req.json();

    const res = await prisma.user.findFirst({
      where: {
        id: data.id,
      },
    });

    if (!res)
      fetch("http://localhost:3000/api/user/add", {
        method: "POST",
        body: JSON.stringify(data),
      }).then((result) =>
        result.status === 200
          ? new NextResponse(result.body, { status: 200 })
          : new NextResponse(result.body, { status: result.status })
      );

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    return new NextResponse("Something went wrong while checking for user...", {
      status: 500,
    });
  }
};
