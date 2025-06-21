import type React from 'react'
import bgRootLayout from '@/assets/background/background-root-layout.svg'

interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout : React.FC<IRootLayout> = ({ children }) => {
  return (
    <div
      className='h-[100vh] bg-no-repeat bg-cover'
      style={{
        backgroundImage: `url("${bgRootLayout}")`
      }}
    >
      {children}
    </div>
  )
}

export default RootLayout