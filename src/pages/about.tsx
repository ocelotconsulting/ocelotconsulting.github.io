import * as path from 'path'
import { promises as fs } from 'fs'
import Image from 'next/image'
import PageTitle from '@/components/PageTitle'
import Section from '@/components/Section'
import Button from '@/components/Button'
import BottomCTASection from '@/components/BottomCTASection'
import TeamMember, {TeamMemberProps} from '@/components/about/TeamMember'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp} from '@fortawesome/free-regular-svg-icons/faThumbsUp'
import {faThumbsDown} from '@fortawesome/free-regular-svg-icons/faThumbsDown'

import banner from '@/public/about/about-banner.jpg'
import ourOrigins from '@/public/about/our-origins.jpg'
import leaders from '@/public/about/leaders.jpg'
import weMeetYou from '@/public/about/we-meet-you.jpg'
import ctaBg from '@/public/about/about-cta.jpg'
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export default function About({team, setShowContact}: any) {
    return (
        <>
        <PageTitle image={banner}>
            About
        </PageTitle>

        <Section
            style={{backgroundImage: `url(${ourOrigins.src})`}}
            className="mx-5 bg-left bg-no-repeat bg-[length:65%_auto] md:!py-0 px-0 sm:bg-none max-md:!bg-none"
        >
            <div className="grid md:grid-cols-2 gap-5">
                <div>
                    <Image className="md:hidden" src={ourOrigins} alt='' />
                </div>
                <div className="bg-white md:p-16 text-center md:text-left">
                    <p className="tracking-widest mb-2">NOT YOUR TYPICAL CONSULTING FIRM</p>
                    <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4">Origin Story</h2>
                    <p className="mb-2">Ocelot Consulting was formed in 2016 by four former software engineering colleagues at a large St. Louis-based corporation. Their goal was to share the transformational lessons learned (Agility, Cloud, Security, DevOps) with other companies in the region.</p>
                    <p className="mb-2"><strong>You will notice the difference working with a company that was founded by technologists and is run by technologists. It is a refreshing, no-nonsense approach to solution delivery that our clients appreciate.</strong></p>
                    <p>That customer satisfaction has fueled our growth as we continue to expand our presence regionally and nationwide.</p>
                </div>
            </div>
        </Section>

        <Section>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 items-center">
                <FadeIn className="order-2 md:order-1 text-center md:text-left">
                    <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4">We meet you where you are</h2>
                    <p className="mb-2">We appreciate that every company is at a different spot in its transformation journey. Our expertise is in understanding where our clients are, where they want to go, and collaborating on a practical plan to get there.</p>
                    <p className="mb-2">We understand that sometimes this change must be incremental, and we will never try to force a technology or solution that our clients are unable to consume.</p>
                    <p className="mb-2">Transformation requires comprehensive change management that includes engaging and partnering with client Enterprise Architecture, Program Management, Information Security, and Application Development teams.</p>
                    <p><strong>We are uniquely prepared to provide recommendations and lessons learned from real-world implementations.</strong></p>
                </FadeIn>
                <div className="md:order-2">
                    <Image src={weMeetYou} alt="" />
                </div>
            </div>
        </Section>

        <Section className="bg-light-gray">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 items-center">
                <div>
                    <Image src={leaders} alt="" />
                </div>
                <FadeIn className="text-center md:text-left">
                    <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4">We know you, because we were you</h2>
                    <p className="mb-2">Ocelot Consulting’s senior leadership is proud of our backgrounds rooted in Enterprise IT. We’ve cultivated a deep appreciation for what makes successful (and unsuccessful) partnerships. We understand the opportunities and the challenges of transforming established corporations.</p>
                    <p><strong>Ocelot Consulting strives to be the type of company that our founders always wanted as a partner.</strong></p>
                </FadeIn>
            </div>
        </Section>

        <Section className="bg-black text-white">
            <div className="grid md:grid-cols-2 gap-5">
                <SlideUp className="bg-white/20 p-10">
                    <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4">What we are&hellip;</h2>
                    <ul className="text-xl">
                        <li className="mb-2">
                            <FontAwesomeIcon className="mr-2" icon={faThumbsUp} />
                            Partner to deliver strategic initiatives
                        </li>
                        <li className="mb-2">
                            <FontAwesomeIcon className="mr-2" icon={faThumbsUp} />
                            Able to embrace each client's unique needs
                        </li>
                        <li className="mb-2">
                            <FontAwesomeIcon className="mr-2" icon={faThumbsUp} />
                            Technology agnostic
                        </li>
                        <li>
                            <FontAwesomeIcon className="mr-2" icon={faThumbsUp} />
                            Engineering to the core
                        </li>
                    </ul>
                </SlideUp>
                <SlideUp className="bg-white/20 p-10">
                    <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4">What we are not&hellip;</h2>
                    <ul className="text-xl">
                        <li className="mb-2">
                            <FontAwesomeIcon className="mr-2" icon={faThumbsDown} />
                            Staffing agency, staff augmentation, or offshoring
                        </li>
                        <li className="mb-2">
                            <FontAwesomeIcon className="mr-2" icon={faThumbsDown} />
                            One-size-fits-all processes or methodologies
                        </li>
                        <li className="mb-2">
                            <FontAwesomeIcon className="mr-2" icon={faThumbsDown} />
                            Technology reseller
                        </li>
                        <li>
                            <FontAwesomeIcon className="mr-2" icon={faThumbsDown} />
                            All sales and marketing
                        </li>
                    </ul>
                </SlideUp>
            </div>
        </Section>

        <Section
            style={{backgroundImage: `url(${ctaBg.src})`}}
            className="bg-cover md:bg-center bg-left"
        >
            <FadeIn className="flex flex-col justify-center md:w-2/5 md:min-h-[500px] text-center md:text-left">
                <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4">Our goal is to get better, together</h2>
                <p className="mb-2">We not only deliver on our commitments, but we care just as much about developing the skills and capabilities of our clients.</p>
                <p className="mb-4">While collaborating, we provide coaching, training, and mentoring to ensure that our clients are fully prepared to support, run, and maintain the solutions after our engagement is complete.</p>

                <div>
                    <Button href="/case-studies">
                        Browse Our Success Stories
                    </Button>
                </div>
            </FadeIn>
        </Section>

        <Section>
            <h2 className="text-3xl lg:text-5xl font-bold text-black text-center mb-8">
                Meet the Ocelots
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {team.map((teamMember: TeamMemberProps) => (
                    <TeamMember
                        key={teamMember.name}
                        image={teamMember.image}
                        name={teamMember.name}
                        title={teamMember.title}
                    />
                ))}
            </div>
        </Section>

        <BottomCTASection setShowContact={setShowContact} />
        </>
    )
}

export async function getStaticProps() {
    const dataDirectory = path.join(process.cwd(), 'data')
    const teamJson = await fs.readFile(dataDirectory + '/team.json', 'utf8')

    const team = (JSON.parse(teamJson) as any[]).map<any>(_ => ({
        name: `${_.firstName} ${_.lastName}`,
        sortBy: `${_.lastName},${_.firstName}`,
        image: `${_.firstName.replaceAll(' ', '_')}_${_.lastName.replaceAll("’", '').replaceAll("'", '')}.jpeg`,
        ..._
    }))

    team.sort((a, b) => a.sortBy.localeCompare(b.sortBy))

    return {
        props: {
            team
        }
    }
}