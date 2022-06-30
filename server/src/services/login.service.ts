import { compare } from "bcrypt";
import { FastifyReply, FastifyRequest } from "fastify";
import { createSession, getUser, setSession } from "../utils/auth.utils";

type LoginRequest = FastifyRequest<{
  Body: {
    email: string;
    password: string;
  };
}>;

export async function loginService(request: LoginRequest, reply: FastifyReply) {
  const { email, password } = request.body;

  const user = await getUser(email);

  if (user === null) {
    reply.status(400);
    return "The email or password is invalid.";
  }

  if (!compare(password, user.password)) {
    reply.status(400);
    return "The email or password is invalid.";
  }

  const session = await createSession(user.id);

  if (session === undefined) {
    reply.status(500);
    return "An unknown error occurred.";
  }

  setSession(reply, session);
  return;
}
