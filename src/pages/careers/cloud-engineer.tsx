import PositionLayout from '@/components/careers/PositionLayout'
export default function () {
    return (
        <PositionLayout title="Cloud Engineer" location="St. Louis, MO / Remote" type="Full-Time">
            <p>As a cloud engineer, you will build and automate highly available, elastic, and secure cloud-based infrastructure to support the needs of our client workloads. You will have the opportunity to work in a wide variety of areas including infrastructure automation, security, configuration management, continuous integration, and continuous deployment, as well as mentoring colleagues on your team and across other engineering teams.</p>

            <h3 className="text-2xl font-bold text-black">Requirements</h3>

            <ul className="list-disc pl-5">
                <li>Experience deploying and maintaining infrastructure on a major cloud provider (AWS, GCP, Azure)</li>
                <li>Experience using common infrastructure as code tool sets (AWS CloudFormation, Terraform, Cloud Deployment Manager)</li>
                <li>Working with common CI/CD and version control technologies (Jenkins, Git, etc.)</li>
                <li>Creating, configuring, and running containers (Docker, Kubernetes, etc.)</li>
                <li>Proficiency in one or more common infrastructure automation languages (Shell Scripting, Python, Golang, etc.)</li>
                <li>Basic Linux OS setup and configuration</li>
            </ul>

            <h3 className="text-2xl font-bold text-black">Nice, but not required</h3>

            <ul className="list-disc pl-5">
                <li>Serverless technologies (Lambda, Google Functions, Azure Functions)</li>
                <li>Experience working in an Agile team-oriented environment</li>
                <li>General-purpose programming languages (Java, Scala, Python, Erlang, etc.)</li>
                <li>Docker Swarm / Kubernetes / Cloud Foundry experience</li>
                <li>Networking and Firewall concepts and troubleshooting</li>
                <li>Experience with common configuration management software (Ansible, Puppet, AWS SSM, etc.)</li>
            </ul>
        </PositionLayout>
    )
}
