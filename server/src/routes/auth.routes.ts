import { FastifyInstance } from "fastify";
import { loginService } from "../services/login.service";
import { signupService } from "../services/signup.service";

export async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/auth/signup", signupService);
  fastify.post("/auth/login", loginService);
}
