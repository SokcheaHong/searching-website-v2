import type { UseFetchOptions } from '#app';

export function useAPI<T>(
  url: string | (() => string),
  options?: Omit<UseFetchOptions<T>, 'default'> & { default: () => T | Ref<T> }
) {
  delay(5000);
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api,
  });
}
