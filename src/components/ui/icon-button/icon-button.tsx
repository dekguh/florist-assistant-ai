import React from 'react'
import type { IIconButton } from './types'
import classNames from 'classnames'

const IconButton = React.forwardRef<HTMLButtonElement, IIconButton>(({ icon : Icon, ...rest }, ref) => {
  return (
    <button
      {...rest}
      className={classNames(
        'hover:cursor-pointer h-10 w-10 rounded-full',
        'flex items-center justify-center',
        'text-gray-600 hover:text-blue-400',
        rest.className
      )}
      ref={ref}
    ><Icon /></button>
  )
})

export default IconButton