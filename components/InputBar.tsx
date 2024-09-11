"use client";
import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, chatSlice, inputTextChange } from "@/lib/redux/chat.slice";

import Image from "next/image";

import attachment from "@/public/file.png";
import send from "@/public/send.png";
import {
  ChatCompletionResponse,
  OpenAIChatCompletionsProps,
} from "@/lib/types";

const InputBar = () => {
  const router = useRouter();
  const inputText = useSelector(chatSlice.selectors.selectInputText);
  const messages = useSelector(chatSlice.selectors.selectMessages);
  const dispatch = useDispatch();

  const handleSendMessageBtnClick = async () => {
    dispatch(addMessage({ role: "user", content: inputText }));
    dispatch(inputTextChange(""));

    console.log(messages);

    const res = await fetch("/api/gpt/sendMessage", {
      method: "POST",
      body: JSON.stringify({
        messages,
      } satisfies OpenAIChatCompletionsProps),
    });

    if (!res.ok)
      dispatch(addMessage({ role: "assistant", content: "Что-то не так..." }));
    else {
      const response: ChatCompletionResponse = await res.json();

      console.log(response);

      if (response.message.content)
        dispatch(
          addMessage({
            role: "assistant",
            content: response.message.content,
          })
        );
    }
  };

  return (
    <Input
      size="lg"
      radius="full"
      placeholder="Введите запрос AI-питомцу..."
      startContent={<Image alt="" src={attachment} />}
      endContent={
        <Image alt="" src={send} onClick={handleSendMessageBtnClick} />
      }
      classNames={{
        inputWrapper:
          "outline outline-1 outline-secondary bg-background group-data-[focus=true]:bg-background",
      }}
      value={inputText}
      onChange={(e) => dispatch(inputTextChange(e.target.value))}
      onFocus={() => {
		
	  }}
      onClick={() => {
        if (!window.location.href.includes("chat")) router.push("/chat"); // TODO: change this logic
      }}
    />
  );
};

export default InputBar;
