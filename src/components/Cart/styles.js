import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  z-index: 99;
  inset: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }

  .area-buttons {
    display: grid;
    gap: 6px;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 400px) {
      grid-template-columns: 1fr;
    }
  }
  `

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.7;

`

export const SideBar = styled.aside`
  background-color: #f1f1f1;
  z-index: 100;
  padding: 40px 16px;
  overflow-y: auto;
  max-width: 380px;

  @media (max-width: 400px) {
    width: 220px;
  }
`

export const CartItem = styled.li`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid #ccc;
  padding: 6px;
  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 10px;

    img {
      width: 100%;
    }
  }
`

export const StyledInputGroup = styled.div`
  display: flex;
  justify-content: end;

  @media (max-width: 400px) {
    justify-content: start;
  }
  & > button {
    background-color: #fff;
    border: 1px solid #6c757d;
    color: #6c757d;
    border-radius: 4px;
    padding: 0 8px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #e1e1e1;
    }
    &:last-child {
      &:hover {
        color: red;
      }
    }
  }

  input {
    width: 60px;
    border-radius: 0;
  }
`;

