import type { Meta, StoryObj } from '@storybook/react-vite'
import IconButton from './icon-button'
import { SendIcon } from 'lucide-react'

const meta = {
  component: IconButton,
} satisfies Meta<typeof IconButton>
 
export default meta

type Story = StoryObj<typeof meta>;
 
export const Default: Story = {
  args: {
    icon: SendIcon
  },
}