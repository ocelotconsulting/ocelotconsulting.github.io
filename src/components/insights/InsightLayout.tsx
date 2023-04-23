import {ReactNode} from 'react'
import Section from '@/components/Section'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendar} from '@fortawesome/free-solid-svg-icons/faCalendar'
import {faUserCircle} from '@fortawesome/free-solid-svg-icons/faUserCircle'
import Head from 'next/head'

export interface InsightLayoutProps {
    title: string
    image: string
    date: string
    author: string
    children: ReactNode
}

export default function InsightLayout({title, image, date, author, children}: InsightLayoutProps) {
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
                            <meta property="og:url" content={`/assets/insights/${image}`} />
                            <meta property="og:image" content={`/assets/insights/${image}`} />
                            <meta name="twitter:image" content={`/assets/insights/${image}`} />
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
                    {date}
                </p>
                <p className="text-white">
                    <FontAwesomeIcon className="text-accent mr-2" icon={faUserCircle} />
                    By {author}
                </p>
            </Section>

            <Section>
                {children}
            </Section>
        </>
    )
}