/* eslint-disable @typescript-eslint/no-unused-vars */
import { axiosApi } from '@/lib/axios'
import type { GetQueryConfig, TErrorReturn, TObjectChat } from '../types/types'
import { queryOptions, useQuery } from '@tanstack/react-query'

const getChatHistory = async () : Promise<TObjectChat[] | TErrorReturn> => {
  try {
    const response = await axiosApi.get('/history-message/search')
    return response.data
  } catch (error) {
    return {
      errorCode: 400,
      message: 'failed error'
    }
  }
}

export const chatHistoryQueryOptions = () => {
  return queryOptions({
    queryKey: ['chatHistory'],
    queryFn: getChatHistory
  })
}

type TUseChatHistory = GetQueryConfig<typeof chatHistoryQueryOptions>

export const useChatHistory = (config: TUseChatHistory = {}) => {
  return useQuery({
    ...chatHistoryQueryOptions(),
    ...config
  })
}