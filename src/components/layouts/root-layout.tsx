import type React from 'react'

interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout : React.FC<IRootLayout> = ({ children }) => {
  return (
    <div>{children}</div>
  )
}

export default RootLayout