/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AppRoot from './routes/app/root'
import { useQueryClient, type QueryClient } from '@tanstack/react-query'

const extractProps = (queryClient: QueryClient) => (module: {[key: string]: any;}) => {
  const { clientLoader, clientAction, ...rest } = module

  return {
    ...rest,
    loader: clientLoader?.(queryClient),
    action: clientAction?.(queryClient)
  }
}

const generateRouter = (queryClient: QueryClient) => {
  return createBrowserRouter([
    {
      Component: AppRoot,
      children: [
        {
          path: '/',
          lazy: () => import('@/app/routes/app/home').then(extractProps(queryClient))
        }
      ]
    }
  ])
}

const AppRouter = () => {
  const queryClient = useQueryClient()
  const routerList = useMemo(() => generateRouter(queryClient), [queryClient])

  return (
    <RouterProvider router={routerList} />
  )
}

export default AppRouter