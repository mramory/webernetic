import s from "../../scss/components/ui/Input.module.scss"

interface InputProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
    placeholder?: string
}

export const Input = ({placeholder, ...props}: InputProps) => {
    return(
        <input {...props} placeholder={placeholder} className={s.input} />
    )
}