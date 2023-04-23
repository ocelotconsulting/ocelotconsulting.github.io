import Image, {StaticImageData} from 'next/image'
import Link from 'next/link'

export interface InsightCardProps {
    title: string
    description: string
    url: string
    image: string
    date: string
    author: string
}

export default function InsightCard({title, description, url, image}: InsightCardProps) {
    return (
        <article className="bg-white rounded">
            <Link href={url}>
                <Image className="object-cover w-full h-[280px]" src={`/assets/insights/${image}`} alt={title} width={421} height={281} />
            </Link>

            <div className="p-4 flex flex-col justify-between">
                <div className='grow'>
                    <Link href={url}>
                        <h2 className="text-xl font-bold text-black mb-6">{title}</h2>
                    </Link>
                    <p className="mb-6">{description}</p>
                </div>

                <Link className="text-sm text-accent uppercase" href={url}>
                    Read More »
                </Link>
            </div>
        </article>
    )
}