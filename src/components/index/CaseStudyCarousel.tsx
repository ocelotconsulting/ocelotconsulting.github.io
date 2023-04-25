import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import CaseStudyCard, { CaseStudyCardProps } from '@/components/index/CaseStudyCard'

import 'swiper/css'
import 'swiper/css/navigation'
import SwiperPrev from "@/components/SwiperPrev";
import SwiperNext from "@/components/SwiperNext";

export interface CaseStudyCarouselProps {
    cards: CaseStudyCardProps[]
}

export default function CaseStudyCarousel({cards}: CaseStudyCarouselProps) {
    return (
        <div className="relative">
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={20}
                // Doc: Because of nature of how the loop mode works (it will rearrange slides), total number of slides must be >= slidesPerView * 2
                // Loop only if we meet the highest breakpoint
                loop={cards.length / 2 >= 5}
                autoplay={true}
                breakpoints={{
                    768: {
                        slidesPerView: 3
                    },
                    1280: {
                        slidesPerView: 5
                    },
                }}
                navigation={{
                    nextEl: '.button-next',
                    prevEl: '.button-prev',
                }}
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <CaseStudyCard
                            level={card.level}
                            icon={card.icon}
                            industry={card.industry}
                            blurb={card.blurb}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <SwiperPrev />
            <SwiperNext />
        </div>
    )
}