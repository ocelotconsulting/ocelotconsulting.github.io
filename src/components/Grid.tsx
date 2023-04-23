import {ComponentPropsWithoutRef} from 'react'

export interface GridProps extends ComponentPropsWithoutRef<'div'> {}

export default function Grid({children, className = '', ...props}: GridProps) {
    return (
        <div className={`grid md:grid-cols-2 gap-x-16 gap-y-8 md:items-center text-center md:text-left ${className}`}>
            {children}
        </div>
    )
}