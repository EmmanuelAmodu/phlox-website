import {FC, ComponentProps } from 'react'
import { classes } from '../../common/util';

const  Button: FC<ComponentProps<'button'>> = ({className, children, ...props}) => {
  return (
    <button {...props} className={classes(
        className, 
        'py-[11px] px-[24px] bg-gradient-to-l to-primary from-secondary',
        'text-white font-manrope text-base rounded-[40px]'
    )}>{children}</button>
  )
}

export default Button;