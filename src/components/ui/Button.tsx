import clsx from "clsx"
import s from "../scss/components/ui/Button.module.scss"

interface ButtonProps {
    children?: React.ReactNode
    rounded?: boolean
    type?: "primary" | "secondary"
    width?: "full" | "initial"
}

export const Button = ({children, rounded = false, type = "primary"}: ButtonProps) => {
    return(
        <button className={clsx(s.button, rounded && s.rounded, s[type])}>{children}</button>
    )
}