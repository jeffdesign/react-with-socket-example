import { useEffect, useState } from "react";
import { EVENT, MSG, socket } from "./Api";

type Running = string;
type ServerStatus = "Idle" | Running;

function App() {
  const [serverStatus, setServerStatus] = useState<ServerStatus>("Idle");
  const [count, setCount] = useState(0);

  useEffect(() => {
    socket.on(MSG.CONNECT, () => {
      setServerStatus(socket.id);
    });
    socket.on(MSG.COUNTER_UPDATED, (countFromServer) => {
      setCount(countFromServer);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {serverStatus === "Idle" ? (
          "Could not connect to socket server"
        ) : (
          <div>
            <div>
              <p>Connected to server on <code>{serverStatus}</code></p>
            </div>
            <div>Count is {count}</div>
            <button onClick={() => socket.emit(EVENT.INCREMENT)}>
              Increment
            </button>
            <button onClick={() => socket.emit(EVENT.DECREMENT)}>
              Decrement
            </button>
            <button onClick={() => socket.emit(EVENT.RESET)} disabled={!count}>
              Reset
            </button>
            <p>Hint: Test incrementing and reload browser.</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
