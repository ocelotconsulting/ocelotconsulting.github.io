import {Dispatch, SetStateAction} from "react";
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import PageTitle from '@/components/PageTitle'
import Section from '@/components/Section'
import PeopleIcon from '@/components/icons/PeopleIcon'
import HandshakeIcon from '@/components/icons/HandshakeIcon'
import MoneyBackIcon from '@/components/icons/MoneyBagIcon'
import BottomCTASection from '@/components/BottomCTASection'
import CaseStudyCard, {CaseStudyCardProps} from '@/components/case-studies/CaseStudyCard'
import FadeIn from '@/components/animations/FadeIn'
import SwiperPrev from '@/components/SwiperPrev'
import SwiperNext from '@/components/SwiperNext'

import 'swiper/css'
import 'swiper/css/navigation'

import banner from '@/public/case-studies/case-banner.jpg'
import modernize from '@/public/case-studies/modernize-your-business.jpg'

export interface CaseStudiesProps {
    caseStudies: CaseStudyCardProps[]
    setShowContact: Dispatch<SetStateAction<boolean>>
}

export default function CaseStudies({caseStudies, setShowContact}: CaseStudiesProps) {
    return (
        <>
        <PageTitle image={banner}>
            Case Studies
        </PageTitle>

        <Section className="bg-light-gray">
            <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-8">
                Just a sample of our client's successes
            </h2>

            <div className="relative">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    modules={[Navigation]}
                    // Doc: Because of nature of how the loop mode works (it will rearrange slides), total number of slides must be >= slidesPerView * 2
                    // Loop only if we meet the highest breakpoint
                    loop={caseStudies.length / 2 >= 4}
                    autoplay={true}
                    navigation={{
                        nextEl: '.button-next',
                        prevEl: '.button-prev',
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 4
                        }
                    }}
                >
                    {caseStudies.map((caseStudy, index) => (
                        <SwiperSlide key={index}>
                            <CaseStudyCard
                                level={caseStudy.level}
                                icon={caseStudy.icon}
                                industry={caseStudy.industry}
                                blurb={caseStudy.blurb}
                                slug={caseStudy.slug}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <SwiperPrev />
                <SwiperNext />
            </div>
        </Section>

        <Section>
            <div className="grid md:grid-cols-2 gap-5 items-center">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-5 text-center md:text-left">
                        We help you modernize your business
                    </h2>

                    <div className="flex flex-col md:flex-row mb-5">
                        <div className="mx-auto md:mx-0">
                            <PeopleIcon className="w-10 h-auto" />
                        </div>
                        <div className="grow ml-5 text-center text-black md:text-left">
                            <h3 className="text-xl font-bold mb-2">Engineering experts</h3>
                            <p>We specialize in delivering technology solutions, and our technologists are experts at guiding clients through this process.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row mb-5">
                        <div className="mx-auto md:mx-0">
                            <HandshakeIcon className="w-10 h-auto" />
                        </div>
                        <div className="grow ml-5 text-center text-black md:text-left">
                            <h3 className="text-xl font-bold mb-2">Partnership-focused</h3>
                            <p>We partner with our clients during delivery in order to teach, mentor, and share ownership.</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row">
                        <div className="mx-auto md:mx-0">
                            <MoneyBackIcon className="w-10 h-auto" />
                        </div>
                        <div className="grow ml-5 text-center text-black md:text-left">
                            <h3 className="text-xl font-bold mb-2">No extras</h3>
                            <p>We strive to eliminate all unnecessary overhead and waste.  Over 90% of our staff are engineers & architects focused on delivery. </p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn
                    style={{backgroundImage: `url(${modernize.src})`}}
                    className="bg-cover bg-center flex flex-col justify-end min-h-[550px]"
                >
                    <div className="bg-white m-5 p-5">
                        <p className="text-xl text-black font-medium mb-5">"I really appreciate working with the Ocelot Team. They are open-minded, resilient and most importantly just plain fun & cool to work with as a team."</p>
                        <p>─ Product Owner, Global 500 Client</p>
                    </div>
                </FadeIn>
            </div>
        </Section>

        <BottomCTASection setShowContact={setShowContact} />
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            caseStudies: [
                {
                    level: 'Fortune 500 Client',
                    icon: 'dinner.svg',
                    industry: 'Food Consumer Products',
                    blurb: 'The client needed IoT sensor data from manufacturing facilities in near real-time to improve cloud analytics, business operations, and decision making.',
                    slug: 'fortune-500-food-consumer-products'
                },
                {
                    level: 'Global Client',
                    icon: 'network.svg',
                    industry: 'Science & Tech.',
                    blurb: 'The client’s business is growing.  An existing plant breeding process and genetics-based decision pipeline were no longer able to support the volume and throughput required which could result in products being delayed to market.',
                    slug: 'global-agricultural-science-tech-client'
                },
                {
                    level: 'Fortune 500 Client',
                    icon: 'shield-check.svg',
                    industry: 'Insurance',
                    blurb: 'Facing increased demands for reporting while assuring compliance and auditability with data protection regulations such as GDPR and CCPA, their tooling was no longer able to perform critical business functions. Ocelot Consulting was engaged to modernize the environment so the current needs for reporting and fiscal closures could be met while paving the way for more sustainable & advanced analytics.',
                    slug: 'fortune-500-insurance-client'
                },
                {
                    level: 'Fortune 500 Client',
                    icon: 'outlet.svg',
                    industry: 'Energy',
                    blurb: 'This client’s on-premises enterprise data warehouse (EDW) had been stretched to its limits, no longer being able to sustain additional load. Increased adoption of Internet of Things (IoT) devices rated to greatly increase the amount of data being captured and analyzed, and the hardware supporting the EDW was reaching its End of Life. Leadership decided to migrate from their EDW and create a cloud-based data lake.',
                    slug: 'fortune-500-energy-client'
                },
                {
                    level: 'Fortune 500 Client',
                    icon: 'first-aid.svg',
                    industry: 'Healthcare',
                    blurb: 'This client’s Enterprise Data Warehouse (EDW) deployment was found lacking in performance and flexibility while high in cost. The organization had ambitions of modernization including the separation of storage and compute concerns with an elastic source of truth to empower business intelligence and analytic workloads.',
                    slug: 'fortune-500-healthcare-client'
                },
            ]
        }
    }
}