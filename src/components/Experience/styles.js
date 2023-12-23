import styled from "styled-components";
import { BtnSlide } from "../../container/SlideProducts/styles";

export const ContainerExperience = styled.section`
  display: flex;
  gap: 24px;
  margin: 180px 0;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 80px 0;
  }

  .content-infos {
    margin-top: 20px;
    h2 {
      font-size: 32px;
      color: #4A1D1F;
    }
  }
`

export const ButtonNoBorder = styled(BtnSlide)`
  border: none;
  margin: 20px 0;
`