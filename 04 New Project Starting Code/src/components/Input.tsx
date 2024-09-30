import { ComponentPropsWithoutRef } from "react"

type InputProps = {
    label: string
    id: string
} & ComponentPropsWithoutRef<'input'>

const Input = ({label, id, ...props}: InputProps) => {
  return (
    <p>
        <label htmlFor={id}>{label}</label>
        <input name={id} id={id} {...props} />
    </p>
  )
}

export default Input