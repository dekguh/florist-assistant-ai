import { useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'

const extractProps = (module: {[key: string]: unknown;}) => {
  const { ...rest } = module

  return {
    ...rest
  }
}

const generateRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      lazy: () => import('@/app/routes/home').then(extractProps)
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