/* eslint-disable @typescript-eslint/no-unused-vars */
import * as z from 'zod'
import type { GetMutationConfig, TErrorReturn } from '@/types/types'
import { axiosAI } from '@/lib/axios'
import { useMutation } from '@tanstack/react-query'

export const chatAgentMessageSchema = z.object({
  chatId: z.number(),
  prompt: z.string(),
  action: z.string()
})

type TChatMessageParams = z.infer<typeof chatAgentMessageSchema>

const postSendChatAgentMessage = async (value: TChatMessageParams) : Promise<unknown | TErrorReturn> => {
  try {
    const response = await axiosAI.post('/send-question', value)
    return response
  } catch (error) {
    return {
      errorCode: 400,
      message: 'failed to send'
    }
  }
}

type TSendChatAgentMessageMutationOptions = GetMutationConfig<typeof postSendChatAgentMessage>

export const useSendChatAgentMessage = (
  config: TSendChatAgentMessageMutationOptions = {}
) => {
  return useMutation({
    ...config,
    mutationFn: postSendChatAgentMessage,
    mutationKey: ['sendChatAgent'],
  })
}