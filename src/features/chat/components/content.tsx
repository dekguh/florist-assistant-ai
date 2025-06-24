import Textfield from '@/components/ui/textfield/textfield'
import ChatHeader from './chat-header'
import IconButton from '@/components/ui/icon-button/icon-button'
import { Send } from 'lucide-react'
import ChatBubble from './chat-bubble'
import { useChatStore } from '../stores/chat-store'
import classNames from 'classnames'
import { isAiUser } from '../utils/utils'
import { useState } from 'react'

const Content = () => {
  const { chatHistory, addMessageHistory } = useChatStore()

  // STATES
  const [textMessage, setTextMessage] = useState<string>('')

  const handleSendClick = () => {
    addMessageHistory({
      name: 'User',
      message: textMessage,
      userType: 'USER'
    })
    setTextMessage('')
  }

  console.log({ textMessage })

  return (
    <div className='h-full'>
      <ChatHeader
        title='Florist Assistant'
        description='Will help you to help choose best flowers stuff for your lovely'
      />

      <div className='bg-[#001A52] h-full rounded-b-[16px] flex flex-col'>
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