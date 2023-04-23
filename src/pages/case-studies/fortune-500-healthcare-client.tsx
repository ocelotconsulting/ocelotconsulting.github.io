import CaseStudyTitle from "@/components/case-studies/CaseStudyTitle";
import Section from "@/components/Section";

export default function Fortune500HealthcareClient() {
    return (
        <>
            <CaseStudyTitle subtitle="Data Management | Data Engineering | Cloud">
                Fortune 500 Healthcare Client
            </CaseStudyTitle>

            <Section>
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                    <div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-black mb-4">The Challenge</h2>

                            <p>This client’s Enterprise Data Warehouse (EDW) deployment was found lacking in performance and flexibility while high in cost. The organization had ambitions of modernization including the separation of storage and compute concerns with an elastic source of truth to empower business intelligence and analytic workloads.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-black mb-4">The Solution</h2>

                            <p className="mb-2">Operating across multiple workstreams with mixed client and professional services teams, Ocelot worked with the client’s information security office to create its first secured production AWS account. We then co-developed a serverless and event-driven Audit, Balance, & Control (ABaC) system for ETL from the EDW, and integrated the ETL process with a custom-developed metadata storage solution for data discovery and auditability. All of the contents of the EDW were then migrated into the data lake using a mixture of batch and Change Data Capture (CDC).</p>

                            <p>Then, an event-driven and container-based “materialized view” ETL of the data lake into AWS Redshift for scaled BI, and a custom portal to empower BI use and consumption (proxying, notifications, file sharing) were developed. The final step was to create the world’s first customer-managed MicroStrategy deployment on AWS EC2.</p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-light-gray p-5 border-b-4 border-b-accent mb-8">
                            <h2 className="text-2xl font-bold text-black mb-4">Successful Results</h2>

                            <p>This combination of technologies has created a more scalable and performant cloud-based data and BI environment which returns insights more quickly without BI and analytics workloads bringing the EDW to its knees.</p>
                        </div>

                        <div className="bg-light-gray p-5 border-b-4 border-b-accent">
                            <h2 className="text-2xl font-bold text-black mb-4">Technologies Used</h2>

                            <ul className="list-disc pl-5 columns-2">
                                <li>AWS</li>
                                <li>Terraform</li>
                                <li>AWS CloudWatch Logs</li>
                                <li>AWS S3 AWS Lambda</li>
                                <li>AWS Step Functions</li>
                                <li>AWS SNS</li>
                                <li>AWS DynamoDB</li>
                                <li>AWS Redshift</li>
                                <li>AWS Fargate</li>
                                <li>Apache Parquet</li>
                                <li>AWS Kinesis</li>
                                <li>Python</li>
                                <li>Node.js</li>
                                <li>Golang</li>
                                <li>MicroStrategy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}