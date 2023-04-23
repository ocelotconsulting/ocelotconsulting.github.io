import {ComponentPropsWithoutRef} from 'react'

import Section from '@/components/Section'
import Waves from '@/components/Waves'

import detailsBanner from '@/public/details-page.jpg'

export interface CaseStudyTitleProps extends ComponentPropsWithoutRef<'section'> {
    subtitle: string
}

export default function CaseStudyTitle({children, subtitle}: CaseStudyTitleProps) {
    return (
        <div className="relative">
            <Section
                style={{backgroundImage: `url(${detailsBanner.src})`}}
                className="bg-cover bg-center md:min-h-[400px] flex flex-col justify-center"
                backLayer={<div className="absolute inset-0 bg-black/90" />}
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
                    {children}
                </h1>
                <p className="text-xl md:text-3xl text-center text-white">
                    {subtitle}
                </p>
            </Section>

            <Waves className="absolute z-10 -bottom-16 w-full" />
        </div>
    )
}