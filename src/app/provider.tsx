import { reactQueryOptions } from '@/lib/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react'

interface IAppProvider {
  children: React.ReactNode;
}

const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: reactQueryOptions
  }))
  
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default AppProvider