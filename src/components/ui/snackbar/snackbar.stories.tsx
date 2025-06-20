import type { Meta, StoryObj } from '@storybook/react-vite'
import Snackbar from './snackbar'
import UseSnackbar from './use-snackbar'

const Meta = {
  component: Snackbar,
  argTypes: {
    variant: {
      options: ['success', 'warning', 'danger', 'info'],
      control: { type: 'select' }
    }
  }
} satisfies Meta<typeof Snackbar>

export default Meta

type Story = StoryObj<typeof Meta>

export const Default : Story = {
  args: {
    variant: 'danger',
    title: '',
    message: 'test message information here',
    onCloseClick: () => console.log('clicked')
  }
}

const HookExample = () => {
  const { ElementRootSnackbar, callSnackbar } = UseSnackbar()

  return (
    <>
      {ElementRootSnackbar}
      <button onClick={() => callSnackbar({
        message: 'test', timeout: 3000, variant: 'success', open: true
      })}>call snackbar</button>
    </>
  )
}

export const UsingHookExample = {
  render: () => <HookExample />
}