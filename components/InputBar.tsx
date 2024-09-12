"use client";
import { useRef } from "react";
import { Input } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/shared/store";
import {
  chatSlice,
  inputTextChange,
  setIsOpen,
} from "@/lib/redux/models/simpleChat/chat.slice";
import { simpleChatApi } from "@/lib/redux/models/simpleChat/api";

import Image from "next/image";

import attachment from "@/public/file.png";
import send from "@/public/send.png";

const InputBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputText = useAppSelector(chatSlice.selectors.selectInputText);
  const dispatch = useAppDispatch();

  const [sendMessage] = simpleChatApi.useLazySendMessageQuery();

  const handleSendMessageBtnClick = async () => {
    sendMessage({ role: "user", content: inputText, timestamp: Date.now() });
    inputRef.current?.focus();
  };

  return (
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
      }}
      value={inputText}
      onChange={(e) => dispatch(inputTextChange(e.target.value))}
      onFocus={() => {
        dispatch(setIsOpen(true));
      }}
    />
  );
};

export default InputBar;
