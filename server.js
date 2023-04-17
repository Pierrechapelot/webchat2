// This is the nodeJS file that will execute all the logic of our application.

var app = require("express")();
var http = require("http").createServer(app);
const PORT = 8080;
var io = require("socket.io")(http);

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

// We create our first socket listener

io.on("connection", (socket) => {
  /* socket object may be used to send specific messages to the new connected client */

  console.log("new client connected");
});
   