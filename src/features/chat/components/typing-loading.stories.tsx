import type { Meta, StoryObj } from '@storybook/react-vite'
import TypingLoading from './typing-loading'

const Meta = {
  component: TypingLoading
} satisfies Meta<typeof TypingLoading>

export default Meta

type Story = StoryObj<typeof Meta>

export const Default : Story = {
  args: {}
}