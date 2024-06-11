import clsx from "clsx"
import s from "../../scss/components/ui/Button.module.scss"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    rounded?: boolean
    variant?: "primary" | "secondary"
    width?: "full" | "initial"
}

export const Button = ({children, rounded = false, variant = "primary", width = "initial", ...props}: ButtonProps) => {
    return(
        <button {...props} className={clsx(s.button, rounded && s.rounded, s[variant], s[width])}>{children}</button>
    )
}