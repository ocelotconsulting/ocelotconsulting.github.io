import Link from 'next/link'
import ArrowIcon from '@/components/icons/ArrowIcon'
import {ComponentPropsWithoutRef} from 'react'

export interface ButtonProps extends ComponentPropsWithoutRef<any> {
    as?: any
}

export default function Button({as = Link, children, className = '', ...props}: ButtonProps) {
    const Component = as

    return (
        <Component
            className={`inline-flex items-center bg-accent text-white px-6 py-3 leading-7 ${className}`}
            {...props}
        >
            <span className="grow text-center">
                {children}
            </span>

            <ArrowIcon className="ml-5 fill-white" />
        </Component>
    )
}