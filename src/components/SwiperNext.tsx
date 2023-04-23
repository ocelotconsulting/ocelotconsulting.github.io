import {useSwiper} from 'swiper/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight'

export default function SwiperNext() {
    return (
        <button className="button-next absolute top-1/2 -right-5 z-10 -translate-y-1/2 w-10 h-10 bg-black text-white flex flex-col justify-center items-center">
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    )
}