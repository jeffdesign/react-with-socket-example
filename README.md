# React with socket.io counter example

Install
```sh
  yarn install
```

Run server and client
```sh
  yarn dev
```

Or run them as separate processes

```sh
  yarn server
  yarn client
```

### Ideas for future iterations
- Server side validation
- Immutable server states
  - Instead persist data from some db
- Contract between server and client
  - Shared message and event types
- Client error handling
  - Network 4xx and 5xx
  - Offline / no connection / bad connection
- Server error handling
  - Handle invalid incoming emit values
