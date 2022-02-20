import { createServer } from "http";
import { Server, Socket } from "socket.io";

export enum EVENT {
  "INCREMENT" = "increment",
  "DECREMENT" = "decrement",
  "RESET" = "reset",
}

export enum MSG {
  "CONNECTION" = "connection",
  "COUNTER_UPDATED" = "counter_updated",
}

const httpServer = createServer();
const io = new Server(httpServer);
const initialValue = 0;

let count = initialValue;

io.on(MSG.CONNECTION, (socket: Socket) => {
  emitCount(count)

  socket.on(EVENT.INCREMENT, () => {
    count++
    emitCount(count)
  });

  socket.on(EVENT.DECREMENT, () => {
    count--;
    emitCount(count)
  });

  socket.on(EVENT.RESET, () => {
    count = initialValue;
    emitCount(count)
  });
});

function emitCount(count: number) {
  io.emit(MSG.COUNTER_UPDATED, count);
}

console.log("Server now running on: ", 3001);
httpServer.listen(3001);
