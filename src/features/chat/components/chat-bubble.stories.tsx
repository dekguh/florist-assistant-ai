import type { Meta, StoryObj } from '@storybook/react-vite'
import ChatBubble from './chat-bubble'

const Meta = {
  component: ChatBubble,
  decorators: [
    (Story) => (
      <div className='bg-blue-950 h-[100vh]'>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof ChatBubble>

export default Meta

type Story = StoryObj<typeof Meta>

export const Default : Story = {
  args: {
    name: 'Assistant',
    message: 'Hello, I’m Florist Assistant'
  }
}