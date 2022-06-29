import cookie from "@fastify/cookie";
import fastify from "fastify";

const app = fastify({ logger: true });
app.register(cookie, {
  secret: process.env.SECRET,
  parseOptions: {},
});

// Run the server!
const start = async () => {
  await app.listen({ port: 8080, host: "0.0.0.0" });
};
start();
