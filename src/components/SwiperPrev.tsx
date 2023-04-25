import {useSwiper} from 'swiper/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft'

export default function SwiperPrev() {
    return (
        <button className="button-prev absolute top-1/2 -left-5 z-10 -translate-y-1/2 w-10 h-10 bg-black text-white flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    )
}
