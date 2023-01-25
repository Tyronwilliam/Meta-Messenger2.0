"use client";
import React, { useEffect } from "react";
import useSWR from "swr";
import fetcher from "../../../utils/fetchMessages";
import { Message } from "../../../typing";
import MessageComponent from "./MessageComponent";
import { clientPusher } from "../../../pusher";
type Props = {
  initialMessages: Message[];
};
function MessageList({ initialMessages }: Props) {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<Message[]>("/api/getMessages", fetcher);
  useEffect(() => {
    const channel = clientPusher.subscribe("messages");
    channel.bind("new-message", async (data: Message) => {
      // If you are the one sending the message stop
      if (messages?.find((message) => message.id === data.id)) return;
      //   message undefined ? get the messages so
      if (!messages) {
        mutate(fetcher);
      } else {
        // we sync :)
        mutate(fetcher, {
          optimisticData: [data, ...messages!],
          rollbackOnError: true,
        });
      }
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, mutate, clientPusher]);
  return (
    <div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
      {(messages || initialMessages)?.map((message) => {
        return <MessageComponent message={message} key={message.id} />;
      })}
    </div>
  );
}

export default MessageList;
