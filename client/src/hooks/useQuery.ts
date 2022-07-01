import useSWR from "swr";

export type QueryResult<T> = {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
};

export function useQuery<T>(
  path: string,
  body?: BodyInit | null
): QueryResult<T> {
  const { data, error } = useSWR<T>([path, body], queryFetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

async function queryFetcher(url: string, body?: unknown) {
  const response = await fetch(url, {
    body: JSON.stringify(body),
  });

  return response.json();
}
