import React from 'react'
import type { ITextfield } from './types'
import classNames from 'classnames'

const Textfield = React.forwardRef<HTMLInputElement, ITextfield>(({ rootClassName, ...rest }, ref) => {
  return (
    <div className={classNames(rootClassName)}>
      <input
        {...rest}
        ref={ref}
        className={classNames(
          'border border-gray-300 bg-white rounded-[12px] py-3 px-4',
          'focus:outline-0 text-gray-500 w-full',
          rest?.className
        )}
      />
    </div>
  )
})

export default Textfield