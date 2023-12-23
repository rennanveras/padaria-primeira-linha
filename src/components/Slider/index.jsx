
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import * as S from './styles'

import slide1 from '../../assets/images/Slide1.svg'
import slide2 from '../../assets/images/Slide2.svg'
import slide3 from '../../assets/images/Slide3.svg'
import slide4 from '../../assets/images/Slide4.svg'
import slide5 from '../../assets/images/Slide5.svg'
import slide6 from '../../assets/images/Slide1.svg'

const SlideImagens = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6]

  return (
    <S.ContainerSlide>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="" className="slide-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.ContainerSlide>
  )
}

export default SlideImagens