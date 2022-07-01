import { apiURL } from "../utils/util";
import useSWR from "swr";

export type QueryResult<T> = {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error;
};

export function useQuery<T>(
  path: string,
  body?: BodyInit,
  options?: RequestInit
): QueryResult<T> {
  const { data, error } = useSWR<T>(path, (url) =>
    queryFetcher(url, body, options)
  );

  return {
    data,
    isLoading: !error && !data,
    isError: !!error,
    error,
  };
}

async function queryFetcher<T>(
  url: string,
  body?: unknown,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(apiURL(url), {
    credentials: "include",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}
