"use client";
import { useEffect, useRef } from "react";
import ChatHeader from "@/components/Chat/ChatHeader";
import ChatSection from "@/components/Chat/ChatSection";
import InputBar from "@/components/Chat/InputBar";

import { useAppSelector } from "@/lib/redux/shared/store";
import { chatSlice } from "@/lib/redux/models/simpleChat/chat.slice";
import { appSlice } from "@/lib/redux/models/app/app.slice";

const Chat = () => {
  const inputRef = useRef<HTMLInputElement>();

  const platform = useAppSelector(appSlice.selectors.selectPlatform);
  const isInputFocused = useAppSelector(
    chatSlice.selectors.selectIsInputFocused
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <ChatHeader />
      <ChatSection />
      <section
        className={`fixed w-full p-5 pt-[1px] bg-background z-10 bottom-0 ${isInputFocused && platform === "iOS" ? "bottom-80" : ""}`}
      >
        <InputBar ref={inputRef} />
      </section>
    </>
  );
};

export default Chat;
