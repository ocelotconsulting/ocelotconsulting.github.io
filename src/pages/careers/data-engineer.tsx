import PositionLayout from '@/components/careers/PositionLayout'

export default function () {
    return (
        <PositionLayout title="Data Engineer" location="St. Louis, MO / Remote" type="Full-Time">
            <p>As a Data Engineer, you will develop innovative software using distributed data processing frameworks and techniques. Ocelot Data Engineers define and build data pipelines that enable our clients to make faster, better, data-informed business decisions. You will work in a team environment with software engineers, analysts, and data scientists with the opportunity to mentor colleagues on your team and across other engineering teams.</p>

            <h3 className="text-2xl font-bold text-black">Requirements</h3>

            <ul className="list-disc pl-5">
                <li>Hands-on experience implementing, debugging, identifying performance bottlenecks and fine-tuning batch and real-time big data integration frameworks in private or public cloud using various technologies (Azure Databricks, Hadoop, Spark, Kafka, AWS EMR, etc.)</li>
                <li>Experience applying principles, best practices, and trade-offs of schema design to various types of database systems: relational (Oracle, Postgres, MySQL, etc.), NoSQL (HBase, DynamoDB, MongoDB, etc.) and in-memory (ElastiCache) with understanding and proficiency in data manipulation techniques</li>
                <li>Experience designing optimal ETL infrastructures from a variety of data sources</li>
                <li>Experience in one or more general-purpose programming languages (Java, Scala, Python, etc.)</li>
            </ul>

            <h3 className="text-2xl font-bold text-black">Nice, but not required</h3>

            <ul className="list-disc pl-5">
                <li>Experience implementing a data lake architecture</li>
                <li>Experience with cloud-based data workflow orchestration services (AWS Data Pipeline, GCP DataFlow, Azure Data Factory)</li>
                <li>Experience with Business Intelligence platforms</li>
                <li>Knowledge of API development (proper microservice separation, HTTP verb usage) and distributed microservice architectures providing elasticity, redundancy, failover, and intelligent routing</li>
                <li>Familiarity with DevOps practices, specifically understanding of OS and container management (Docker, Kubernetes, Cloud Foundry)</li>
            </ul>
        </PositionLayout>
    )
}