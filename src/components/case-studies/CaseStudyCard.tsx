import Image from 'next/image'
import Link from 'next/link'

export interface CaseStudyCardProps {
    level: string
    icon: string
    industry: string
    blurb: string
    slug: string
}

export default function CaseStudyCard({level, icon, industry, blurb, slug}: CaseStudyCardProps) {
    return (
        <div className="bg-light-gray border-4 border-white">
            <div className="bg-white text-center text-sm text-black uppercase tracking-widest py-2">
                {level}
            </div>
            <div className="p-4 text-center min-h-[500px]">
                <Image className="mx-auto mb-2" src={`/assets/index/${icon}`} alt={industry} width={20} height={20} />
                <h3 className="text-xl font-bold text-black mb-2">{industry}</h3>
                <p>{blurb}</p>
            </div>
            <div className="bg-white text-center text-sm uppercase tracking-widest py-2">
                <Link className="text-accent uppercase" href={`/case-studies/${slug}`}>
                    Explore This Case Study
                </Link>
            </div>
        </div>
    )
}