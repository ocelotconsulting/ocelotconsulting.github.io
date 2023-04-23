import {ComponentPropsWithoutRef} from 'react'
import {useInView} from 'react-intersection-observer'

export default function FadeIn({className, children, ...props}: ComponentPropsWithoutRef<'div'>) {
    const { ref, inView, entry } = useInView({
        threshold: 0.5
    })

    const currentClass = inView ? '' : 'opacity-0'

    return (
        <div ref={ref} className={`${className} delay-100 transition-all duration-1000 ${currentClass}`} {...props}>
            {children}
        </div>
    )
}