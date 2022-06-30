import { Session } from "@prisma/client";
import { hash } from "bcrypt";
import { FastifyReply, FastifyRequest } from "fastify";
import prisma from "../prisma/client";

export async function hashPassword(password: string) {
  return await hash(password, +(process.env.SALT_ROUNDS ?? 12));
}

export async function checkUserExists(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  return user !== null;
}

export async function createUser(
  email: string,
  username: string,
  passwordHash: string
) {
  const user = await prisma.user.create({
    data: {
      email,
      username,
      password: passwordHash,
    },
  });

  return user;
}

export async function createSession(userId: string) {
  const session = await prisma.session.create({
    data: {
      userId,
    },
  });

  return session;
}

export async function getUser(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  return user;
}

export async function setSession(reply: FastifyReply, session: Session) {
  reply.setCookie("__Host-session", session.id, {
    httpOnly: true,
    secure: true,
    signed: true,
  });
}

export async function getSession(request: FastifyRequest) {
  const sessionId = request.cookies["__Host-session"];
  const session = await prisma.session.findUnique({
    where: {
      id: sessionId,
    },
  });

  return session;
}
