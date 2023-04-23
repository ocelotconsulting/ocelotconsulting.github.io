import PositionLayout from '@/components/careers/PositionLayout'

export default function () {
    return (
        <PositionLayout title="Entry-Level Technology Consultant" location="St. Louis, MO / Remote" type="Full-Time">
            <p>Ocelot teams are empowered to own all facets of development including frontend, backend, infrastructure, and data pipelines. We are looking for entry-level candidates who are enthusiastic and capable of learning and contributing wherever needed.</p>

            <p>Our senior consultants are excited to provide coaching, mentoring, and development opportunities to help accelerate your career and provide experience in many of the following areas:</p>

            <h3 className="text-2xl font-bold text-black">General Skills</h3>

            <ul className="list-disc pl-5">
                <li>Working in an agile, team-oriented environment</li>
                <li>Common CI/CD and version control technologies (Jenkins, Git, etc.)</li>
                <li>Understanding of DevOps responsibilities including OS and Container Management</li>
                <li>Practical understanding of architecture security best practices</li>
                <li>Basic Linux OS setup and configuration</li>
            </ul>

            <h3 className="text-2xl font-bold text-black">Cloud</h3>

            <ul className="list-disc pl-5">
                <li>Maintaining infrastructure on a major cloud provider (AWS, GCP, Azure)</li>
                <li>Using common infrastructure-as-code toolsets (Terraform, CloudFormation, Cloud Deployment Manager)</li>
                <li>Common infrastructure automation languages (Python, Golang, PowerShell, etc.)</li>
                <li>Creating, configuring, and running containers (Docker, Kubernetes, etc.)</li>
            </ul>

            <h3 className="text-2xl font-bold text-black">Dev</h3>

            <ul className="list-disc pl-5">
                <li>Developing cloud-native applications and deploying to a cloud environment</li>
                <li>General-purpose programming languages (JavaScript, Java, .NET, Scala, etc.)</li>
                <li>Developing distributed microservice architectures providing elasticity, redundancy, failover, and intelligent routing</li>
                <li>SPA Framework experience such as React, Angular, etc.</li>
            </ul>

            <h3 className="text-2xl font-bold text-black">Data</h3>

            <ul className="list-disc pl-5">
                <li>Applying principles, best practices, and trade-offs of schema design to various types of database systems: relational (Oracle, Postgres, MySQL, etc.), NoSQL (HBase, DynamoDB, MongoDB, etc.) and in-memory (ElastiCache) with understanding and proficiency in data manipulation techniques</li>
                <li>Hands-on experience implementing, debugging, identifying performance bottlenecks, and fine-tuning batch and real-time Big Data integration frameworks in private or public cloud using various technologies (Hadoop, Spark, Kafka, AWS EMR, etc.)</li>
            </ul>
        </PositionLayout>
    )
}


