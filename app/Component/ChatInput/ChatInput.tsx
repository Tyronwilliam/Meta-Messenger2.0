"use client";
import React, { FormEvent, useState } from "react";

function ChatInput() {
  const [input, setInput] = useState("");
  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    console.log(input);

    const messageToSend = input;
    console.log(messageToSend);
    setInput("");
  };
  return (
    <form
      onSubmit={addMessage}
      className="fixed flex px-10 py-5 space-x-2 bottom-0 border-t border-gray-100 w-full  z-50"
    >
      <input
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Enter message here..."
        type="text"
        name="chat"
        id="chat"
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
