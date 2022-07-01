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
  const { email, password, extended } = request.body;

  const user = await getUserByEmail(email);

  if (user === null) {
    reply.badRequest("The email or password is invalid.");
    return;
  }

  const isPasswordMatching = await compare(password, user.password);
  if (!isPasswordMatching) {
    return reply.badRequest("The email or password is invalid.");
  }

  await clearSessions(user.id);
  const session = await createSession(user.id, extended);

  if (session === null) {
    return reply.internalServerError();
  }

  setSession(reply, session);
  return session;
}
