import CaseStudyTitle from "@/components/case-studies/CaseStudyTitle";
import Section from "@/components/Section";

export default function GlobalAgScienceTechClient() {
    return (
        <>
            <CaseStudyTitle subtitle="Data Management | Data Science">
                Global Agricultural Science & Tech. Client
            </CaseStudyTitle>

            <Section>
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                    <div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-black mb-4">The Challenge</h2>

                            <p>The client’s business is growing.  An existing plant breeding process and genetics-based decision pipeline were no longer able to support the volume and throughput required which could result in products being delayed to market.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-black mb-4">The Solution</h2>

                            <p className="mb-2">Ocelot was brought in to simulate alternate breeding pipelines and to build new decision analytics on top of simulated data sets.  Provided evidence that a particular change can make the process faster without sacrificing quality.</p>

                            <ul className="list-disc pl-5">
                                <li>Implemented software models of plant breeding decisions</li>
                                <li>Created a model of plant breeding biological processes through a mix of custom and 3rd party software</li>
                                <li>Implemented a plant breeding pipeline simulation tool that allows the user to experiment with new plant breeding operational processes and variations on key decisions while measuring impact on costs and product quality</li>
                                <li>Implemented a data science model to improve a specific key decision at the start of the breeding pipeline</li>
                                <li>Implemented an RShiny application to quickly put the new data science model in the hands of the plant breeders</li>
                                <li>All simulation experiment results are written up in R Markdown and versioned in client’s Gitlab</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="bg-light-gray p-5 border-b-4 border-b-accent mb-8">
                            <h2 className="text-2xl font-bold text-black mb-4">Successful Results</h2>

                            <p>Simulations demonstrated multiple decision and pipeline changes can reduce costs and result in a faster time to market without a reduction in quality of products.</p>
                        </div>

                        <div className="bg-light-gray p-5 border-b-4 border-b-accent">
                            <h2 className="text-2xl font-bold text-black mb-4">Technologies Used</h2>

                            <ul className="list-disc pl-5 columns-2">
                                <li>R</li>
                                <li>RShiny</li>
                                <li>AWS Parallel Cluster</li>
                                <li>Slurm grid engine</li>
                                <li>Singularity containers</li>
                                <li>GitLab</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}