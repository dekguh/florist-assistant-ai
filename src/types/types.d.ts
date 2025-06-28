/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UseMutationOptions } from '@tanstack/react-query'

export type TErrorReturn = {
  errorCode: number;
  message: string;
}
  
export type TGetApiFnReturn<T extends (...args: any) => Promise<any>> = Awaited<ReturnType<T>>
  
export type GetQueryConfig<T extends (...args: any) => any> = Omit<ReturnType<T>, 'queryKey' | 'queryFn'>
  
export type GetMutationConfig<T extends (...args: any) => Promise<any>> = UseMutationOptions<
  TGetApiFnReturn<T>, Error, Parameters<T>[0]
>