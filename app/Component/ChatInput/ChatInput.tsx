"use client";
import React, { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { Message } from "../../../typing";
import useSWR from "swr";
import fetcher from "../../../utils/fetchMessages";
import { unstable_getServerSession } from "next-auth";

type Props = {
  sessions: Awaited<ReturnType<typeof unstable_getServerSession>>;
};
function ChatInput({ sessions }: Props) {
  const [input, setInput] = useState("");
  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher);
  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input || !sessions) return;
    const messageToSend = input;
    setInput("");
    const id = uuid();
    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: sessions?.user?.name || "JohnDoe",
      profilePic: sessions?.user?.image,
      email: sessions?.user?.email || "frenchwebdeveloper@gmail.com",
    };
    const uplodMessageToUpstash = async () => {
      const res = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      }).then((res) => res.json());
      return [res.message, ...messages!];
    };
    await mutate(uplodMessageToUpstash, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });
  };

  return (
    <form
      onSubmit={addMessage}
      className="fixed flex px-10 py-5 space-x-2 bottom-0 border-t border-gray-100 w-full  z-50 bg-white"
    >
      <input
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Enter message here..."
        type="text"
        name="chat"
        id="chat"
        // disabled={!sessions}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        disabled={!input}
        className="disabled:cursor-not-allowed disabled:opacity-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
