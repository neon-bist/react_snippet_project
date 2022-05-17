import { ComponentProps, FC } from "react";
import styles from "./FlexContainer.module.scss"

export type flexJustify = 'end'
  | 'spaceEven'
  | 'spaceAround'
  | 'spaceBetween'
  | 'center'
  | 'start'

export type flexDirection = 'row' | 'col'

interface Props extends ComponentProps<'div'> {
  direction?: flexDirection,
  justify?: flexJustify
}

export const FlexContainer:FC<Props> = (
  {
    direction='row', 
    children, 
    justify, 
    ...props
  }
  ) => {
    const classes = [styles.flexContainer, justify && styles[justify], styles[direction]].join(' ');
    return (
    <div {...props} className={classes}>{children}</div>
    )
  }