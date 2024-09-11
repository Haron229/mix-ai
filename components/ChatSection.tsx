"use client";
import { format } from "date-fns";
import { useMemo } from "react";

import { ScrollShadow } from "@nextui-org/react";
import Message from "./Message";
import PetBanner from "./PetBanner";
import { useSelector } from "react-redux";
import { chatSlice } from "@/lib/redux/chat.slice";

const ChatSection = () => {
  const messages = useSelector(chatSlice.selectors.selectMessages);

  const welcomeMessageTimestamp = useMemo(
    () => format(Date.now(), "h:mm aaa"),
    []
  );

  return (
    <section className="pt-[72px]">
      <PetBanner />
      <ScrollShadow className="flex flex-col h-[560px] px-8 mt-32">
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
      </ScrollShadow>
    </section>
  );
};

export default ChatSection;
