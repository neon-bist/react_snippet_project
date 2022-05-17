import { ComponentProps, FC } from "react";

interface Props extends ComponentProps<'button'> {
  variant?: 'primary'|'secondary'
}

export const Button:FC<Props> = ({variant='primary', children, disabled, ...props}) => (
  <button className={variant} {...props}>{children}</button>
)