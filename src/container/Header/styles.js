import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  @media (max-width: 1024px) {
    justify-content: ;
  }
  img {
    width: 88px;
  }
`

export const NavLinks = styled.nav`
  ul {
    display: flex;
    gap: 46px;

    a {
      color: #000;
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`

export const ContentItens = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;

  /* @media (max-width: 1024px) {
    display: none;
  } */

  .area-carrinho {
    position: relative;
    width: 28px;
    padding: 6px 0;

    svg {
      cursor: pointer;
    }

    span {
      position: absolute;
      top: 0;
      right: 0;
      background-color: #4A1D1F;
      width: 16px;
      height: 16px;
      color: white;
      display: flex;
      align-items: center;
      font-size: 10px;
      border-radius: 50%;
      justify-content: center;
    }
  }
`

export const BtnMenuHamburguer = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 1024px) {
    display: block;
  }
`

export const MenuMobile = styled.div`
  display: block;
  opacity: 0;
  height: 0px;
  overflow: hidden;
  transition: all .5s ease-in;

  &.is-open {
    opacity: 1;
    height: 144px;
  }
`

export const ListMenuMobile = styled.ul`
  text-align: center;
  padding: 0;

  li {
    border-bottom: 1px solid #ccc;
    padding: 4px;
    font-size: 18px;
  }
`