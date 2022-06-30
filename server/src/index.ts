import type { FastifyRequest } from "fastify";
import fastify from "fastify";

import prisma from "./prisma/client";

const app = fastify({ logger: true });

// Declare a route
app.get("/", async (req, res) => {
  return prisma.user.findMany();
});

type UserRequest = FastifyRequest<{ Params: { id: string } }>;

app.get("/:id", async (req: UserRequest, res) => {
  return prisma.user.findUnique({
    where: { id: Number.parseInt(req.params.id) },
  });
});

// Run the server!
const start = async () => {
  await app.listen(8080, "0.0.0.0");
};
start();
