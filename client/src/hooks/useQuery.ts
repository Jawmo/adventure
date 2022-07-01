import { apiURL } from "../utils/util";
import useSWR from "swr";
import { BareFetcher, PublicConfiguration } from "swr/dist/types";

export type QueryResult<T> = {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
};

export function useQuery<T>(
  path: string,
  body?: BodyInit | null,
  options?: Partial<PublicConfiguration<T, any, BareFetcher<T>>>
): QueryResult<T> {
  const { data, error } = useSWR<T>([path, body], queryFetcher<T>, options);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

async function queryFetcher<T>(url: string, body?: unknown): Promise<T> {
  const response = await fetch(apiURL(url), {
    body: JSON.stringify(body),
  });

  return response.json();
}
