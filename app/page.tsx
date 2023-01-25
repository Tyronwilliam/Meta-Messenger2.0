import React from "react";
import MessageList from "./Component/Message/MessageList";
import ChatInput from "./Component/ChatInput/ChatInput";
import { Message } from "../typing";
import { unstable_getServerSession } from "next-auth";
import { Providers } from "./providers";

async function HomePage() {
  const data = await fetch(
    `${process.env.VERCEL_URL || "http://localhost:3000"}/api/getMessages`
  ).then((res) => res.json());
  const messages: Message[] = data.messages;
  const session = await unstable_getServerSession();

  return (
    <Providers session={session}>

      <main>
        <MessageList initialMessages={messages} />
        <ChatInput sessions={session} />
      </main>
    </Providers>
  );
}

export default HomePage;
