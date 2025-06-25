import React from 'react'

interface IAppProvider {
  children: React.ReactNode;
}

const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  return (
    <div>{children}</div>
  )
}

export default AppProvider