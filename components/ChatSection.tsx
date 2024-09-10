"use client";
import { format } from "date-fns";
import { useMemo } from "react";

import { ScrollShadow } from "@nextui-org/react";
import Message from "./Message";
import PetBanner from "./PetBanner";

const ChatSection = () => {
  const welcomeMessageTimestamp = useMemo(() => format(Date.now(), "h:mm aaa"), []);

  return (
    <section className="pt-[72px]">
      <PetBanner />
      <ScrollShadow className="flex flex-col h-[560px] px-8 mt-32">
        <Message
          content="Дроу, чем могу помочь бро?"
          author="bot"
          timestamp={welcomeMessageTimestamp}
        />
      </ScrollShadow>
    </section>
  );
};

export default ChatSection;
