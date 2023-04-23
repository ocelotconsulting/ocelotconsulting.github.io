// @ts-ignore
import Lottie from 'react-lottie'
import {ComponentPropsWithoutRef} from 'react'
import animationData from '@/public/waves.json'

const waveOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}

export default function Waves(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <Lottie options={waveOptions} />
        </div>
    )
}