import styled from "styled-components";

export const ContainerInfo = styled.section`
  display: flex;
  gap: 30px;
  margin: 80px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  .content-Title {
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:20px;
    
    @media (max-width: 768px) {
      border-bottom: 1px solid #4A1D1F;
      padding: 20 0;
    }
    
    h2 {
      font-size: 32px;
      font-weight: bold;
      color: #4A1D1F;
      text-align: center;
      
      @media (max-width: 768px) {
        font-size: 24px;
      }
    }
    
  }
  
  .content-Text {
    font-size: 16px;
    line-height: 34px;
    flex: 2;
    padding: 0 20px;
    border-left: 1px solid #4A1D1F;
    text-align: center;
    
    @media (max-width: 768px) {
      border: none; 
      font-size: 14px;
      padding: 20 0;
    }
  }
`