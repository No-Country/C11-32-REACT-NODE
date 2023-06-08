import { Send } from "@/assets";
import { useMeeting, usePubSub } from "@videosdk.live/react-sdk";
import { formatAMPM, trimName } from "../../../utils/helpers";
import { FormEvent, useEffect, useRef, useState } from "react";

interface MessageProps {
  senderId: string;
  senderName: string;
  message: string;
  timestamp: string;
}

const ChatMessage = ({
  senderId,
  senderName,
  message,
  timestamp,
}: MessageProps) => {
  const { localParticipant } = useMeeting();
  const localParticipantId = localParticipant?.id;
  const localSender = localParticipantId === senderId;

  return (
    <div
      className={`flex ${localSender ? "justify-end" : "justify-start"} mt-2 `}
      style={{
        maxWidth: "100%",
      }}
    >
      <div
        className={`flex ${
          localSender ? "items-end" : "items-start"
        } flex-col rounded-md px-2 py-1 shadow-lg`}
        style={{ backgroundColor: "#6192ca" }}
      >
        <p style={{ color: "#ffffff80" }}>
          {localSender ? "You" : trimName(senderName, 15)}
        </p>
        <div>
          <p className="inline-block whitespace-pre-wrap break-words text-right text-white">
            {message}
          </p>
        </div>
        <div className="mt-1">
          <p className="text-xs italic" style={{ color: "#ffffff80" }}>
            {formatAMPM(new Date(timestamp))}
          </p>
        </div>
      </div>
    </div>
  );
};

const ChatInput = () => {
  const [message, setMessage] = useState<string>("");
  const { publish } = usePubSub("CHAT");

  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const messageText = message.trim();
    publish(messageText, { persist: true });
    setMessage("");
  };

  return (
    <div className=" flex w-full items-center px-4 pb-4 pt-2 shadow-lg">
      <form className="relative w-full" onSubmit={handleSendMessage}>
        <input
          type="text"
          className="w-full rounded-lg px-3 py-4 pr-10 text-base text-white placeholder-white focus:outline-slate-300"
          style={{ backgroundColor: "#FF4C00" }}
          placeholder="Write your message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <span className="absolute inset-y-0 right-0 mr-4 flex text-gray-500">
          <button type="submit">
            <Send fillColor={`${message.length ? "#fff" : "#CBD5E1"}`} />
          </button>
        </span>
      </form>
    </div>
  );
};

const ChatMessages = () => {
  const { messages } = usePubSub("CHAT");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex-1 overflow-hidden overflow-y-auto" ref={listRef}>
      <div className="p-4">
        {messages.map((msg, i) => {
          const { senderId, senderName, message, timestamp } = msg;
          return (
            <ChatMessage
              key={`chat_item_${i}`}
              senderId={senderId}
              senderName={senderName}
              message={message}
              timestamp={timestamp}
            />
          );
        })}
      </div>
    </div>
  );
};

const ChatPanel = () => {
  return (
    <div className="flex h-full flex-col rounded-lg">
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default ChatPanel;
