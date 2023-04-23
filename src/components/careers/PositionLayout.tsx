import {ReactNode} from 'react'
import Section from '@/components/Section'
import CareersForm from '@/components/careers/CareersForm'

export interface PositionLayoutProps {
    title: string
    location: string
    type: string
    children: ReactNode
}

export default function PositionLayout({title, location, type, children}: PositionLayoutProps) {
    return (
        <>
            <Section className="bg-light-gray">
                <h1 className="text-3xl lg:text-6xl font-bold text-black">{title}</h1>
                <hr className="w-[100px] my-4" />
                <p className="text-2xl font-bold text-black">{location}</p>
                <p className="text-2xl font-bold text-black">{type}</p>
            </Section>

            <Section>
                <div className="grid lg:grid-cols-5 gap-x-16 gap-y-8">
                    <div className="col-span-3">
                        <h2 className="text-3xl lg:text-6xl font-bold text-black">About the role</h2>

                        {children}
                    </div>
                    <div className="bg-light-gray col-span-2 p-4">
                        <h2 className="text-3xl lg:text-6xl font-bold text-black">Our company</h2>
                        <p className="mb-2"><strong>About us</strong></p>
                        <p className="mb-2">Ocelot Consulting was born out of the idea that autonomy and mastery are worthy goals of good developers. We had an idea that the classical development organization could be made more efficient and pleasurable to work in if run in ways that developers valued. Ocelot works to innovate and inspire developers to try new things, applying them to client needs to solve today’s biggest problems.</p>
                        <p>We aim to give our Ocelot family challenging and rewarding work, competitive compensation, and the opportunity to make their role into everything they want it to become. The establishment of a collaborative community of experts is the goal we aim to integrate all new team members into.</p>

                        <h2 className="text-3xl lg:text-6xl font-bold text-black mt-4">Perks</h2>
                        <p className="text-2xl">Benefits include medical, dental, retirement, and PTO.</p>
                    </div>
                </div>
            </Section>

            <Section>
                <h2 className="text-3xl lg:text-5xl font-bold text-black text-center">
                    See if your career lies with Ocelot
                </h2>

                <div>
                    <CareersForm />
                </div>
            </Section>
        </>
    )
}