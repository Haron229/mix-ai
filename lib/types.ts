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

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
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

export type ChatCompletionResponse = z.infer<
  typeof ChatCompletionResponseSchema
>;

export interface PetMemoryRecord {
  id: string;
  title: string;
  emoji: string;
  content: string;
  color: string;
  isPinned: boolean;
  updatedAt?: number;
}

export const PetMemoryRecordSchema = z.object({
  id: z.string(),
  title: z.string(),
  emoji: z.string(),
  content: z.string(),
  color: z.string(),
  isPinned: z.boolean(),
  updatedAt: z.number().optional(),
});

export interface SaveMemoryRecordProps {
  id?: string;
  userId: number;
  title: string;
  emoji?: string;
  content: string;
  color?: string;
  isPinned: boolean;
}

export const GetAllMemoryRecordsResponseSchema = z.object({
  records: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      emoji: z.string(),
      color: z.string(),
      isPinned: z.boolean(),
      updatedAt: z.number(),
    })
  ),
});

export type GetAllMemoryRecordsResponse = z.infer<
  typeof GetAllMemoryRecordsResponseSchema
>;

export const GetMemoryRecordResponseSchema =
  GetAllMemoryRecordsResponseSchema.shape.records.element;

export type GetMemoryRecordResponse = z.infer<
  typeof GetMemoryRecordResponseSchema
>;
