import {ComponentPropsWithoutRef} from 'react'
import {useInView} from 'react-intersection-observer'


export default function SlideUp({className, children, ...props}: ComponentPropsWithoutRef<'div'>) {
    const { ref, inView, entry } = useInView({
        threshold: 0.5
    })

    const currentClass = inView ? '' : 'opacity-0 translate-y-6'

    return (
        <div ref={ref} className={`${className} delay-100 transition-all duration-500 ${currentClass}`} {...props}>
            {children}
        </div>
    )
}