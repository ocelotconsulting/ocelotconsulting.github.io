import {Dispatch, SetStateAction} from 'react'
import ContactForm from '@/components/ContactForm'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons/faClose";

export interface ContactDrawerProps {
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
}

export default function ContactDrawer({show, setShow}: ContactDrawerProps) {
    const displayClass = show ? '' : 'hidden'
    return (
        <div className={`fixed inset-0 z-30 ${displayClass}`}>
            <div className="absolute z-0 inset-0 bg-black/60" onClick={e => setShow(false)} />
            <div className="absolute top-0 bottom-0 right-0 bg-black text-white py-20 px-10 lg:w-[640px] max-w-full sm:w-screen md:w-screen">
                <button className="absolute top-8 right-8 text-3xl" onClick={() => setShow(false)}>
                    <FontAwesomeIcon icon={faClose} />
                </button>

                <h2 className="text-5xl font-bold mb-8">
                    Have a question?
                </h2>

                { show ? <ContactForm /> : null }
            </div>
        </div>
    )
}