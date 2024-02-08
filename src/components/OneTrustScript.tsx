import Script from 'next/script'

export default function OneTrustScript() {
    return (
        <>
            <Script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" strategy='beforeInteractive' type="text/javascript" charSet="UTF-8" data-domain-script="3a6bb61d-8924-4c57-a2b6-bd2306a9c5ef"></Script>
            <Script type="text/javascript" strategy='beforeInteractive'>
                {`function OptanonWrapper() { }`}
            </Script>
        </>
    )
}
