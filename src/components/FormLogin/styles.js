import styled from "styled-components";
import { ButtonDefault } from "../../styles";

export const ContentForm = styled.div`

@media (max-width: 768px) {
}
  .container {
    margin: 0;
  }

  `
export const AreaForm = styled.form`
  max-width: 600px;
  width: 100%;
  
  @media (max-width: 768px) {
    width: 90%;

    .text-small {
      font-size: 10px;
    }
  }
`

export const ButtonForm = styled(ButtonDefault)`
  border-radius: 100px;
`