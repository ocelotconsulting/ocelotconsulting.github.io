import {Dispatch, SetStateAction} from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import MenuIcon from '@/components/icons/MenuIcon'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons/faChevronDown'

export interface HeaderProps {
    setShowMenu: Dispatch<SetStateAction<boolean>>
    setShowContact: Dispatch<SetStateAction<boolean>>
}

export default function Header({setShowMenu, setShowContact}: HeaderProps) {
    return (
        <header className="bg-black py-3 px-4 sticky top-0 z-30">
            <div className="container mx-auto flex justify-between items-center">
                <div className="w-full max-w-[230px]">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>

                <button onClick={e => setShowMenu(true)}>
                    <MenuIcon className="w-6 lg:hidden fill-white" />
                </button>

                <nav className="hidden lg:block text-white">
                    <ul className="flex">
                        <li className="group px-8 py-4 text-lg relative">
                            <Link href="/services">
                                Services
                            </Link>

                            <FontAwesomeIcon className="ml-2 text-sm" icon={faChevronDown} />

                            <div className="hidden group-hover:block absolute bg-black min-w-[200px] top-full left-0">
                                <ul>
                                    <li>
                                        <Link className="block px-8 py-2 whitespace-nowrap hover:bg-white/20" href="/services">
                                            All Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="block px-8 py-2 whitespace-nowrap hover:bg-white/20" href="/services/cloud-transformation">
                                            Cloud Transformation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="block px-8 py-2 whitespace-nowrap hover:bg-white/20" href="/services/full-stack-development">
                                            Full-Stack Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="block px-8 py-2 whitespace-nowrap hover:bg-white/20" href="/services/data-engineering">
                                            Data Engineering
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="block px-8 py-2 whitespace-nowrap hover:bg-white/20" href="/services/data-science">
                                            Data Science
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="block px-8 py-2 whitespace-nowrap hover:bg-white/20" href="/services/strategy-execution">
                                            Strategy &amp; Execution
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="px-8 py-4 text-lg">
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li className="xl:px-8 py-4 text-lg">
                            <Link href="/case-studies">
                                Case Studies
                            </Link>
                        </li>
                        <li className="px-8 py-4 text-lg">
                            <Link href="/careers">
                                Careers
                            </Link>
                        </li>
                        <li className="px-8 py-4 text-lg">
                            <Link href="/insights">
                                Insights
                            </Link>
                        </li>
                        <li className="pl-8 py-4 text-lg">
                            <a
                                href="#"
                                onClick={e => {
                                    e.preventDefault()
                                    setShowContact(true)
                                }}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
