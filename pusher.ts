import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: `${process.env.PUSER_ID}`,
  key: `${process.env.PUSER_KEY}`,
  secret: `${process.env.PUSHER_SECRET}`,
  cluster: "eu",
  useTLS: true,
});
export const clientPusher = new ClientPusher("886ea144a62aae7cfbcd", {
  cluster: "eu",
  forceTLS: true,
});
