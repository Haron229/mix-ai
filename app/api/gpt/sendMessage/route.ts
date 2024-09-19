import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import {
  ChatCompletionResponseSchema,
  OpenAIChatCompletionsProps,
} from "@/lib/types";

export const POST = async (req: NextRequest) => {
  try {
    const openai = new OpenAI({
      organization: process.env.OPENAI_ORG_ID,
      project: process.env.OPENAI_PROJ_ID,
      apiKey: process.env.OPENAI_API_KEY,
    });

    const data: OpenAIChatCompletionsProps = await req.json(); // validate with zod schema

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [...data.messages],
      //max_tokens
    });

    const result = ChatCompletionResponseSchema.safeParse(completion);

    return result.success
      ? new NextResponse(JSON.stringify(result.data), {
          status: 200,
        })
      : new NextResponse(
          "Something went wrong while validating response. Error: " +
            result.error.format(),
          {
            status: 418,
          }
        );
  } catch (error) {
    return new NextResponse(
      "Something went wrong while sending the message... Error: " + error,
      {
        status: 500,
      }
    );
  }
};
