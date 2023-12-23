import styled from "styled-components";

export const containerKitParty = styled.section`
  display: flex;
  gap: 20px;
  justify-content: center;
  text-align: center;
  background-color: #FBEDCD;
  padding: 74px 0;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 40px 20px;

  }
  
  h2{
    color: #4A1D1F;
    font-size: 32px;
  }
  
  .content-text {
    margin: 0 auto;
    p {
      text-align: center;
      max-width: 900px;
      width: 100%;
    }
    
  }
`