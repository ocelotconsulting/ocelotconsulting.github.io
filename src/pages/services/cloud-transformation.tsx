import Image from 'next/image'
import Section from '@/components/Section'
import PageTitle from '@/components/PageTitle'
import Grid from '@/components/Grid'
import BottomCTASection from '@/components/BottomCTASection'
import SuccessCTASection from '@/components/SuccessCTASection'
import CloudGearIcon from '@/components/icons/CloudGearIcon'
import GearWrenchIcon from '@/components/icons/GearWrenchIcon'
import CloudMoneyIcon from '@/components/icons/CloudMoneyIcon'
import NetworkShieldIcon from '@/components/icons/NetworkShieldIcon'

import banner from '@/public/services/cloud-transformation-top-banner.jpg'
import datacenter from '@/public/services/design-a-cloud.jpg'
import ctaBg from '@/public/services/cloud-cta.jpg'
import ctaMobile from '@/public/services/cloud-transformation-cta-mobile.jpg'
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export default function CloudTransformation({setShowContact}: any) {
    return (
        <>
            <PageTitle image={banner}>
                Cloud Transformation
            </PageTitle>

            <Section>
                <Grid>
                    <FadeIn className="order-2 md:order-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">Much more than someone else’s data center</h2>

                        <p className="mb-2">Public cloud services enable companies to be more agile, flexible, scalable, and secure. This technical agility creates business agility by allowing you to rapidly respond to market changes, scale resources as needed, and optimize costs by paying only for what you use.</p>

                        <p><strong>Ocelot Consulting’s expert guidance helps clients navigate public cloud adoption and optimize their investment.</strong></p>
                    </FadeIn>

                    <div className="md:order-2">
                        <Image src={datacenter} alt="" />
                    </div>
                </Grid>
            </Section>

            <Section className="bg-black text-white">
                <div className="grid md:grid-cols-2 gap-5 text-center">
                    <SlideUp className="bg-white/20 p-10">
                        <CloudGearIcon className="mx-auto mb-4 w-16 fill-white" />
                        <h2 className="text-xl font-bold mb-4">Cloud Transformation</h2>
                        <p>Ocelot Consulting has guided several Fortune 500 corporations through their first migrations to public cloud. We have expertise across all major cloud platforms and understand that transformation includes more than just selecting the right technology. We can assist with the organizational change that includes training, designing new roles and organizations, and implementing new ways of working.</p>
                    </SlideUp>

                    <SlideUp className="bg-white/20 p-10">
                        <GearWrenchIcon className="mx-auto mb-4 w-16 fill-white" />
                        <h2 className="text-xl font-bold mb-4">Advanced Automation</h2>
                        <p>"Click ops” and other manual forms of infrastructure management and software deployment are slow, inconsistent, and prone to errors. If it can be done manually, we can do it automatically and better with advanced infrastructure-as-code and deployment pipelines.</p>
                    </SlideUp>

                    <SlideUp className="bg-white/20 p-10">
                        <CloudMoneyIcon className="mx-auto mb-4 w-16 fill-white" />
                        <h2 className="text-xl font-bold mb-4">Cost Management</h2>
                        <p>If you think just moving workloads to the cloud will lower costs, you may be sadly mistaken. Similar capabilities could cost more – potentially much more, if not managed properly. Significant savings are still possible by intelligently architecting solutions and designing for elastic usage. Ocelot can help you navigate this landscape to maximize your return on investment.</p>
                    </SlideUp>

                    <SlideUp className="bg-white/20 p-10">
                        <NetworkShieldIcon className="mx-auto mb-4 w-16 fill-white" />
                        <h2 className="text-xl font-bold mb-4">Information Security</h2>
                        <p>Ocelot Consulting leverages years of experience in cloud security to help companies implement effective security measures and technologies tailored to their specific needs. With a proven track record of successful security implementations for highly regulated enterprises, clients can trust us to safeguard their valuable data assets and mitigate the risk of security breaches in the cloud.</p>
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
                    <FadeIn className="flex flex-col justify-center md:min-h-[500px] text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">See what we can accomplish together</h2>

                        <p className="text-xl leading-relaxed">
                            "I am super impressed with the progress of this project. Even the demos are super well prepped. I can see how we are going to be able to easily support the solutions we are building. We are getting real payback for the value and time. This will enable us to take on more projects in the future."<br />
                            ─ DIRECTOR, GLOBAL 500 CLIENT
                        </p>
                    </FadeIn>
                </Grid>
            </Section>

            <SuccessCTASection />

            <BottomCTASection setShowContact={setShowContact} />
        </>
    )
}