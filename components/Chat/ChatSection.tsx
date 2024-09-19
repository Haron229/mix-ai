"use client";
import { format } from "date-fns";
import { useEffect, useMemo, useRef } from "react";
import { chatSlice } from "@/lib/redux/models/simpleChat/chat.slice";
import { useAppSelector } from "@/lib/redux/shared/store";

import { ScrollShadow } from "@nextui-org/react";
import Message from "@/components/Chat/Message";
import PetBanner from "@/components/Chat/PetBanner";

const ChatSection = () => {
  const scrollViewRef = useRef<HTMLDivElement>(null);

  const messages = useAppSelector(chatSlice.selectors.selectMessages);
  const isInputFocused = useAppSelector(
    chatSlice.selectors.selectIsInputFocused
  );

  const welcomeMessageTimestamp = useMemo(
    () => format(Date.now(), "h:mm aaa"),
    []
  );

  useEffect(() => {
    setTimeout(() => {
      scrollViewRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
      scroll(0, 1000);
    });
  }, [messages, isInputFocused]);

  return (
    <section className="py-[72px]">
      <PetBanner />
      <ScrollShadow
        className={`flex flex-col px-8 mt-32 ${isInputFocused ? "h-52" : "h-auto"}`}
      >
        <Message
          content="Дроу, чем могу помочь бро?"
          author="assistant"
          timestamp={welcomeMessageTimestamp}
        />
        {messages.map((message, index) => (
          <Message
            key={index}
            content={message.content}
            author={message.role}
            timestamp={format(message.timestamp, "h:mm aaa")}
          />
        ))}
        <div ref={scrollViewRef} />
      </ScrollShadow>
    </section>
  );
};

export default ChatSection;
