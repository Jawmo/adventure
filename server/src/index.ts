import cookie from "@fastify/cookie";
import fastify from "fastify";

import { authRoutes } from "./routes/auth.routes";

const app = fastify({ logger: true });
app.register(cookie, {
  secret: process.env.SECRET,
  parseOptions: {},
});

app.register(authRoutes);

// Run the server!
const start = async () => {
  await app.listen({ port: 8080, host: "0.0.0.0" });
};
start();
