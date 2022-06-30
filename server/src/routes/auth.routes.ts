import type { FastifyInstance } from "fastify";

import { loginService } from "../services/login.service";
import { meService } from "../services/me.service";
import { signupService } from "../services/signup.service";

export async function authRoutes(fastify: FastifyInstance): Promise<void> {
  fastify.post("/auth/signup", signupService);
  fastify.post("/auth/login", loginService);
  fastify.get("/auth/me", meService);
}
