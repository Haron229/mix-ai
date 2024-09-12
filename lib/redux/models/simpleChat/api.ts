import { ChatCompletionResponse, ChatMessage } from "@/lib/types";
import { baseApi } from "../../shared/api";
import { addMessage, inputTextChange, setIsMessageLoading } from "./chat.slice";

export const simpleChatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.query<ChatCompletionResponse, ChatMessage>({
      query: (message: ChatMessage) => ({
        url: "/gpt/sendMessage",
        method: "POST",
        body: message,
      }),
      async onQueryStarted(message, { dispatch, queryFulfilled }) {
        dispatch(addMessage(message));
        dispatch(inputTextChange(""));
        dispatch(setIsMessageLoading(true));
        try {
          const { data } = await queryFulfilled;

          dispatch(
            addMessage({
              role: "assistant",
              content:
                data.choices[0].message.content ??
                "Что-то не так... Пришел пустой ответ.",
              timestamp: data.created,
            })
          );
          dispatch(setIsMessageLoading(false));
        } catch (error) {
          dispatch(
            addMessage({
              role: "assistant",
              content: "Что-то не так... Не могу ответить на Ваш запрос.",
              timestamp: message.timestamp,
            })
          );
          dispatch(setIsMessageLoading(false));
        }
      },
    }),
  }),
  overrideExisting: true,
});
