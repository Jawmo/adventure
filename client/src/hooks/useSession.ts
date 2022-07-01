import type { Session } from "../@types/Session";
import type { QueryResult } from "./useQuery";
import { useQuery } from "./useQuery";

export function useSession(): QueryResult<Session> {
  return useQuery<Session>("/auth/me");
}
