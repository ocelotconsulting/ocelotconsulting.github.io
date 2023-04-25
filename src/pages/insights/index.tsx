import fs from 'fs'
import path from 'path'
import PageTitle from '@/components/PageTitle'
import Section from '@/components/Section'
import InsightCard, {InsightCardProps} from '@/components/insights/InsightCard'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

import banner from '@/public/insights/insights-banner.jpg'

dayjs.extend(isSameOrBefore)

export interface InsightsProps {
    posts: InsightCardProps[]
}

export default function Insights({posts}: InsightsProps) {
    const filteredPosts = posts.filter(_ => {
        const firstDate = dayjs(_.date)
        const now = dayjs()
        const isSameOrBefore = firstDate.isSameOrBefore(now, 'day')
        return isSameOrBefore
    })
    return (
        <>
        <PageTitle image={banner}>
            Insights
        </PageTitle>

        <Section className="bg-light-gray">
            <div className="grid md:grid-cols-3 gap-10">
                {filteredPosts.map(post => (
                    <InsightCard
                        key={post.title}
                        {...post}
                    />
                ))}
            </div>
        </Section>
        </>
    )
}

export async function getStaticProps() {
    const files: string[] = fs.readdirSync(path.resolve('./src/pages/insights')).filter(_ => _.endsWith('.mdx'))

    let posts = await Promise.all(files.map(async (file) => {
        const {meta} = await import(`@/pages/insights/${file}`)
        return meta
    }))

    posts = posts.sort((a, b) => {
        const aDate = dayjs(a.date)
        const bDate = dayjs(b.date)
        return aDate.diff(bDate) * -1
    })

    return {
        props: {
            posts
        }
    }
}