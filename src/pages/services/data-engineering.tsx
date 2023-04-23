import Image from 'next/image'
import Section from '@/components/Section'
import PageTitle from '@/components/PageTitle'
import Grid from '@/components/Grid'
import SuccessCTASection from '@/components/SuccessCTASection'
import BottomCTASection from '@/components/BottomCTASection'
import PipelinesIcon from '@/components/icons/PipelinesIcon'
import DatalakesIcon from '@/components/icons/DatalakesIcon'
import StreamingDataIcon from '@/components/icons/StreamingDataIcon'

import banner from '@/public/services/data-engineering-banner.jpg'
import pipeline from '@/public/services/data-pipeline-visibility.jpg'
import ctaBg from '@/public/services/data-engineering-cta.jpg'
import ctaMobile from '@/public/services/data-engineering-cta-mobile.jpg'
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export default function DataEngineering({setShowContact}: any) {
    return (
        <>
        <PageTitle image={banner}>
            Data Engineering
        </PageTitle>

        <Section>
            <Grid>
                <FadeIn className="order-2 md:order-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">Revolutionize your data capabilities</h2>

                    <p className="mb-2">Data engineering is hard. We get it. Your data fuels your business, improving your strategic decisions and customer experiences. As demand grows, legacy data architectures are failing to keep up. They lack the flexibility needed by teams to make informed and timely decisions, and organizations are struggling to manage the complexity of their data assets.</p>

                    <p><strong>Modern data tools, platforms, and integration patterns address these challenges. Ocelot can help you ingest and analyze data, improve efficiency, and uncover new opportunities at faster speeds and lower costs.</strong></p>
                </FadeIn>

                <div className="md:order-2">
                    <Image src={pipeline} alt="" />
                </div>
            </Grid>
        </Section>

        <Section className="bg-black text-white text-center">
            <div className="grid md:grid-cols-3 gap-5">
                <SlideUp className="bg-white/20 p-10">
                    <PipelinesIcon className="mx-auto mb-4 w-16 fill-white" />

                    <h2 className="text-xl font-bold mb-2">Pipelines</h2>
                    <p>Data pipelines are a pillar of data-driven businesses. They ensure that data is reliably collected, processed, and made available for analysis, enabling companies to make informed decisions based on up-to-date information.</p>
                </SlideUp>
                <SlideUp className="bg-white/20 p-10">
                    <DatalakesIcon className="mx-auto mb-4 w-16 fill-white" />

                    <h2 className="text-xl font-bold mb-2">Data Lakes</h2>
                    <p>Data lakes provide a centralized repository for all types of data, enabling organizations to store and analyze massive amounts of data from diverse sources. With a well-designed data lake, companies can gain valuable insights, improve decision-making, and drive innovation.</p>
                </SlideUp>
                <SlideUp className="bg-white/20 p-10">
                    <StreamingDataIcon className="mx-auto mb-4 w-16 fill-white" />

                    <h2 className="text-xl font-bold mb-2">Streaming Data Integration</h2>
                    <p>Streaming data allows organizations to analyze and respond to data in real-time, enabling them to take immediate action based on insights. Ocelot has expertise building streaming data processing on multiple cloud platforms, designing for fault tolerance, scalability, and low latency to support different use cases and requirements.</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">See what we can accomplish together</h2>

                    <p className="text-xl leading-relaxed">
                        "The partnership with Ocelot just shows what we can accomplish when we work together. I personally spent so many years manually doing the work that this automated. This is a runway project that unlocks tremendous value."<br />
                        ─ DIRECTOR, GLOBAL FOOD AND BEVERAGE CLIENT
                    </p>
                </FadeIn>
            </Grid>
        </Section>

        <SuccessCTASection />

        <BottomCTASection setShowContact={setShowContact} />
        </>
    )
}