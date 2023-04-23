import {ChangeEventHandler} from 'react'

export interface FormTextAreaProps {
    label: string
    name: string
    value: string
    onChange?: ChangeEventHandler
    required?: boolean
}

export default function FormTextArea({label, name, value, onChange, required = false}: FormTextAreaProps) {
    return (
        <label className="block">
            <span>
                {label}
                {required && (
                    <span className="ml-1">*</span>
                )}
            </span>

            <textarea
                className="mt-1 block w-full text-black"
                name={name}
                defaultValue={value}
                rows={3}
                onChange={onChange}
                required={required}
            />
        </label>
    )
}