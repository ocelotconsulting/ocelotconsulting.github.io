import CaseStudyTitle from '@/components/case-studies/CaseStudyTitle'
import Section from '@/components/Section'

export default function Fortune500FoodConsumerProducts() {
    return (
        <>
        <CaseStudyTitle subtitle="Data Engineering">
            Fortune 500 Food Consumer Products
        </CaseStudyTitle>

        <Section>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                <div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">The Challenge</h2>

                        <p>The client needed IoT sensor data from manufacturing facilities in near real-time to improve cloud analytics, business operations, and decision making.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-black mb-4">The Solution</h2>

                        <p>Ocelot was brought in to create a data pipeline that can make roughly 2 billion manufacturing data points per day available for cloud analytics in near real-time (~15 min.) of IoT tag identification and setup at the factory:</p>

                        <ul className="list-disc pl-5">
                            <li>Standardized available data using Databricks Delta tables</li>
                            <li>Automated data ingestion with little to no required configuration</li>
                            <li>Enhanced the ability to pull ingested data using analytics and data science tools</li>
                            <li>Focused on pipeline sustainability and low maintenance cost: centralized logging, automated pipeline QA/QC alerting, automated unit testing</li>
                            <li>Built MVP for a real-time streaming solution that will be leveraged in future as factories bring new IoT devices online</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="bg-light-gray p-5 border-b-4 border-b-accent mb-8">
                        <h2 className="text-2xl font-bold text-black mb-4">Successful Results</h2>

                        <p>The automated ingestion solution was used by data scientists, data analysts, and factory staff to empower analytics work. Unlocked business value included:</p>
                        <p>- Rapid new data availability: previously two weeks, now same day</p>
                        <p>- Rapid Power BI data loading: previously hours, now minutes</p>
                        <p>- $20M of projected ROI from analytics running in production</p>
                    </div>

                    <div className="bg-light-gray p-5 border-b-4 border-b-accent">
                        <h2 className="text-2xl font-bold text-black mb-4">Technologies Used</h2>

                        <ul className="list-disc pl-5 columns-2">
                            <li>Databricks</li>
                            <li>Azure DevOps CI/CD Pipelines</li>
                            <li>Inmation IoT Server</li>
                            <li>Python Spark</li>
                            <li>Azure Monitor</li>
                            <li>Kafka</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
        </>
    )
}