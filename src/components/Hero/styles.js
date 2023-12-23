import styled from "styled-components";

export const Hero = styled.section`
  color: #4A1D1F; 
  display: flex;
  gap: 140px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }

  p {
    color: #000;
  }
`

export const ContentInfos = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  .content-button {
    display: flex;
    gap: 6px;
  }
`

export const Title = styled.h2`
  font-size: 40px;
  line-height: 44px;
`
export const TitleSmall = styled(Title)`
  font-size: 34px;
`

export const BannerHero = styled.div`
  background-size: cover;
  background-position: center;
  height: 440px;
  width: 610px;
  border-radius: 40px;

  @media (max-width: 1024px) {
    width: 100%;
    height: 380px;
  }
`
