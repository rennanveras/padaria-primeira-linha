import styled, { createGlobalStyle } from 'styled-components'

export const StyleGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Poppins', sans-serif;
  }
  body {
    background-color: #f1f1f1;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    @media (max-width: 1100px) {
      padding: 0 20px;
    }
  }
`

export const ButtonDefault = styled.button`
  padding: 10px 30px;
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid #4A1D1F;
  color: #FBEDCD;
  background-color: #4A1D1F;
  cursor: pointer;
  transition: all .5s ease;



  &:hover {
    background-color: #FBEDCD;
    color: #4A1D1F;
  }

  &.transparent {
    background-color: transparent;
    color: #4A1D1F;

    &:hover {
    background-color: #4A1D1F;
    color: #FBEDCD;
  }
  }
`

/* export const colors = {
  white: '#EEE',
  black: '#000',
  brown: '#4A1D1F',
  cream: '#FBEDCD'
}

export const breakpoint = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '640px'
} */
