import { ComponentProps, FC } from "react";
import styles from "./Button.module.scss"

interface Props extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary'
}

export const Button: FC<Props> = ({ variant = 'primary', children, disabled, ...props }) => (
  <button
    className={`${styles.btn}  ${styles[variant]} ${disabled ? styles.disabled : ''} `}
    disabled={disabled}
    {...props}>
    {children}
  </button>
)