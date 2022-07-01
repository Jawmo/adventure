import type { QueryResult } from "./useQuery";
import { useQuery } from "./useQuery";

export type Session = {
  id: string;
  email: string;
  username: string;
};

export function useSession(): QueryResult<Session> {
  return useQuery<Session>("/auth/me");
}
