import type { Meta, StoryObj } from '@storybook/react-vite'
import Textfield from './textfield'

const meta = {
  component: Textfield
} satisfies Meta<typeof Textfield>

export default meta

type Story = StoryObj<typeof meta>

export const Default : Story = {
  args: {
    rootClassName: 'w-full'
  }
}