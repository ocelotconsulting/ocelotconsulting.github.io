// @ts-ignore
import { Player, PlayerState } from '@lottiefiles/react-lottie-player'
import { ComponentPropsWithoutRef, createRef, useState, useEffect } from 'react'
import animationData from '@/public/waves.json'

export default function Waves(props: ComponentPropsWithoutRef<'div'>) {
    const localStorageKey = "wavesAutoplay"

    // Default is true
    const wavesAutoplayDefault = true

    // Load history from localStorage
    const [wavesAutoplay, setAutoplay] = useState(() => {
        if (typeof window === 'undefined') return wavesAutoplayDefault

        const stored = localStorage.getItem(localStorageKey);

        if (stored) {
            const parsed = JSON.parse(stored)

            if (typeof parsed === 'boolean') {
                return parsed
            }
        }

        return wavesAutoplayDefault
    })

    // Updating localStorage on change
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(wavesAutoplay));
    }, [wavesAutoplay]);

    const rendererSettings = {
        preserveAspectRatio: "xMidYMid slice"
    }

    const player = createRef<Player>()

    return (
        <div {...props} onClick={() => player.current?.state.playerState === PlayerState.Playing ? player.current?.pause() : player.current?.play() }>
            <Player
                ref={player}
                loop={true}
                autoplay={wavesAutoplay}
                controls={false}
                src={JSON.stringify(animationData)}
                rendererSettings={rendererSettings}

                onEvent={event => {
                    // Save our pause state
                    if (event === 'pause') setAutoplay(false);
                    if (event === 'play') setAutoplay(true);
                }}
            >
            </Player>
        </div>
    )
}