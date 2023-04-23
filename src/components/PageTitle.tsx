import {ComponentPropsWithoutRef} from 'react'
import {StaticImageData} from 'next/image'
import Section from '@/components/Section'
import Waves from '@/components/Waves'

export interface PageTitleProps extends ComponentPropsWithoutRef<'section'> {
    image: StaticImageData
}

export default function PageTitle({children, image}: PageTitleProps) {
    return (
        <div className="relative">
            <Section
                style={{backgroundImage: `url(${image.src})`}}
                className="bg-cover bg-center md:min-h-[370px] flex flex-col justify-center"
                backLayer={<div className="absolute inset-0 bg-black/40" />}
            >
                <h1 className="text-4xl md:text-7xl font-bold text-white md:text-left text-center">
                    {children}
                </h1>
            </Section>

            <Waves className="absolute z-10 -bottom-16 w-full" />
        </div>
    )
}