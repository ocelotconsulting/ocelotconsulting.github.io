import {ComponentPropsWithoutRef, CSSProperties, ReactNode} from "react";

export interface SectionProps extends ComponentPropsWithoutRef<'section'> {
    containerClassName?: string
    backLayer?: ReactNode
    frontLayer?: ReactNode
    fullWidth?: boolean
}

export default function Section({
    children,
    className = '',
    containerClassName = '',
    backLayer = '',
    frontLayer = '',
    fullWidth = false,
    ...props
}: SectionProps) {
    const widthClass = fullWidth ? '' : 'container mx-auto'

    return (
        <section className={`relative py-14 md:py-20 px-5 ${className}`} {...props}>
            {backLayer}

            <div className={`relative ${widthClass} ${containerClassName}`}>
                {children}
            </div>

            {frontLayer}
        </section>
    )
}