import { ChangeEventHandler, ReactNode } from 'react'

export interface FormInputProps {
    label: string | ReactNode
    name: string
    checked: boolean
    onChange?: ChangeEventHandler<HTMLInputElement>
    required?: boolean
}

export default function FormInput({ label, name, checked = false, onChange, required = false }: FormInputProps) {
    return (
        <label className="block">
            <input
                className="m-1 text-black"
                type='checkbox'
                name={name}
                defaultChecked={checked}
                required={required}
                onChange={onChange}
            />

            <span>
                {required && (
                    <span className="mr-1">*</span>
                )}
                {label}
            </span>
        </label>
    )
}
