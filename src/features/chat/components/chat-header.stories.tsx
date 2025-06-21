import type { Meta, StoryObj } from '@storybook/react-vite'
import ChatHeader from './chat-header'

const Meta = {
  component: ChatHeader
} satisfies Meta<typeof ChatHeader>

export default Meta

type Story = StoryObj<typeof Meta>

export const Default : Story = {
  args: {
    title: 'Florist Assistant',
    description: 'Will help you to help choose best flowers stuff for your lovely'
  }
}