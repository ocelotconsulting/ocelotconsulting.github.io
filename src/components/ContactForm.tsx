import { FormEvent, useEffect, useState, Dispatch, SetStateAction } from 'react'
import FormInput from '@/components/FormInput'
import FormTextArea from '@/components/FormTextArea'
import ContactDataConsent from '@/components/ContactDataConsent';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useRouter } from 'next/router'

const tokenRefreshInterval = 1000 * 60 * 1.75

export default function ContactForm({ showDrawer, redirectTarget }: { showDrawer: Dispatch<SetStateAction<boolean>>, redirectTarget?: string }) {
    const router = useRouter()
    const { executeRecaptcha } = useGoogleReCaptcha()
    const [token, setToken] = useState('')
    const [dataConsent, setDataConsent] = useState(false)
    const [error, setError] = useState<string | null>(null)

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
    }, [executeRecaptcha]);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!token || !dataConsent)
            return;

        try {
            const formData = new FormData(event.currentTarget);
            const response = await fetch(`${process.env.NEXT_PUBLIC_CONTACT_FORM_URL}`, {
                method: 'POST',
                body: formData,
                redirect: 'manual',
            })
            
            // Checking status directly because we may get a redirect for OK
            if (response.status < 400) {
                event.currentTarget.reset();
                setError("The request was sent. We look forward to speaking with you soon!");

                setTimeout(() => { setError(null); showDrawer(false); }, 5000);
            } else {
                throw new Error("Invalid response from postback.");
            }
        } catch (error) {
            setError("Please check the form and try again.");
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 gap-5">
                <input type="hidden" id="_to" name="_to" value={process.env.NEXT_PUBLIC_CONTACT_FORM_TO} />
                <input type="hidden" id="_honeypot" name="_honeypot" value="" />
                <input type="hidden" id="_recaptcha" name="_recaptcha" value={token} />
                <input type="hidden" name="_redirect" value={redirectTarget ?? `https://ocelotconsulting.com${router.asPath}`} />
                <FormInput label="Name" name="name" value="" onChange={undefined} required/>
                <FormInput label="Email" type="email" name="email" value="" required/>
                <FormInput label="Phone" type="tel" name="phone" value="" />

                <FormTextArea label="Questions or Comments" name="message" value="" />

                <ContactDataConsent onChange={evt => setDataConsent(evt.target.checked)} />

                <button className="bg-dark-gray enabled:bg-accent text-white px-6 py-3 w-full" type="submit" disabled={!token || !dataConsent}>
                    Submit
                </button>

                {error && <div className="bg-dark-gray border text-accent px-4 py-3 rounded relative">{error}</div>}

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