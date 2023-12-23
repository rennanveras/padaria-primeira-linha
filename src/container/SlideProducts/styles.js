import styled from "styled-components";
import { ButtonDefault } from "../../styles";

export const ContentSlideProduct = styled.section`
  .swiper {
    width: 100%;
}

.swiper-slide {
  font-size: 18px;
  margin-bottom: 60px;
  width: 200px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  object-fit: contain;
  width: 100%;
}

`


export const BtnSlide = styled(ButtonDefault)`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 60px auto;
  

  svg {
    margin-bottom: -2px;
  }
`