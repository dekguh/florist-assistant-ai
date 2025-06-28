/* eslint-disable @typescript-eslint/no-explicit-any */
import Textfield from '@/components/ui/textfield/textfield'
import ChatHeader from './chat-header'
import IconButton from '@/components/ui/icon-button/icon-button'
import { Send } from 'lucide-react'
import ChatBubble from './chat-bubble'
import { useChatStore } from '../stores/chat-store'
import classNames from 'classnames'
import { generateId, isAiUser } from '../utils/utils'
import { useState } from 'react'
import { createChatHistorySchema, useCreateChatHistory } from '../apis/create-chat-history'
import { has } from 'lodash'
import type { TObjectChat } from '../types/types'
import { useSendChatAgentMessage } from '../apis/send-chat-agent'

const Content = () => {
  const { chatHistory, addMessageHistory } = useChatStore()
  
  // APIS
  const chatHistoryMutation = useCreateChatHistory(
    {},
    (data) => {
      if (has(data, 'id')) {
        const tempData = data as TObjectChat
        addMessageHistory(tempData)
      }
    }
  )
  const chatAgentMutation = useSendChatAgentMessage({
    onSuccess: (data: any) => {
      console.log(data.output)
      addMessageHistory({
        id: generateId(chatHistory),
        message: data.output,
        userType: 'AI',
        name: 'Florista'
      })
    }
  })

  // STATES
  const [textMessage, setTextMessage] = useState<string>('')

  const handleSendClick = async () => {
    const paramsCreate = {
      name: 'User',
      message: textMessage,
      userType: 'USER'
    }

    if (createChatHistorySchema.parse(paramsCreate)) {
      await chatHistoryMutation.mutate({
        name: 'User',
        message: textMessage,
        userType: 'USER'
      })

      await chatAgentMutation.mutate({
        chatId: 1,
        prompt: textMessage,
        action: 'subcribe'
      })
      setTextMessage('')
    }
  }

  return (
    <div className='flex-1 flex flex-col max-w-[480px]'>
      <ChatHeader
        title='Florist Assistant'
        description='Will help you to help choose best flowers stuff for your lovely'
      />

      <div className='bg-[#001A52] flex-1 rounded-b-[16px] flex flex-col'>
        <div className='flex-1 overflow-auto p-5 flex flex-col gap-3'>
          {chatHistory.map((item, index) => (
            <div
              key={index}
              className={classNames(
                'flex flex-row justify-end',
                { '!justify-start': isAiUser(item.userType) }
              )}
            >
              <ChatBubble
                name={item.name}
                message={item.message}
                isAi={isAiUser(item.userType)}
              />
            </div>
          ))}
        </div>
      

        <div className='relative p-5'>
          <Textfield
            className='pr-[60px]'
            onChange={(event) => {
              setTextMessage(event.target.value)
            }}
            value={textMessage}
            onKeyDown={event => {
              if (event.code === 'Enter') handleSendClick()
            }}
          />

          <IconButton
            icon={Send}
            className='absolute right-7 top-[50%] translate-y-[-50%]'
            onClick={handleSendClick}
          />
        </div>
      </div>
    </div>
  )
}

export default Content