import type React from 'react'
import type { IIconButton } from './types'
import classNames from 'classnames'

const IconButton : React.FC<IIconButton> = ({ icon : Icon, ...rest }) => {
  return (
    <button {...rest} className={classNames(rest.className)}><Icon /></button>
  )
}

export default IconButton