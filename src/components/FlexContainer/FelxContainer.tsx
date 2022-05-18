import { ComponentProps, FC } from "react";
import styles from "./FlexContainer.module.scss"

export type flexJustify = 'end'
  | 'spaceEven'
  | 'spaceAround'
  | 'spaceBetween'
  | 'center'
  | 'start'

export type flexDirection = 'row' | 'col'
export type flexAlign = 'start' | 'end'

interface Props extends ComponentProps<'div'> {
  direction?: flexDirection,
  justify?: flexJustify,
  align?: flexAlign,
  fill?: boolean
}

export const FlexContainer: FC<Props> = (
  {
    direction = 'row',
    children,
    justify,
    align,
    fill,
    ...props
  }
) => {
  const _align = align == 'start' ? 'alignStart' : 'alignEnd';
  const classes = [styles.flexContainer, align && styles[_align], justify && styles[justify], styles[direction], fill && styles.fill].join(' ');
  return (
    <div {...props} className={classes}>{children}</div>
  )
}