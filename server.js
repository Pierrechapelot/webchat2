// This is the nodeJS file that will execute all the logic of our application.

var app = require("express")();
var http = require("http").createServer(app);
const PORT = 8080;
var io = require("socket.io")(http);
const STATIC_CHANNELS = ["global_notifications", "global_chat"];

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

// We create our first socket listener

io.on("connection", (socket) => {
  /* socket object may be used to send specific messages to the new connected client */

  console.log("new client connected");
  
  // customs event can be sent from the back end to the front end with this new socket connection
  socket.emit("connection", null);
});
