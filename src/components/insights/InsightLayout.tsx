import {ReactNode} from 'react'
import Section from '@/components/Section'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendar} from '@fortawesome/free-solid-svg-icons/faCalendar'
import {faUserCircle} from '@fortawesome/free-solid-svg-icons/faUserCircle'
import Head from 'next/head'
import dayjs from 'dayjs'

export interface InsightLayoutProps {
    title: string
    image: string
    date: string
    author: string
    url: string
    children: ReactNode
}

export default function InsightLayout({title, image, date, author, children, url}: InsightLayoutProps) {
    let origin = 'https://www.ocelotconsulting.com'

    if (typeof window !== 'undefined') {
        origin = window.location.origin
    }

    return (
        <>
            <Head>
                <meta name="author" content={author} />
                <meta name="description" content={title} />
                <meta property="og:description" content={title} />
                <meta name="twitter:description" content={title} />

                {/* <!-- Open Graph tags. --> */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />

                {/* <!-- Twitter tags. --> */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ocelot_llc" />
                <meta name="twitter:title" content={title} />

                { !!image
                    ?   <>
                            <meta property="og:url" content={`${origin}${url}`} />
                            <meta property="og:image" content={`${origin}/assets/insights/${image}`} />
                            <meta name="twitter:image" content={`${origin}/assets/insights/${image}`} />
                        </>
                    :   null
                }

            </Head>
            <Section
                style={{backgroundImage: `url(/assets/insights/${image})`}}
                className="bg-cover bg-center md:min-h-[370px] flex flex-col justify-center"
                backLayer={<div className="absolute inset-0 bg-black/40" />}
            >
                <h1 className="text-4xl md:text-7xl font-bold text-white md:text-left text-center">{title}</h1>
                <p className="text-white">
                    <FontAwesomeIcon className="text-accent mr-2" icon={faCalendar} />
                    {dayjs(date).format('MMMM D, YYYY')}
                </p>
                <p className="text-white">
                    <FontAwesomeIcon className="text-accent mr-2" icon={faUserCircle} />
                    By {author}
                </p>
            </Section>

            <Section className='prose lg:prose-xl max-w-none prose-code:before:hidden prose-code:after:hidden'>
                {children}
            </Section>
        </>
    )
}