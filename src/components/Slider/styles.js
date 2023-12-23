import styled from 'styled-components'

export const ContainerSlide = styled.section`
margin: 20px 0;
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  max-width: 800px;
  width: 100%;
  height:400px;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
}

.swiper-slide img {
  object-fit: cover;
  display: block;
  width: 100%;
  border-radius: 30px;

}

`