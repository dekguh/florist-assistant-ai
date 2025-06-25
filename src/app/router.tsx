import { useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AppRoot from './routes/app/root'

const extractProps = (module: {[key: string]: unknown;}) => {
  const { ...rest } = module

  return {
    ...rest
  }
}

const generateRouter = () => {
  return createBrowserRouter([
    {
      Component: AppRoot,
      children: [
        {
          path: '/',
          lazy: () => import('@/app/routes/app/home').then(extractProps)
        }
      ]
    }
  ])
}

const AppRouter = () => {
  const routerList = useMemo(() => generateRouter(), [])

  return (
    <RouterProvider router={routerList} />
  )
}

export default AppRouter