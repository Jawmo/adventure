import { MutateResult, useMutate } from "./useMutate";

export type LoginOptions = {
  email: string;
  password: string;
}

export function useLogin(): MutateResult<LoginOptions, void> {
  return useMutate<LoginOptions, void>("/auth/login");
}
