import { ChangeEventHandler, FormEvent, HTMLInputTypeAttribute } from "react"

export interface InputProps{
    handleChange: ChangeEventHandler<HTMLInputElement>
    placeholder: string
    type: HTMLInputTypeAttribute
}


export const CustomInput = ({type, placeholder, handleChange }: InputProps) => {
    return (
        <input onChange={handleChange} type={type} placeholder={placeholder} />
    )
}