import { apiURL } from "../utils/util";
import { useSWRConfig } from "swr";

type MutateMethod = "post" | "update" | "delete";

export type MutateResult<T, K> = (value: T) => Promise<K>;

export function useMutate<T, K>(
  path: string,
  method?: MutateMethod,
  update?: (cache: K, value: unknown) => K
): MutateResult<T, K> {
  const { mutate } = useSWRConfig();

  return (body: T) => {
    return mutate(path, async (cache: K) => {
      const result = await mutateFetcher(path, method, body);

      if (update !== undefined) {
        return update(cache, result);
      }

      return cache;
    });
  };
}

async function mutateFetcher(
  url: string,
  method: MutateMethod = "post",
  body?: unknown
) {
  const response = await fetch(apiURL(url), {
    method,
    body: JSON.stringify(body),
  });

  return response.json();
}
