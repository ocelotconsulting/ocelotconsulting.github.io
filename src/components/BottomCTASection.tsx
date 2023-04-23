import Button from "@/components/Button";
import Section from "@/components/Section";
import {Dispatch, SetStateAction} from "react";
import ContactButton from "@/components/ContactButton";
import FadeIn from "@/components/animations/FadeIn";

export interface BottomCTASectionProps {
    setShowContact: Dispatch<SetStateAction<boolean>>
}

export default function BottomCTASection({setShowContact}: BottomCTASectionProps) {
    return (
        <Section className="bg-dark-gray text-white text-center">
            <FadeIn>
                <h2 className="text-3xl md:text-5xl font-bold mb-2">
                    Partnering for innovation, <br className="hidden md:inline" />
                    delivering results
                </h2>

                <p className="tracking-widest mb-10">OUR TEAMS SHOW CLIENTS WHAT IS POSSIBLE AND THEN HELP THEM GET THERE</p>

                <ContactButton className="w-full max-w-[250px]" setShowContact={setShowContact}>
                    Talk With Us
                </ContactButton>
            </FadeIn>
        </Section>
    )
}