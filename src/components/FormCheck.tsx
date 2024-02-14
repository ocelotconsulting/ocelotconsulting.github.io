import { ChangeEventHandler, ReactNode } from 'react'

export interface FormInputProps {
    label: string | ReactNode
    name: string
    value: string
    onChange?: ChangeEventHandler
    required?: boolean
}

export default function FormInput({ label, name, value, onChange, required = false }: FormInputProps) {
    return (
        <label className="block">
            <input
                className="m-1 text-black"
                type='checkbox'
                name={name}
                defaultValue={value}
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
