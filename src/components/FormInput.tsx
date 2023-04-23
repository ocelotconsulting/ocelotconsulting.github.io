import {ChangeEventHandler} from 'react'

export interface FormInputProps {
    label: string
    name: string
    value: string
    type?: string
    onChange?: ChangeEventHandler
    required?: boolean
}

export default function FormInput({label, name, value, onChange, required = false, type = 'text'}: FormInputProps) {
    return (
        <label className="block">
            <span>
                {label}
                {required && (
                    <span className="ml-1">*</span>
                )}
            </span>

            <input
                className="mt-1 block w-full text-black"
                type={type}
                name={name}
                defaultValue={value}
                required={required}
            />
        </label>
    )
}