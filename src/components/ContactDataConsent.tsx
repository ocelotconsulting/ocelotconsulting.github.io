import FormCheck from '@/components/FormCheck'
import { ChangeEventHandler } from 'react'

export interface ContactDataConsentInputProps {
    onChange: ChangeEventHandler<HTMLInputElement>
}

export default function ContactDataConsent({ onChange }: ContactDataConsentInputProps) {
    return (
    <>
        <FormCheck onChange={onChange} label={<>I agree that Accenture can process my personal data in accordance with the <a href="https://www.accenture.com/us-en/about/privacy-policy" target='_blank' className="underline hover:text-accent" title='Accenture Privacy Statement'>Accenture Privacy Statement</a>.</>} name="dataConsent" checked={false} required />

        <p>Ocelot Consulting was acquired by Accenture on November 27, 2023.</p>
    </>
    )
}
