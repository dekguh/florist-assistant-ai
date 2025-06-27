/* eslint-disable @typescript-eslint/no-unused-vars */
import * as z from 'zod'
import type { GetMutationConfig, TErrorReturn, TObjectChat } from '../types/types'
import { axiosApi } from '@/lib/axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { chatHistoryQueryOptions } from './get-chat-history'

export const createChatHistorySchema = z.object({
  message: z.string(),
  name: z.string(),
  userType: z.string()
})

type TParamsCreateSchema = z.infer<typeof createChatHistorySchema>

const postCreateChatHistory = async (value: TParamsCreateSchema) : Promise<TObjectChat | TErrorReturn> => {
  try {
    const response = await axiosApi.post('/history-message/create', value)
    return response.data
  } catch (error) {
    return {
      errorCode: 400,
      message: 'failed'
    }
  }
}

type TChatHistoryMutationOptions = GetMutationConfig<typeof postCreateChatHistory>

export const useCreateChatHistory = (
  config: TChatHistoryMutationOptions = {},
  onSuccessCallback?: (data: TObjectChat | TErrorReturn) => void
) => {
  const queryClient = useQueryClient()
  const { onSuccess, ...rest } = config

  return useMutation({
    ...rest,
    mutationFn: postCreateChatHistory,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: chatHistoryQueryOptions().queryKey
      })
      if (onSuccessCallback) onSuccessCallback(data)
    }
  })
}