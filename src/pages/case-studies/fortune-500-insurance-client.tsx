import CaseStudyTitle from "@/components/case-studies/CaseStudyTitle";
import Section from "@/components/Section";

export default function Fortune500InsuranceClient() {
    return (
        <>
            <CaseStudyTitle subtitle="Data Management | Cloud | Application Dev.">
                Fortune 500 Insurance Client
            </CaseStudyTitle>

            <Section>
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                    <div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-black mb-4">The Challenge</h2>

                            <p>Facing increased demands for reporting while assuring compliance and auditability with data protection regulations such as GDPR and CCPA, their tooling was no longer able to perform critical business functions. Ocelot Consulting was engaged to modernize the environment so the current needs for reporting and fiscal closures could be met while paving the way for more sustainable & advanced analytics.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-black mb-4">The Solution</h2>

                            <p className="mb-2">Ocelot partnered with the client to take a modern “big data in the cloud” approach:</p>

                            <ul className="list-disc pl-5">
                                <li>Began converting ETL and enrichment functions from a custom .NET application to Cloudera Spark jobs, and guided the organization away from CSVs and row-based systems and toward Parquet and column-based systems</li>
                                <li>Created an AWS S3 data lake and developed a custom API for it to enable role-based access control (RBAC) and auditing, and integrated the RBAC API with the client’s Active Directory (AD) system using ServiceNow for rapid and logged approvals</li>
                                <li>Guided the organization away from Excel reporting and toward systems such as Tableau and Jupyter, and developed a Java Database Connectivity (JDBC) driver to provide RBAC for fine-grained access to the data lake</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="bg-light-gray p-5 border-b-4 border-b-accent mb-8">
                            <h2 className="text-2xl font-bold text-black mb-4">Successful Results</h2>

                            <p>The organization is radically more empowered to generate current and future reports using current-standard enterprise and open-source tooling while serving as a lighthouse for other data & analytics approaches.</p>
                        </div>

                        <div className="bg-light-gray p-5 border-b-4 border-b-accent">
                            <h2 className="text-2xl font-bold text-black mb-4">Technologies Used</h2>

                            <ul className="list-disc pl-5 columns-2">
                                <li>AWS</li>
                                <li>Terraform</li>
                                <li>Cloudera Hadoop</li>
                                <li>Cloudera Spark</li>
                                <li>AWS S3</li>
                                <li>Presto</li>
                                <li>Apache Parquet</li>
                                <li>AWS Glue</li>
                                <li>AWS Lambda</li>
                                <li>Python</li>
                                <li>Node.js</li>
                                <li>.NET</li>
                                <li>MS Active Directory</li>
                                <li>ServiceNow</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}