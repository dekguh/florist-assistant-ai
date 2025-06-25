import RootLayout from '@/components/layouts/root-layout'
import { Outlet } from 'react-router'

const AppRoot = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  )
}

export default AppRoot