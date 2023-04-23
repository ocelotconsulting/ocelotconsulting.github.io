import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/Logo'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons/faPhone'
import {faMapMarker} from '@fortawesome/free-solid-svg-icons/faMapMarker'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons/faLinkedinIn'

import aws from '@/public/aws-white.png'
import gcp from '@/public/gc-white.png'
import azure from '@/public/azure-white.png'

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="container px-4 py-12 mx-auto lg:flex">
                <div className="px-4 lg:w-2/5 lg:pl-0 lg:pr-16 mb-8 lg:mb-0">
                    <div className="w-full max-w-[230px] mb-10 mx-auto lg:mx-0">
                        <Logo />
                    </div>

                    <div className="flex items-center lg:px-0 md:px-16">
                        <div className="w-1/3 pr-4">
                            <Image src={aws} alt="Amazon Web Services" />
                        </div>
                        <div className="w-1/3 px-4 border-l border-r border-white/10">
                            <Image src={gcp} alt="Google Cloud" />
                        </div>
                        <div className="w-1/3 pl-4">
                            <Image src={azure} alt="Microsoft Azure" />
                        </div>
                    </div>
                </div>
                <div className="grow text-center lg:text-left mb-8 md:mb-0">
                    <h3 className="text-lg font-bold mb-3">Who We Are</h3>
                    <nav className="leading-loose">
                        <ul>
                            <li>
                                <Link className="hover:text-accent" href="/">Home</Link>
                            </li>
                            <li>
                                <Link className="hover:text-accent" href="/about">About</Link>
                            </li>
                            <li>
                                <Link className="hover:text-accent" href="/careers">Careers</Link>
                            </li>
                            <li>
                                <Link className="hover:text-accent" href="/insights">Insights</Link>
                            </li>
                            <li>
                                <Link className="hover:text-accent" href="/case-studies">Case Studies</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="grow text-center lg:text-left mb-8 md:mb-0">
                    <h3 className="text-lg font-bold mb-3">Our Services</h3>
                    <nav className="leading-loose">
                        <ul>
                            <li>
                                <Link className="hover:text-accent" href="/services/cloud-transformation">Cloud Transformation</Link>
                            </li>
                            <li>
                                <Link className="hover:text-accent" href="/services/full-stack-development">Full-Stack Development</Link>
                            </li>
                            <li>
                                <Link className="hover:text-accent" href="/services/data-engineering">Data Engineering</Link>
                            </li>
                            <li>
                                <Link className="hover:text-accent" href="/services/data-science">Data Science</Link>
                            </li>
                            <li>
                                <Link className="hover:text-accent" href="/services/strategy-execution">Strategy & Execution</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="grow text-center lg:text-left">
                    <h3 className="text-lg font-bold mb-3">Get In Touch</h3>

                    <div className="mb-3">
                        <a className="flex items-center justify-center lg:justify-start hover:text-accent" href="tel:(314) 384-3225">
                            <FontAwesomeIcon className="mr-4" icon={faPhone} />
                            <div>(314) 384-3225</div>
                        </a>
                    </div>

                    <div className="mb-3">
                        <a className="flex items-center justify-center lg:justify-start hover:text-accent" href="https://goo.gl/maps/AGhk1LsPnY66R3VL8">
                            <FontAwesomeIcon className="mr-4" icon={faMapMarker} />
                            <div>
                                Ocelot Consulting<br />
                                11477 Olde Cabin Road<br />
                                Suite 320<br />
                                St. Louis, MO 63141
                            </div>
                        </a>
                    </div>

                    <div>
                        <a className="flex items-center justify-center lg:justify-start hover:text-accent" href="https://www.linkedin.com/company/ocelot-consulting-llc/">
                            <FontAwesomeIcon className="mr-4" icon={faLinkedinIn} />
                            <div>LinkedIn</div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-dark-gray p-4 text-xs">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between">
                    <div className="text-center">
                        &copy; {(new Date()).getFullYear()} Ocelot Consulting. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}