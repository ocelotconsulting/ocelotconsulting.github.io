import FormInput from '@/components/FormInput'
import FormTextArea from "@/components/FormTextArea";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const tokenRefreshInterval = 1000 * 60 * 1.75

export default function CareersForm() {
    const router = useRouter()
    const { executeRecaptcha } = useGoogleReCaptcha()
    const [token, setToken] = useState('')

    useEffect(() => {
        if (!executeRecaptcha) {
            return;
        }

        const handleReCaptchaVerify = async () => {
            const token = await executeRecaptcha();
            setToken(token);
        };

        handleReCaptchaVerify();

        const interval = setInterval(handleReCaptchaVerify, tokenRefreshInterval)
        return () => {
            clearInterval(interval)
        }
    }, [executeRecaptcha])

    return (
        <form action={`${process.env.NEXT_PUBLIC_CONTACT_FORM_URL}`} method="POST">
            <div className="grid grid-cols-1 gap-5">
                <input type="hidden" id="_to" name="_to" value={process.env.NEXT_PUBLIC_CONTACT_FORM_TO} />
                <input type="hidden" id="_honeypot" name="_honeypot" value="" />
                <input type="hidden" id="_recaptcha" name="_recaptcha" value={token} />
                <input type="hidden" name="_redirect" value={`https://ocelotconsulting.com${router.asPath}`} />
                <FormInput label="Name" name="name" value="" required />
                <div className="grid grid-cols-2 gap-5">
                    <FormInput label="Phone" name="phone" value="" required />
                    <FormInput label="Email" name="email" value="" required />
                </div>
                <FormInput label="LinkedIn Profile" name="linkedin" value="" />
                <FormTextArea label="Tell us why you think you'd be a good fit:" name="message" value=""/>
                <button className="bg-accent text-white px-6 py-3 w-full" type="submit" disabled={!token}>
                    Submit
                </button>

                <small className='text-xs'>
                    <span>This site is protected by reCAPTCHA and the Google </span>
                    <a className='underline decoration-dashed' href="https://policies.google.com/privacy">Privacy Policy</a>
                    <span> and </span>
                    <a className='underline decoration-dashed' href="https://policies.google.com/terms">Terms of Service</a>
                    <span> apply.</span>
                </small>
            </div>
        </form>
    )
}