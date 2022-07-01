import { compare } from "bcrypt";
import type { FastifyReply, FastifyRequest } from "fastify";

import {
  clearSessions,
  createSession,
  getUserByEmail,
  setSession,
} from "../utils/auth.utils";

type LoginRequest = FastifyRequest<{
  Body: {
    email: string;
    password: string;
    extended: boolean;
  };
}>;

export async function loginService(
  request: LoginRequest,
  reply: FastifyReply
): Promise<unknown> {
  const { email, password } = request.body;

  const user = await getUserByEmail(email);

  if (user === null) {
    reply.status(400);
    return "The email or password is invalid.";
  }

  const isPasswordMatching = await compare(password, user.password);
  if (!isPasswordMatching) {
    reply.status(400);
    return "The email or password is invalid.";
  }

  await clearSessions(user.id);
  const session = await createSession(user.id, false);

  if (session === null) {
    reply.status(500);
    return "An unknown error occurred.";
  }

  setSession(reply, session);
}
