interface MessageProps {
  content: string;
  author: "assistant" | "user";
  timestamp: string;
}

const Message: React.FC<MessageProps> = ({ content, author, timestamp }) => {
  return (
    <div className={`${author === "user" && "self-end"}`}>
      <div
        className={`w-fit p-4 rounded-[15px] text-[12px] font-medium ${author === "assistant" ? "bg-[#2C2C2C] rounded-bl-none" : "bg-[#494697] rounded-br-none"}`}
      >
        {`${content}`}
      </div>
      <span
        className={`text-[10px] font-light ${author === "user" && "float-right"}`}
      >
        {timestamp}
      </span>
    </div>
  );
};

export default Message;
