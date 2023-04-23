import Image from 'next/image'
import PageTitle from '@/components/PageTitle'
import Section from '@/components/Section'
import Grid from '@/components/Grid'
import MLOpsIcon from '@/components/icons/MLOpsIcon'
import StrategyIcon from '@/components/icons/StrategyIcon'
import ModelBuildingIcon from '@/components/icons/ModelBuildingIcon'
import SuccessCTASection from '@/components/SuccessCTASection'
import BottomCTASection from '@/components/BottomCTASection'

import banner from '@/public/services/data-science-banner.jpg'
import insights from '@/public/services/insights-you-need-from-key-data.jpg'
import ctaBg from '@/public/services/data-science-cta.jpg'
import ctaMobile from '@/public/services/data-science-cta-mobile.jpg'
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export default function DataScience({setShowContact}: any) {
    return (
        <>
        <PageTitle image={banner}>
            Data Science
        </PageTitle>

        <Section>
            <Grid>
                <FadeIn className="order-2 md:order-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">
                        Unlock the value of your data
                    </h2>

                    <p className="mb-2">Data Science insights can generate measurable ROI by allowing companies to make better informed decisions, drive operational efficiency, and increase revenue streams. By leveraging the latest in data engineering, machine learning, and cloud-native technologies, Ocelot Consulting helps clients to unlock the full potential of their data and drive sustained business growth.</p>

                    <p><strong>Whether you are just starting on your data science journey or looking to take your existing efforts to the next level, Ocelot Consulting is here to help.</strong></p>
                </FadeIn>

                <div className="md:order-2">
                    <Image className="object-cover md:h-[400px]" src={insights} alt="" />
                </div>
            </Grid>
        </Section>

        <Section className="bg-black text-white text-center">
            <div className="grid md:grid-cols-3 gap-5">
                <SlideUp className="bg-white/20 p-10">
                    <MLOpsIcon className="mx-auto mb-4 w-16 fill-white" />

                    <h2 className="text-xl font-bold mb-2">MLOps</h2>
                    <p>Ocelot Consulting offers Machine Learning Operations (MLOps) consulting services to help organizations operationalize their machine learning models. Our team of experts assist clients in automating the end-to-end machine learning pipeline, from model development to deployment, monitoring, and maintenance.</p>
                </SlideUp>
                <SlideUp className="bg-white/20 p-10">
                    <StrategyIcon className="mx-auto mb-4 w-16 fill-white" />

                    <h2 className="text-xl font-bold mb-2">Strategy</h2>
                    <p>Ocelot Consulting has deep experience in helping organizations of all sizes and industries develop and implement effective data science strategies. We work closely with you to understand your business objectives, identify the most valuable data-driven opportunities, and develop a roadmap to help you achieve your goals.</p>
                </SlideUp>
                <SlideUp className="bg-white/20 p-10">
                    <ModelBuildingIcon className="mx-auto mb-4 w-16 fill-white" />

                    <h2 className="text-xl font-bold mb-2">Model Building</h2>
                    <p>Ocelot Consulting offers model development consulting services to help organizations build accurate, reliable, and efficient machine learning models. With expertise in a wide range of machine learning techniques and technologies, we can assist clients in selecting the most appropriate algorithms and architectures for their specific use cases.</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">See what we can accomplish together</h2>

                    <p className="text-xl leading-relaxed">
                        "We are lucky to have the team from Ocelot working alongside our internal team. They are dedicated team members and ready to help however they can. A big thank you for me for their efforts."<br />
                        ─ SR. DIRECTOR, ANALYTICS
                    </p>
                </FadeIn>
            </Grid>
        </Section>

        <SuccessCTASection />

        <BottomCTASection setShowContact={setShowContact} />
        </>
    )
}