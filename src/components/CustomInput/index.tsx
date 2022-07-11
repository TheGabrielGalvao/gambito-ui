import { ChangeEventHandler } from "react"

export interface InputProps extends HTMLInputElement {
    handleChange: ChangeEventHandler<HTMLInputElement>
}


export const CustomInput = ({...props}: InputProps) => {
    return (
        <input onChange={props.handleChange} {...props} />
    )
}