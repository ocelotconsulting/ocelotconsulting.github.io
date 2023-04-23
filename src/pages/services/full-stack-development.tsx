import Image from 'next/image'
import Section from '@/components/Section'
import PageTitle from '@/components/PageTitle'
import Grid from '@/components/Grid'
import SuccessCTASection from '@/components/SuccessCTASection'
import BottomCTASection from '@/components/BottomCTASection'
import ArchitectureIcon from '@/components/icons/ArchitectureIcon'
import ApplicationIcon from '@/components/icons/ApplicationIcon'
import ModernizationIcon from '@/components/icons/ModernizationIcon'

import banner from '@/public/services/full-stack-banner.jpg'
import solutions from '@/public/services/solutions-for-technology-needs.jpg'
import ctaBg from '@/public/services/full-stack-cta.jpg'
import ctaMobile from '@/public/services/full-stack-cta-mobile.jpg'
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export default function FullStackDevelopment({setShowContact}: any) {
    return (
        <>
            <PageTitle image={banner}>
                Full-Stack Development
            </PageTitle>

            <Section>
                <Grid>
                    <FadeIn className="order-2 md:order-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">Experts building modern technology solutions</h2>
                        <p className="mb-2">Ocelot development teams build modern, cloud-native products with our clients. Teams are accountable for all facets of development including frontend, backend, infrastructure, and data pipelines.</p>
                        <p><strong>More than just coding. Our delivery leadership focuses on design, user experience, and system architecture to create valuable and sustainable solutions.</strong></p>
                    </FadeIn>
                    <div className="md:order-2">
                        <Image src={solutions} alt="" />
                    </div>
                </Grid>
            </Section>

            <Section className="bg-black text-white">
                <div className="grid md:grid-cols-3 gap-5 text-center">
                    <SlideUp className="bg-white/20 p-10">
                        <ArchitectureIcon className="mx-auto mb-4 w-16 fill-white" />

                        <h2 className="text-xl font-bold mb-2">Modern Architecture</h2>
                        <p>Our teams of experts are well-versed in the latest technologies and platforms, ensuring that the solutions we deliver are flexible, scalable, and secure. From modern web and mobile applications to serverless APIs and event-driven architectures, we take a holistic approach to design and delivery, always keeping the end-user in mind. We focus on solutions that will meet each client’s evolving needs and drive their business forward.</p>
                    </SlideUp>

                    <SlideUp className="bg-white/20 p-10">
                        <ApplicationIcon className="mx-auto mb-4 w-16 fill-white" />

                        <h2 className="text-xl font-bold mb-2">New Application Development</h2>
                        <p>Too many IT leaders are conditioned to believe that building software is slow and expensive with underwhelming results. Past experiences have lowered their expectations to accept mediocrity. It doesn’t have to be that way! Let Ocelot show you what is possible when you invest in expert engineering with a laser focus on value delivery.</p>
                    </SlideUp>

                    <SlideUp className="bg-white/20 p-10">
                        <ModernizationIcon className="mx-auto mb-4 w-16 fill-white" />

                        <h2 className="text-xl font-bold mb-2">Legacy Modernization</h2>
                        <p>Outdated systems and technology can limit a company's ability to innovate and respond quickly to changing market conditions. By modernizing legacy systems, businesses can improve their ability to operate efficiently, make better use of data, and offer more innovative products and services to their customers. With the right consulting partner, legacy modernization can be a smooth and seamless process that delivers tangible business benefits.</p>
                    </SlideUp>
                </div>
            </Section>

            <Section
                style={{backgroundImage: `url(${ctaBg.src})`}}
                className="bg-cover bg-center max-lg:!bg-none bg-med-gray"
            >
                <Grid>
                    <div>
                        <Image className="object-cover lg:hidden md:h-[500px]" src={ctaMobile} alt="" />
                    </div>
                    <FadeIn className="flex flex-col justify-center md:min-h-[500px]">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">See what we can accomplish together</h2>

                        <p className="text-xl leading-relaxed">
                            "Very Happy with the work Ocelot has done this year, they have really helped us accelerate getting our platform in production and keeping the project timeline on track."<br />
                            ─ VICE PRESIDENT, FINANCE CLIENT
                        </p>
                    </FadeIn>
                </Grid>
            </Section>

            <SuccessCTASection />

            <BottomCTASection setShowContact={setShowContact} />
        </>
    )
}