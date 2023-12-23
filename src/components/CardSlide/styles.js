import styled from "styled-components";

export const CardItem = styled.div`
  min-width: 242px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    border-radius: 30px;
    height: 320px;
    margin-bottom: 24px;

  }

  h3 {
    font-size: 18px;
    line-height: 33px;
    max-width: 200px;

  }
`