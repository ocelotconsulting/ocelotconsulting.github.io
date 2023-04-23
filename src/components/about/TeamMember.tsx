import Image from "next/image";

export interface TeamMemberProps {
    image: string
    name: string
    title: string
}

export default function TeamMember({image, name, title}: TeamMemberProps) {
    return (
        <div className="text-center">
            <Image className="rounded-full mx-auto mb-2 max-h-[180px]" src={`/assets/team/${image}`} alt={name} width={180} height={180} />
            <h3 className="text-xl font-bold text-black">{name}</h3>
            <p>{title}</p>
        </div>
    )
}