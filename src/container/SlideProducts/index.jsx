// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdArrowRightAlt } from "react-icons/md";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import * as S from './styles'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import CardSlide from '../../components/CardSlide';

import img from '../../assets/images/item-slide.png'
import img2 from '../../assets/images/item-slide2.png'
import { Link } from 'react-router-dom';


const SlideProducts = () => {
  const itens = [
    {
      id: 1,
      image: img,
      title: 'Red Velvet & Cream Cheese ( 500g )'
    },
    {
      id: 2,
      image: img2,
      title: 'Red Velvet & Cream Cheese ( 500g )'
    },
    {
      id: 3,
      image: img,
      title: 'Red Velvet & Cream Cheese ( 500g )'
    },
    {
      id: 4,
      image: img2,
      title: 'Red Velvet & Cream Cheese ( 500g )'
    },
    {
      id: 5,
      image: img,
      title: 'Red Velvet & Cream Cheese ( 500g )'
    },
    {
      id: 6,
      image: img2,
      title: 'Red Velvet & Cream Cheese ( 500g )'
    },
  ]

  /* setWindowWidth(window.innerWidth) */

  return (
    <S.ContentSlideProduct>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          220: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          550: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {itens.map((item) => (
          <SwiperSlide key={item.id}>
            <CardSlide img={item.image} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='area-button'>
        <S.BtnSlide
          className='transparent'
          as={Link}
          style={{ display: 'inline-block' }}
          to={'/cardapio'}
        >
          Ver mais <MdArrowRightAlt fontSize={30} />
        </S.BtnSlide>
      </div>
    </S.ContentSlideProduct>
  )
}

export default SlideProducts