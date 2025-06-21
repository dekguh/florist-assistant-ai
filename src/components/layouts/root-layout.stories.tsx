import type { Meta, StoryObj } from '@storybook/react-vite'
import RootLayout from './root-layout'

const Meta = {
  component: RootLayout
} satisfies Meta<typeof RootLayout>

export default Meta

type Story = StoryObj<typeof Meta>

export const Default : Story = {
  args: { children: null }
}