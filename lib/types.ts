import { z } from "zod";

export interface ITelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  photo_url?: string;
}

export interface PetMemoryRecord {
  id?: string;
  title: string;
  emoji?: string;
  content: string;
  isPinned: boolean;
  updatedAt?: Date; // ???
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface OpenAIChatCompletionsProps {
  messages: ChatMessage[];
}

export const ChatCompletionResponseSchema = z.object({
  id: z.string(),
  choices: z.array(
    z.object({
      index: z.number(),
      message: z.object({
        role: z.string(),
        content: z.string().nullable(),
        refusal: z.string().nullable(),
        //tool_calls
      }),
      logprobs: z.null(),
      finish_reason: z.string(),
    })
  ),
  created: z.number(),
  model: z.string(),
  service_tier: z.string().nullable().optional(),
  system_fingerprint: z.string(),
  object: z.string(),
  usage: z.object({
    prompt_tokens: z.number(),
    completion_tokens: z.number(),
    total_tokens: z.number(),
  }),
});

const choicesSchema = ChatCompletionResponseSchema.pick({ choices: true }).shape
  .choices.element;

export type ChatCompletionResponse = z.infer<typeof choicesSchema>;
