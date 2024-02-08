import Script from 'next/script'

export default function OneTrustScript() {
    return (
        <>
            <Script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" strategy='beforeInteractive' type="text/javascript" charSet="UTF-8" data-domain-script={process.env.NEXT_PUBLIC_ONE_TRUST_DOMAIN_SCRIPT ?? ''}></Script>
            <Script type="text/javascript" strategy='beforeInteractive'>
                {`function OptanonWrapper() { }`}
            </Script>
        </>
    )
}
