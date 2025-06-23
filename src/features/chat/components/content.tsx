import Textfield from '@/components/ui/textfield/textfield'
import ChatHeader from './chat-header'
import IconButton from '@/components/ui/icon-button/icon-button'
import { Send } from 'lucide-react'
import ChatBubble from './chat-bubble'

const Content = () => {
  return (
    <div className='h-full'>
      <ChatHeader
        title='Florist Assistant'
        description='Will help you to help choose best flowers stuff for your lovely'
      />

      <div className='bg-[#001A52] h-full rounded-b-[16px] flex flex-col'>
        <div className='flex-1 overflow-auto p-5 flex flex-col gap-3'>
          <div className='flex justify-start'>
            <ChatBubble
              name='assistant'
              message='Hello, I’m Florist Assistant'
              isAi
            />
          </div>

          <div className='flex justify-end'>
            <ChatBubble
              name='user'
              message='Hello, i need to order a Bouquet flowers, do you have some recommendation?'
              isAi={false}
            />
          </div>
        </div>

        <div className='relative p-5'>
          <Textfield className='pr-[60px]' />

          <IconButton
            icon={Send}
            className='absolute right-7 top-[50%] translate-y-[-50%]'
          />
        </div>
      </div>
    </div>
  )
}

export default Content