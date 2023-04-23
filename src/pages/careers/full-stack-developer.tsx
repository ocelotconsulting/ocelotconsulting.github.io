import PositionLayout from '@/components/careers/PositionLayout'

export default function() {
    return (
        <PositionLayout title="Full-Stack Developer" location="St. Louis, MO / Remote" type="Full-Time">
            <p>At Ocelot, full-stack developers work as a team to build modern, cloud-native products with our clients. Teams are empowered to own all facets of development including frontend, backend, infrastructure, and data pipelines. An ideal candidate will enjoy being a generalist – not expected to be an expert in all of these, but enthusiastic and capable of learning and contributing wherever needed.</p>

            <h3 className="text-2xl font-bold text-black">Requirements</h3>

            <ul className="list-disc pl-5">
                <li>Experience developing cloud-native applications and deploying to a cloud environment (i.e. AWS, Google Cloud Platform, Azure, etc.)</li>
                <li>One or more general-purpose programming languages (JavaScript, Java, .NET, Scala, etc.)</li>
                <li>Practical experience developing distributed microservice architectures providing elasticity, redundancy, failover, and intelligent routing</li>
                <li>SPA Framework experience such as React, Angular, etc.</li>
                <li>API Development (proper microservice separation, HTTP verb usage)</li>
                <li>Experience working in an agile, team-oriented environment</li>
                <li>Hands-on expertise with multiple database technologies (Postgres, Mongo, Elastic Search, etc.) as well as SQL and related query languages</li>
                <li>Extensive unit testing and CI/CD experience</li>
                <li>Understanding of DevOps responsibilities including OS and Container Management</li>
                <li>Practical understanding of security best practices in software development</li>
            </ul>

            <h3 className="text-2xl font-bold text-black">Nice, but not required</h3>

            <ul className="list-disc pl-5">
                <li>Docker / Kubernetes / Cloud Foundry experience</li>
                <li>Progressive Web App experience</li>
                <li>Native mobile app development experience</li>
                <li>Experience with deploying to cloud environments using Docker, Ansible, Puppet, Chef, CloudFormation, Terraform, etc.</li>
            </ul>
        </PositionLayout>
    )
}
