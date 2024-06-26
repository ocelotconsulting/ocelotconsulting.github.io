import '@/styles/globals.css'
import '@/styles/prism-coldark-cold.css'
import { useState } from 'react'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OneTrustScript from '@/components/OneTrustScript'
import ContactDrawer from '@/components/ContactDrawer'
import MenuDrawer from '@/components/MenuDrawer'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import Script from 'next/script'
import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
import { Roboto_Mono, Figtree } from 'next/font/google'

const figtree = Figtree({
    subsets: ['latin'],
    weight: ['300'],
    display: 'swap',
    variable: '--font-figtree',
})

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono',
})

export default function App({ Component, pageProps }: AppProps) {
    const [showMenu, setShowMenu] = useState(false)
    const [showContact, setShowContact] = useState(false)

    let origin = 'https://www.ocelotconsulting.com'

    if (typeof window !== 'undefined') {
        origin = window.location.origin
    }

    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_ANALYTICS_ID ?? ''}
            scriptProps={{
                async: false,
                defer: false,
                appendTo: "head",
                nonce: undefined,
            }}
        >
            <style jsx global>
                {`
                    :root,:host {
                        --font-roboto-mono: ${robotoMono.style.fontFamily};
                        --font-figtree: ${figtree.style.fontFamily};
                    }
                `}
            </style>
            <Head>
                <title>Ocelot Consulting, Part of Accenture</title>
                <meta name='designed by' content='Fluid22' />
                <link rel="shortcut icon" href={`${origin}/assets/ocelot.svg`} />
                <meta name="description" content="Modern solutions for companies seeking to innovate" />
                <meta property="og:description" content="Modern solutions for companies seeking to innovate" />
                <meta name="twitter:description" content="Modern solutions for companies seeking to innovate" />
                <meta property="og:image" content={`${origin}/assets/ocelot.svg`} />
                <meta property="og:image:type" content="image/svg+xml" />
                <meta name="twitter:image" content={`${origin}/assets/ocelot.svg`} />
            </Head>
            <OneTrustScript />
            <Header setShowMenu={setShowMenu} setShowContact={setShowContact} />
            <main>
                <Component {...pageProps} setShowContact={setShowContact} />
            </main>
            <Footer />
            <MenuDrawer show={showMenu} setShow={setShowMenu} showContactForm={() => setShowContact(true)}/>
            <ContactDrawer show={showContact} setShow={setShowContact} />
        </GoogleReCaptchaProvider>
    )
}
