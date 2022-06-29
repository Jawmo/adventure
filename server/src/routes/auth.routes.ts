import { FastifyInstance } from "fastify";
import { signupService } from "../services/signup.service";

export async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/auth/signup", signupService);
}
