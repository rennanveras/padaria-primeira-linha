import styled from "styled-components";
import { ButtonDefault } from "../../styles";

export const ContentSlideProduct = styled.section`
  margin: 20px 0;
  
  .swiper {
    width: 100%;
}

.swiper-slide {
  font-size: 18px;
  margin-bottom: 40px;
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

.area-button {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
`


export const BtnSlide = styled(ButtonDefault)`
  display: flex;
  align-items: center;
  gap: 4px;
  

  svg {
    margin-bottom: -2px;
  }
`