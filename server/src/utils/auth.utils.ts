import type { Session, User } from "@prisma/client";
import { hash } from "bcrypt";
import type { FastifyReply, FastifyRequest } from "fastify";
import moment from "moment";

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

export function createSession(
  userId: string,
  extended: boolean
): Promise<Session> {
  let expiration = moment().add(1, "hour");
  if (extended) {
    expiration = moment().add(30, "days");
  }

  return prisma.session.create({
    data: {
      userId,
      expiresAt: expiration.toDate(),
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
  const sessionId = getSignedCookie(request, "__Host-session");

  if (sessionId == null) {
    return null;
  }

  const session = await prisma.session.findUnique({
    where: {
      id: sessionId,
    },
  });

  if (session == null) {
    return null;
  }

  if (isExpired(session)) {
    await deleteSession(session);
    return null;
  }

  return session;
}

export function getSignedCookie(
  request: FastifyRequest,
  name: string
): string | null {
  const signedCookie = request.cookies[name];

  if (signedCookie == null) {
    return null;
  }

  const cookie = request.unsignCookie(signedCookie);
  return cookie.value;
}

export function isExpired(session: Session): boolean {
  return session.expiresAt < new Date();
}
