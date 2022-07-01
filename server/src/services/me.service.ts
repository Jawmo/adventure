import type { FastifyReply, FastifyRequest } from "fastify";

import { getSession, getUserById } from "../utils/auth.utils";

export async function meService(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<unknown> {
  const session = await getSession(request);

  if (session === null) {
    reply.unauthorized();
    return;
  }

  const user = await getUserById(session.userId);

  if (user === null) {
    reply.unauthorized();
    return;
  }

  return {
    ...user,
    password: undefined,
  };
}
