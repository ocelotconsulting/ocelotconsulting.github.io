import CaseStudyTitle from "@/components/case-studies/CaseStudyTitle";
import Section from "@/components/Section";

export default function Fortune500EnergyClient() {
    return (
        <>
            <CaseStudyTitle subtitle="Data Management | Data Engineering">
                Fortune 500 Energy Client
            </CaseStudyTitle>

            <Section>
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                    <div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-black mb-4">The Challenge</h2>

                            <p>This client’s on-premises enterprise data warehouse (EDW) had been stretched to its limits, no longer being able to sustain additional load. Increased adoption of Internet of Things (IoT) devices rated to greatly increase the amount of data being captured and analyzed, and the hardware supporting the EDW was reaching its End of Life. Leadership decided to migrate from their EDW and create a cloud-based data lake.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-black mb-4">The Solution</h2>

                            <p>Deployed an AWS Storage Gateway solution for receipt of EDW data (batch and Change Data Capture) from Informatica, as well as a multi-stage AWS S3 data lake with geographically-specific access to raw and processed data. Developed a customizable serverless data validation system to ingest a variety of files and formats into the data lake, and cataloged metadata using AWS Glue and used serverless ETL to convert CSV into self-describing Parquet formats. Created an Amazon Workspaces VDI solution for data scientists to interface with AWS SageMaker for Machine Learning, and presented the processed and scoped data to business intelligence tooling using AWS Athena.</p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-light-gray p-5 border-b-4 border-b-accent mb-8">
                            <h2 className="text-2xl font-bold text-black mb-4">Successful Results</h2>

                            <p>With the work performed here the organization is prepared to ingest, process, analyze, and report upon existing and imminent data in a cost-effective and elastic way which separates storage and compute concerns in an on-demand model.</p>
                        </div>

                        <div className="bg-light-gray p-5 border-b-4 border-b-accent">
                            <h2 className="text-2xl font-bold text-black mb-4">Technologies Used</h2>

                            <ul className="list-disc pl-5 columns-2">
                                <li>AWS</li>
                                <li>AWS Storage Gateway</li>
                                <li>AWS S3</li>
                                <li>AWS Lambda</li>
                                <li>AWS Step Functions</li>
                                <li>AWS DynamoDB</li>
                                <li>AWS Athena AWS EMR</li>
                                <li>Apache Parquet</li>
                                <li>AWS Workspaces</li>
                                <li>AWS SageMaker</li>
                                <li>Python | Informatica</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}