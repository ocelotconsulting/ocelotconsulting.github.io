import Image from 'next/image'
import PageTitle from '@/components/PageTitle'
import Section from '@/components/Section'
import HeartBeatIcon from '@/components/icons/HeartBeatIcon'
import HeadGearIcon from '@/components/icons/HeadGearIcon'
import MoneyHandshakeIcon from '@/components/icons/MoneyHandshakeIcon'
import CalendarCheckIcon from '@/components/icons/CalendarCheckIcon'
import CareersForm from '@/components/careers/CareersForm'

import banner from '@/public/careers/careers-banner.jpg'
import launch from '@/public/careers/launch-your-career.jpg'
import workWith from '@/public/careers/work-with-a-company.jpg'
import interview from '@/public/careers/interview.jpg'
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

export default function Careers() {
    return (
        <>
        <PageTitle image={banner}>
            Your Ocelot Career
        </PageTitle>

        <Section>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                <Image className="object-cover bg-center" src={launch} alt="" />
                <div>
                    <p className="tracking-widest uppercase mb-1">
                        Find out if Ocelot is right for you.
                    </p>
                    <h2 className="text-3xl lg:text-5xl font-bold text-black mb-2">
                        Join a team that loves technology as much as you do.
                    </h2>

                    <p>
                        Discover the difference working for a tech company that was founded and run by technology experts.
                    </p>

                    <div className="mt-5 grid md:grid-cols-2 gap-5">
                        <FadeIn>
                            <h3 className="text-xl font-bold text-black mb-2">
                                Partnership
                            </h3>
                            <p>
                                Our clients appreciate our pragmatic, no-nonsense approach. We don't hard sell specific methodologies or technologies. Instead, we partner to find the right approach and solution for each unique challenge.
                            </p>
                        </FadeIn>

                        <FadeIn>
                            <h3 className="text-xl font-bold text-black mb-2">
                                Experience
                            </h3>
                            <p>
                                We strive for technical and operational excellence in everything we do. To constantly improve, we recruit employees who not only have skills that we need today but are motivated to learn and develop the skills that will be needed in the future.
                            </p>
                        </FadeIn>

                        <FadeIn>
                            <h3 className="text-xl font-bold text-black mb-2">
                                Integrity
                            </h3>
                            <p>
                                We will always do what is right, not necessarily what is fastest or easiest. We don't need order takers; we need problem solvers.
                            </p>
                        </FadeIn>

                        <FadeIn>
                            <h3 className="text-xl font-bold text-black mb-2">
                                Inclusion
                            </h3>
                            <p>
                                Our differences make us stronger. At Ocelot Consulting, we work hard to foster a sense of belonging where everyone feels valued and every voice is heard.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </Section>

        <Section className="bg-light-gray">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 items-center">
                <FadeIn>
                    <h2 className="text-3xl lg:text-5xl font-bold text-black mb-2">
                        Why you'll love working at Ocelot
                    </h2>

                    <ul className="list-disc columns-2 pl-5">
                        <li className='break-inside-avoid'>We only take work that is on brand - modern technology, not legacy support</li>
                        {/* <li className='break-inside-avoid'>Work with Modern technologies</li> */}
                        <li className='break-inside-avoid'>Great people - everyone is willing to help. High degrees of trust, autonomy, and accountability</li>
                        {/* <li className='break-inside-avoid'>High degree of trust, autonomy and cooperation</li> */}
                        <li className='break-inside-avoid'>Flat organization</li>
                        <li className='break-inside-avoid'>High transparency</li>
                        <li className='break-inside-avoid'>We deliver real solutions, not just white papers and PowerPoints</li>
                        <li className='break-inside-avoid'>We don't hire you to fit our culture, we hire you to help us grow our culture</li>
                        <li className='break-inside-avoid'>Low overhead</li>
                        <li className='break-inside-avoid'>Vibrant internal Slack community</li>
                    </ul>
                </FadeIn>
                <div>
                    <Image className="object-cover h-[450px]" src={workWith} alt="Why you'll love working at Ocelot" />
                </div>
            </div>
        </Section>

        <Section className="bg-black text-white">
            <div className="grid md:grid-cols-2 gap-16">
                <FadeIn>
                    <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6">
                        Open positions
                    </h2>

                    <div className="grid md:grid-cols-2 gap-5">
                        <Link href="/careers/entry-level-technology-consultant" className="block bg-white/20 p-5 text-center">
                            <h3 className="text-xl font-bold">Entry-Level Technology Consultant</h3>
                            <p>Full-Time</p>
                            <p>St. Louis, MO / Remote</p>
                        </Link>

                        <Link href="/careers/cloud-engineer" className="block bg-white/20 p-5 text-center">
                            <h3 className="text-xl font-bold">Cloud Engineer</h3>
                            <p>Full-Time</p>
                            <p>St. Louis, MO / Remote</p>
                        </Link>

                        <Link href="/careers/data-engineer" className="block bg-white/20 p-5 text-center">
                            <h3 className="text-xl font-bold">Data Engineer</h3>
                            <p>Full-Time</p>
                            <p>St. Louis, MO / Remote</p>
                        </Link>

                        <Link href="/careers/full-stack-developer" className="block bg-white/20 p-5 text-center">
                            <h3 className="text-xl font-bold">Full-Stack Developer</h3>
                            <p>Full-Time</p>
                            <p>St. Louis, MO / Remote</p>
                        </Link>
                    </div>
                </FadeIn>

                <FadeIn>
                    <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6">
                        Great benefits
                    </h2>

                    <ul className="text-xl">
                        <li className="flex items-center mb-5">
                            <HeartBeatIcon className="fill-white w-8 h-auto shrink-0" />
                            <span className="ml-5">Comprehensive medical, dental, and vision benefits plus disability and a 401(k) plan</span>
                        </li>
                        <li className="flex items-center mb-5">
                            <HeadGearIcon className="fill-white w-8 h-auto shrink-0" />
                            <span className="ml-5">Learning & development through certifications, training, and conferences</span>
                        </li>
                        <li className="flex items-center mb-5">
                            <MoneyHandshakeIcon className="fill-white w-8 h-auto shrink-0" />
                            <span className="ml-5">Competitive salaries</span>
                        </li>
                        <li className="flex items-center">
                            <CalendarCheckIcon className="fill-white w-8 h-auto shrink-0" />
                            <span className="ml-5">Generous PTO and time-away programs</span>
                        </li>
                    </ul>
                </FadeIn>
            </div>
        </Section>

        <Section className="bg-black/50 text-white">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <FadeIn>
                    <Image src={interview} alt="" />
                </FadeIn>
                <FadeIn>
                    <h2 className="text-5xl font-bold mb-2">
                        What to expect in the interview process
                    </h2>

                    <p className="mb-2">Our interview process is designed to respect your time and expertise, while allowing us to get to know each other and see if there is a mutual fit.</p>

                    <ul className="list-disc pl-5">
                        <li>Informal recruiter conversation</li>
                        <li>Short collaborative technical interview</li>
                        <li>Team meet and greets</li>
                        <li>Offer letter</li>
                    </ul>
                </FadeIn>
            </div>
        </Section>

        <Section>
            <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-5">
                See if your career lies with Ocelot
            </h2>

            <div className="max-w-[900px] mx-auto">
                <CareersForm />
            </div>
        </Section>
        </>
    )
}
