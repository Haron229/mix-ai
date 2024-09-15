"use client";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { Input } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/shared/store";
import {
  chatSlice,
  inputTextChange,
  setIsInputFocused,
} from "@/lib/redux/models/simpleChat/chat.slice";
import { OpenAIChatCompletionsProps } from "@/lib/types";
import { simpleChatApi } from "@/lib/redux/models/simpleChat/api";
import { Sections, setCurrentSection } from "@/lib/redux/models/app/app.slice";

import Image from "next/image";

import attachment from "@/public/file.png";
import send from "@/public/send.png";

const InputBar = forwardRef((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current?.focus();
      },
    };
  });

  const inputText = useAppSelector(chatSlice.selectors.selectInputText);
  const dispatch = useAppDispatch();

  const [sendMessage] = simpleChatApi.useLazySendMessageQuery();

  const handleSendMessageBtnClick = async () => {
    sendMessage({
      messages: [{ role: "user", content: inputText, timestamp: Date.now() }],
    } satisfies OpenAIChatCompletionsProps);
    inputRef.current?.focus();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSendMessageBtnClick();
      }}
    >
      <Input
        ref={inputRef}
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
          input: "placeholder:font-medium placeholder:text-[13px]",
        }}
        value={inputText}
        enterKeyHint="send"
        onChange={(e) => dispatch(inputTextChange(e.target.value))}
        onFocus={() => {
          dispatch(setCurrentSection(Sections.Chat));
          dispatch(setIsInputFocused(true));
        }}
        onBlur={() => {
          dispatch(setIsInputFocused(false));
        }}
      />
    </form>
  );
});

InputBar.displayName = "InputBar";

export default InputBar;
