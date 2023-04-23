import {ReactNode} from 'react'
import Image from 'next/image'

export interface CaseStudyCardProps {
    level: string
    icon: ReactNode
    industry: string
    blurb: string
}

export default function CaseStudyCard({level, icon, industry, blurb}: CaseStudyCardProps) {
    return (
        <div className="border-4 border-light-gray">
            <div className="bg-light-gray text-center text-sm uppercase tracking-widest py-2">
                {level}
            </div>
            <div className="p-4 text-center min-h-[270px]">
                <Image className="mx-auto mb-2" src={`/assets/index/${icon}`} alt={industry} width={20} height={20} />
                <h3 className="text-xl font-bold mb-2">{industry}</h3>
                <p>{blurb}</p>
            </div>
        </div>
    )
}