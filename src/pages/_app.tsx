import '@/styles/globals.css'
import '@/styles/prism-coldark-cold.css'
import { useState } from 'react'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import localFont from 'next/font/local'
import ContactDrawer from '@/components/ContactDrawer'
import MenuDrawer from '@/components/MenuDrawer'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import Script from 'next/script'
import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

const font = localFont({
    src: [
        {path: '../../public/assets/lvnm.woff2'},
        {path: '../../public/assets/lvnm.woff'},
        {path: '../../public/assets/lvnm.ttf'},
        {path: '../../public/assets/lvnm.eot'}
    ],
})

export default function App({ Component, pageProps }: AppProps) {
    const [showMenu, setShowMenu] = useState(false)
    const [showContact, setShowContact] = useState(false)

    let origin = 'https://deploy-preview-138--romantic-austin-f85522.netlify.app'

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
            <Head>
                <title>Ocelot Consulting</title>
                <meta name='designed by' content='Fluid22' />
                <link rel="shortcut icon" href={`${origin}/assets/favicon.ico`} />
                <meta name="title" content="Modern solutions for companies seeking to innovate" />
                <meta name="description" content="Modern solutions for companies seeking to innovate" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={origin} />
                <meta property="og:title" content="Modern solutions for companies seeking to innovate" />
                <meta property="og:description" content="Modern solutions for companies seeking to innovate" />
                <meta property="og:image" content={`${origin}/assets/ocelot.svg`} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={origin} />
                <meta property="twitter:title" content="Modern solutions for companies seeking to innovate" />
                <meta property="twitter:description" content="Modern solutions for companies seeking to innovate" />
                <meta property="twitter:image" content={`${origin}/assets/ocelot.svg`} />
            </Head>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=UA-84294052-1"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-84294052-1');
                `}
            </Script>
            <div className={font.className}>
                <Header setShowMenu={setShowMenu} setShowContact={setShowContact} />
                <main>
                    <Component {...pageProps} setShowContact={setShowContact} />
                </main>
                <Footer />
                <MenuDrawer show={showMenu} setShow={setShowMenu} showContactForm={() => setShowContact(true)}/>
                <ContactDrawer show={showContact} setShow={setShowContact} />
            </div>
        </GoogleReCaptchaProvider>
    )
}
