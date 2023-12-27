import styled from "styled-components";

export const ContainerFooter = styled.footer`
  background-color: #4A1D1F;
  padding: 90px;
  padding: 120px;
  color: #fff;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  `

export const NavLinksFooter = styled.nav`
  ul {
    display: flex;
    gap: 54px;
    text-align: center;
    padding: 0;
    
    @media (max-width: 600px) {
      flex-direction: column;
      gap: 24px;
      margin-bottom: 20px;
    }
    
    a {
      color: #fff;
      display: block;
      width: 80px;t
    }
  }

  `

export const ListSocialMidia = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;=
`

export const InfosFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
`