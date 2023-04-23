import Image from 'next/image'
import PageTitle from '@/components/PageTitle'
import Section from '@/components/Section'
import Grid from '@/components/Grid'
import SuccessCTASection from '@/components/SuccessCTASection'
import BottomCTASection from '@/components/BottomCTASection'
import StrategyIcon from '@/components/icons/StrategyIcon'
import DatalakesIcon from '@/components/icons/DatalakesIcon'
import StreamingDataIcon from '@/components/icons/StreamingDataIcon'

import develop from '@/public/services/develop-a-plan.jpg'
import chart from '@/public/services/strategy-execution_1.png'
import ctaBg from '@/public/services/strategy-cta.jpg'
import ctaMobile from '@/public/services/strategy-cta-mobile.jpg'
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export default function StrategyAndExecution({setShowContact}: any) {
    return (
        <>
        <PageTitle image={develop}>
            Strategy &amp; Execution
        </PageTitle>

        <Section>
            <Grid>
                <FadeIn className="order-2 md:order-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">Plans are useless, but planning is indispensable</h2>

                    <p className="mb-2">Ocelot always has been and always will be a technology company. That is what our clients expect and appreciate. Our deliverables are technology solutions – not just whitepapers, PowerPoint decks, or process docs. However, we are more than just builders. We can help you design what to build, teach you how to build, and manage the process with agility.</p>

                    <p><strong>Partner with Ocelot Consulting for end-to-end technology solutions that transform your business – from expert guidance and design, to agile execution and management.</strong></p>
                </FadeIn>

                <div className="md:order-2">
                    <Image src={develop} alt="" />
                </div>
            </Grid>
        </Section>

        <Section className="bg-black text-white text-center">
            <div className="grid md:grid-cols-3 gap-5">
                <SlideUp className="bg-white/20 p-10">
                    <StrategyIcon className="mx-auto mb-4 w-16 fill-white" />

                    <h2 className="text-xl font-bold mb-2">Business Strategy</h2>
                    <p>Ocelot’s expertise is grounded in a deep understanding of technology and its potential to transform businesses. We work with clients across industries to help them develop and implement innovative strategies that drive growth, increase profitability, and enhance their competitive advantage. We work closely with clients to develop strategies that are tailored to their specific needs and goals and take a collaborative approach to implementation.</p>
                </SlideUp>
                <SlideUp className="bg-white/20 p-10">
                    <DatalakesIcon className="mx-auto mb-4 w-16 fill-white" />

                    <h2 className="text-xl font-bold mb-2">Technology Strategy</h2>
                    <p>Ocelot Consulting is a trusted partner for clients seeking to develop and implement technology strategies that drive growth, innovation, and transformation. We have deep expertise in areas such as enterprise architecture, cloud computing, and data & analytics. Our teams of experienced consultants work closely with clients to identify opportunities for optimization, reduce costs, and enhance the customer experience.</p>
                </SlideUp>
                <SlideUp className="bg-white/20 p-10">
                    <StreamingDataIcon className="mx-auto mb-4 w-16 fill-white" />

                    <h2 className="text-xl font-bold mb-2">Delivery Leadership</h2>
                    <p>We strive to provide tailored solutions to meet the unique needs of each engagement. We do not have a cookie-cutter approach to project leadership, but rather bring the roles and skills that our clients agree to be valuable and beneficial. We focus on agile delivery and continuous improvement to ensure that projects are completed on time and within budget. By pragmatically adapting our approach to fit each project's specific needs and goals, we optimize performance, minimize risk, and deliver results.</p>
                </SlideUp>
            </div>
        </Section>

        <Section>
            <Grid>
                <FadeIn className="order-2 md:order-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">Strategy + Execution = Innovation</h2>

                    <p className="mb-2">To deliver innovative, transformational capabilities, you need both strategy and the ability to execute.</p>

                    <p className="mb-2">Thomas Edison said, “Having a vision for what you want is not enough. Vision without execution is hallucination.” We would also add that execution without vision is, at best, status quo.</p>

                    <p className="mb-2"><strong>Ocelot Consulting specializes in innovation practices deeply rooted in agile software development and lean startup principles.</strong></p>

                    <p>We advocate for an experiment-based, learning-centric model. We have the expertise to not only help you define a compelling vision for what is possible, but also the engineering to deliver.</p>
                </FadeIn>

                <div className="md:order-2">
                    <Image src={chart} alt="" />
                </div>
            </Grid>
        </Section>

        <Section
            style={{backgroundImage: `url(${ctaBg.src})`}}
            className="bg-cover bg-center max-lg:!bg-none bg-med-gray"
        >
            <Grid>
                <div>
                    <Image className="object-cover lg:hidden md:h-[500px]" src={ctaMobile} alt="" />
                </div>
                <div className="flex flex-col justify-center md:min-h-[500px] text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">See what we can accomplish together</h2>

                    <p className="text-xl leading-relaxed">
                        "I have been impressed how quickly the team came up to speed not only on the specific domain of the project, but also the company dynamics as well. It speaks to the quality and fit of the folks Ocelot put on the project."<br />
                        ─ DIRECTOR OF DATA STRATEGY
                    </p>
                </div>
            </Grid>
        </Section>

        <SuccessCTASection />

        <BottomCTASection setShowContact={setShowContact} />
        </>
    )
}