import Button from "@/components/Button";
import Section from "@/components/Section";
import FadeIn from "@/components/animations/FadeIn";

export default function SuccessCTASection() {
    return (
        <Section className="text-center">
            <FadeIn>
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">The proof is in the results</h2>
                <p>Take a look at some of our case studies to see how we’ve helped our clients across industries achieve success</p>

                <Button className="mt-8 w-full max-w-[450px]" href="/case-studies">
                    Browse our Success Stories
                </Button>
            </FadeIn>
        </Section>
    )
}