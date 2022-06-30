import type { Session, User } from "@prisma/client";
import { hash } from "bcrypt";
import type { FastifyReply, FastifyRequest } from "fastify";

import prisma from "../prisma/client";

export function hashPassword(password: string): Promise<string> {
  return hash(password, Number(process.env.SALT_ROUNDS ?? 12));
}

export async function checkUserExists(email: string): Promise<boolean> {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  return user !== null;
}

export function createUser(
  email: string,
  username: string,
  passwordHash: string
): Promise<User> {
  return prisma.user.create({
    data: {
      email,
      username,
      password: passwordHash,
    },
  });
}

export function createSession(userId: string): Promise<Session> {
  return prisma.session.create({
    data: {
      userId,
    },
  });
}

export async function deleteSession(session: Session): Promise<void> {
  await prisma.session.delete({
    where: {
      id: session.id,
    },
  });
}

export async function clearSessions(userId: string): Promise<void> {
  await prisma.session.deleteMany({
    where: { userId },
  });
}
export function getUserByEmail(email: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { email },
  });
}

export function getUserById(id: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { id },
  });
}

export function setSession(reply: FastifyReply, session: Session): void {
  reply.setCookie("__Host-session", session.id, {
    httpOnly: true,
    secure: true,
    signed: true,
    path: "/",
  });
}

export async function getSession(
  request: FastifyRequest
): Promise<Session | null> {
  const signedCookie = request.cookies["__Host-session"];

  if (signedCookie == null) {
    return null;
  }

  const cookie = request.unsignCookie(signedCookie);
  const sessionId = cookie.value;

  if (sessionId == null) {
    return null;
  }

  return prisma.session.findUnique({
    where: {
      id: sessionId,
    },
  });
}
