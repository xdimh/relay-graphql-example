// const restify = require('restify');
const graphqlHTTP = require("express-graphql");
const MyGraphQLSchema = require("./schema");
const http = require("http");
const cors = require("cors");
const express = require("express");
const WebSocket = require("ws");
// const app = restify.createServer();
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
app.use(express.static("build"));
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true,
  })
);

wss.on("connection", (ws) => {
  //connection is up, let's add a simple simple event
  ws.on("message", (message) => {
    //log the received message and send it back to the client
    console.log("received: %s", message);
    ws.send(`Hello, you sent -> ${message}`);
  });

  //send immediatly a feedback to the incoming connection
  ws.send("Hi there, I am a WebSocket server");
});

// app.get(
//   '/graphql',
//   graphqlHTTP({
//     schema: MyGraphQLSchema,
//     graphiql: true,
//   })
// );

server.listen(4000, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});
