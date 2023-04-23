import { Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/effect-fade'

import hero1 from '@/public/index/hero1.jpg'
import hero2 from '@/public/index/hero2.jpg'
import hero3 from '@/public/index/hero3.jpg'

export default function HeroSlider() {
    return (
        <Swiper
            className="!absolute !z-0 inset-0 hero-slider"
            modules={[Autoplay, EffectFade]}
            loop={true}
            autoplay={true}
            slidesPerView={1}
            effect="fade"
        >
            <SwiperSlide className="h-full">
                <Image className="h-full object-cover" src={hero1} alt='' fill />
            </SwiperSlide>
            <SwiperSlide className="h-full">
                <Image className="h-full object-cover" src={hero2} alt='' fill />
            </SwiperSlide>
            <SwiperSlide className="h-full">
                <Image className="h-full object-cover" src={hero3} alt='' fill />
            </SwiperSlide>
        </Swiper>
    )
}