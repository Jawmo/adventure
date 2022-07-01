import cookie from "@fastify/cookie";
import cors from "@fastify/cors";
import fastify from "fastify";

import { authRoutes } from "./routes/auth.routes";

const app = fastify({ logger: true });

app.register(cookie, {
  secret: process.env.SECRET,
  parseOptions: {},
});

app.register(cors, {
  origin: (origin, resolve) => {
    const { hostname } = new URL(origin);
    console.log(hostname);
    if (hostname === "adventure.test") {
      resolve(null, true);
    }
    resolve(new Error("Forbidden"), false);
  },
});

app.register(authRoutes);

// Run the server!
const start = async () => {
  await app.listen({ port: 8080, host: "0.0.0.0" });
};
start();
