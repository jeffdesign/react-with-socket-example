import { io } from "socket.io-client";

export enum EVENT {
  "INCREMENT" = "increment",
  "DECREMENT" = "decrement",
  "RESET" = "reset",
}

export enum MSG {
  "CONNECT" = "connect",
  "COUNTER_UPDATED" = "counter_updated",
}

export const socket = io("http://localhost:3001", { transports: ["websocket"] });