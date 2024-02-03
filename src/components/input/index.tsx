import React, { ComponentProps, FC, ReactNode } from 'react';
import { classes } from '../../common/util';
type Props = {
    inputClassName?: string;
    rightItem?: ReactNode;
    leftItem?: ReactNode;
} & ComponentProps<'input'>;

export const Input: FC<Props> = ({className, inputClassName, rightItem, leftItem, ...props}) => {
  return (
    <div className={classes(className, 'flex items-center p-2 bg-white rounded-[40px]')}>
        {leftItem}
        <input className={classes(
            inputClassName, 
            'flex-1 outline-none bg-transparent pl-[16px] font-manrope text-lg text-black placeholder:text-[#888888]',
            rightItem ? 'mr-2' : ''
        )} {...props}/>
        {rightItem}
    </div>
  )
}


export default Input