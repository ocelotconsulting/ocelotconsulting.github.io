import Image from 'next/image'
import PageTitle from '@/components/PageTitle'
import Grid from '@/components/Grid'
import Section from '@/components/Section'
import Button from '@/components/Button'
import BottomCTASection from '@/components/BottomCTASection'

import banner from '@/public/services/services-banner.jpg'
import cloudTransformation from '@/public/services/cloud-transformation.jpg'
import fullStack from '@/public/services/full-stack-development.jpg'
import fullStackMobile from '@/public/services/full-stack-development-mobile.jpg'
import dataEngineering from '@/public/services/data-engineering.jpg'
import dataScience from '@/public/services/data-science.jpg'
import dataScienceMobile from '@/public/services/data-science-mobile.jpg'
import strategy from '@/public/services/strategy-execution.jpg'
import FadeIn from "@/components/animations/FadeIn";

export default function Services({setShowContact}: any) {
    return (
        <>
            <PageTitle image={banner}>
                Services
            </PageTitle>

            <Section>
                <Grid>
                    <div className="order-2 md: order-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">Cloud Transformation</h2>
                        <p className="mb-2">From leveraging a cloud environment for the first time to expanding an existing deployment, we provide expert guidance and support to help companies successfully navigate the complexities of public cloud adoption and optimization.</p>
                        <p><strong>Our experienced engineers bring deep technical expertise and a focus on innovation to ensure our clients maximize the value of their public cloud investments.</strong></p>

                        <Button className="mt-4" href="/services/cloud-transformation">
                            Learn More
                        </Button>
                    </div>

                    <div className="md:order-2">
                        <Image className="object-cover md:h-[430px] lg:h-auto" src={cloudTransformation} alt="" />
                    </div>
                </Grid>
            </Section>

            <Section
                style={{backgroundImage: `url(${fullStack.src})`}}
                className="bg-cover bg-center sm:max-lg:!p-0 max-lg:!bg-none bg-med-gray"
            >
                <Grid>
                    <div>
                        <Image className="lg:hidden object-cover md:h-[500px] lg:h-auto" src={fullStackMobile} alt="" />
                    </div>
                    <FadeIn className="min-h-[400px] flex flex-col justify-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">Full-Stack Development</h2>
                        <p className="mb-2">Your business is complex and unique. Too often, commodity off-the-shelf solutions won’t provide the differentiating capabilities you need.</p>
                        <p><strong>Whether you’re modernizing your existing portfolio or building novel capabilities, Ocelot has expertise in modern application development to accelerate your delivery.</strong></p>

                        <div className="mt-4">
                            <Button href="/services/full-stack-development">
                                Learn More
                            </Button>
                        </div>
                    </FadeIn>
                </Grid>
            </Section>

            <Section>
                <Grid>
                    <FadeIn className="order-2 md:order-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">Data Engineering</h2>
                        <p className="mb-2">Build scalable, resilient, and cost-effective data infrastructures that drive business insights and growth.</p>
                        <p><strong>Let us help you design a modern data ecosystem that allows you to focus on data insights, rather than data management.</strong></p>

                        <Button className="mt-4" href="/services/data-engineering">
                            Learn More
                        </Button>
                    </FadeIn>
                    <div className="md:order-2">
                        <Image className="object-cover md:h-[430px] lg:h-auto" src={dataEngineering} alt="" />
                    </div>
                </Grid>
            </Section>

            <Section
                style={{backgroundImage: `url(${dataScience.src})`}}
                className="bg-cover bg-center sm:max-lg:!p-0 max-lg:!bg-none bg-med-gray"
            >
                <Grid>
                    <div>
                        <Image className="object-cover lg:hidden md:h-[430px]" src={dataScienceMobile} alt="" />
                    </div>
                    <FadeIn className="min-h-[400px] flex flex-col justify-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">Data Science</h2>
                        <p className="mb-2">To get the best insights from your data, you need to ask the right questions. The answers may require a combination of coding, advanced algorithms, and domain expertise.</p>
                        <p><strong>Ocelot can guide you down the path to know the right questions to ask and how to get the right data to answer them.</strong></p>

                        <div className="mt-4">
                            <Button href="/services/data-science">
                                Learn More
                            </Button>
                        </div>
                    </FadeIn>
                </Grid>
            </Section>

            <Section>
                <Grid>
                    <FadeIn className="order-2 md:order-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">Strategy &amp; Execution</h2>
                        <p className="mb-2">Some companies need help defining technology and business strategies. Others have a clear vision but lack the capability to deliver. Many are somewhere in between. Ocelot has the expertise to help all of them be successful.</p>
                        <p><strong>Ocelot teams are specialists in both strategy and execution, helping you to understand future opportunities and showing you a clear path how to get there.</strong></p>

                        <Button className="mt-4" href="/services/strategy-execution">
                            Learn More
                        </Button>
                    </FadeIn>
                    <div className="md:order-2">
                        <Image className="object-cover md:h-[430px] lg:h-auto" src={strategy} alt="" />
                    </div>
                </Grid>
            </Section>

            <BottomCTASection setShowContact={setShowContact} />
        </>
    )
}