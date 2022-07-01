import type { FastifyReply, FastifyRequest } from "fastify";

import {
  checkUserExists,
  createSession,
  createUser,
  hashPassword,
  setSession,
} from "../utils/auth.utils";

type SignupRequest = FastifyRequest<{
  Body: {
    email: string;
    username: string;
    password: string;
  };
}>;

export async function signupService(
  request: SignupRequest,
  reply: FastifyReply
): Promise<unknown> {
  const { email, username, password } = request.body;

  if (await checkUserExists(email)) {
    reply.status(400);
    return "A user already exists with this email.";
  }

  const passwordHash = await hashPassword(password);
  const user = await createUser(email, username, passwordHash);

  if (user === null) {
    reply.status(500);
    return "An unknown error occurred.";
  }

  const session = await createSession(user.id, false);

  if (session === null) {
    reply.status(500);
    return "An unknown error occurred.";
  }

  setSession(reply, session);
}
