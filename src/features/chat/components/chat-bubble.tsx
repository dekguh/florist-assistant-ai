import classNames from 'classnames'
import chatheaderLogo from '@/assets/logo/chat-header-logo.svg'
import React from 'react'
import TypingLoading from './typing-loading'

interface IChatBubble {
  isLoading?: boolean;
  name: string;
  message: string;
  isAi?: boolean;
}

const ChatBubble : React.FC<IChatBubble> = ({
  name, isLoading = false, message, isAi = false
}) => {
  return (
    <div className='flex flex-col gap-1 w-fit'>
      <h6 className={classNames(
        'text-white font-bold text-base',
        { 'text-right': !isAi }
      )}>{name}</h6>

      <div
        className={classNames(
          'rounded-[8px] border border-white min-h-[42px] px-3 py-2',
          'bg-white/50 flex flex-row items-center'
        )}
      >
        {isAi && <img src={chatheaderLogo} className='w-[24px] mr-2' />}
        {isLoading
          ? <TypingLoading />
          :<p className='text-base text-white'>{message}</p>}
      </div>
    </div>
  )
}

export default ChatBubble