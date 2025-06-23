import type { Meta, StoryObj } from '@storybook/react-vite'
import Content from './content'
import RootLayout from '@/components/layouts/root-layout'

const Meta = {
  component: Content,
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    )
  ]
} satisfies Meta<typeof Content>

export default Meta

type Story = StoryObj<typeof Meta>

export const Default : Story = {
  args: {}
}