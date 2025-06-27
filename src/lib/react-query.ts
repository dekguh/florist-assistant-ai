import type { DefaultOptions } from '@tanstack/react-query'

export const reactQueryOptions : DefaultOptions = {
  queries: {
    staleTime: 1000 * 60, // 1 hour
    retry: (failurCount) => failurCount === 3,
    refetchOnWindowFocus: true
  }
}