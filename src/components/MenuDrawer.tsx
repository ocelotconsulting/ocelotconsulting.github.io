import {Dispatch, SetStateAction, useState} from 'react'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight'
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons/faChevronLeft";


export interface MenuDrawerProps {
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>
    showContactForm: () => void
}

export default function MenuDrawer({show, setShow, showContactForm}: MenuDrawerProps) {
    const [showServices, setShowServices] = useState(false)
    const displayClass = show ? '' : 'hidden'
    const servicesPaneClass = showServices ? '' : 'translate-x-full'

    return (
        <div className={`fixed inset-0 z-30 ${displayClass}`}>
            <div className="absolute inset-0 z-0 bg-black/40" onClick={e => setShow(false)} />
            <div className="absolute top-0 bottom-0 right-0 bg-white text-lg overflow-hidden min-w-[300px]">

                <div className="p-10">
                    <nav>
                        <ul>
                            <li className="py-4">
                                <button className="w-full flex justify-between items-center" onClick={() => setShowServices(true)}>
                                    <span>Services</span>

                                    <FontAwesomeIcon className="ml-2 text-sm" icon={faChevronRight} />
                                </button>
                            </li>
                            <li className="py-4">
                                <Link href="/about" onClick={() => setShow(false)}>
                                    About
                                </Link>
                            </li>
                            <li className="py-4">
                                <Link href="/case-studies" onClick={() => setShow(false)}>
                                    Case Studies
                                </Link>
                            </li>
                            <li className="py-4">
                                <Link href="/careers" onClick={() => setShow(false)}>
                                    Careers
                                </Link>
                            </li>
                            <li className="py-4">
                                <Link href="/insights" onClick={() => setShow(false)}>
                                    Insights
                                </Link>
                            </li>
                            <li className="py-4">
                                <a
                                    className='lg:hidden'
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        showContactForm()
                                    }}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={`absolute inset-0 bg-white p-10 transition-transform ${servicesPaneClass}`}>
                    <div className="flex justify-between items-center">
                        <h3 className="text-accent uppercase tracking-widest">
                            Services
                        </h3>

                        <button onClick={() => setShowServices(false)}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                    </div>


                    <nav>
                        <ul>
                            <li className="py-4">
                                <Link href="/services" onClick={() => setShow(false)}>
                                    All Services
                                </Link>
                            </li>
                            <li className="py-4">
                                <Link href="/services/cloud-transformation" onClick={() => setShow(false)}>
                                    Cloud Transformation
                                </Link>
                            </li>
                            <li className="py-4">
                                <Link href="/services/full-stack-development" onClick={() => setShow(false)}>
                                    Full-Stack Development
                                </Link>
                            </li>
                            <li className="py-4">
                                <Link href="/services/data-engineering" onClick={() => setShow(false)}>
                                    Data Engineering
                                </Link>
                            </li>
                            <li className="py-4">
                                <Link href="/services/data-science" onClick={() => setShow(false)}>
                                    Data Science
                                </Link>
                            </li>
                            <li className="py-4">
                                <Link href="/services/strategy-execution" onClick={() => setShow(false)}>
                                    Strategy &amp; Execution
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}