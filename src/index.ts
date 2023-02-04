import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";
// import { GraphQLServer } from "@graphql-yoga/node";

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema });

// Pass it into a server to hook into request handlers.

const server = createServer(yoga);

const port = Number(process.env.port) || 4000;
// Start the server and you're done!
server.listen(port, () => {
  console.log(`🚀 server started on port ${port}`);
});
