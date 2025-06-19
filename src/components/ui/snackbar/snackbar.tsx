import React from 'react'
import type { ISnackbar } from './types'
import classNames from 'classnames'
import IconButton from '../icon-button/icon-button'
import { XIcon } from 'lucide-react'

const Snackbar = React.forwardRef<HTMLDivElement, ISnackbar>(({
  title, message, variant, onCloseClick, ...rest }, ref
) => {
  const variantColor = () => {
    if (variant === 'danger') return '!text-red-700 !bg-red-100 !border-red-400 [&_button]:!text-red-400'
    else if (variant === 'info') return '!text-blue-700 !bg-blue-100 !border-blue-400 [&_button]:!text-blue-400'
    else if (variant === 'success') return '!text-green-700 !bg-green-100 !border-green-400 [&_button]:!text-green-400'
    else if (variant === 'warning') return '!text-orange-700 !bg-orange-100 !border-orange-400 [&_button]:!text-orange-400'
  }

  return (
    <div
      ref={ref}
      className={classNames(
        'py-2 px-3 rounded-[8px] border text-[14px] flex flex-row items-center flex-nowrap',
        '[&_button_svg]:w-5',
        variantColor(),
        rest.className
      )}
    >
      <div className='flex-1'>
        {title && <h5 className='font-bold text-sm'>{title}</h5>}
        <p className='leading-[1.65] text-sm'>{message}</p>
      </div>

      <IconButton onClick={onCloseClick} icon={XIcon}/>
    </div>
  )
})

export default Snackbar