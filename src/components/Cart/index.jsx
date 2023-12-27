import { useDispatch, useSelector } from 'react-redux'

import { BiCaretDown, BiCaretUp, BiTrash } from 'react-icons/bi';

import { ButtonDefault } from "../../styles";
import * as S from './styles';

import { close, increment, decrement, remove } from '../../store/reducers/cart';

const Cart = () => {

  const { isOpen, items } = useSelector((state) => state.cart);

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const handleIncrement = (id) => {
    dispatch(increment({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrement({ id }))
  };

  const handleRemoveItem = (id) => {
    dispatch(remove(id))
  };

  const handleSumItems = (price, quantity) => {
    return price * quantity;
  };

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        <ul>
          {items.map((item, index) => (
            <S.CartItem key={index}>
              <img src={item.image} alt={item.name} />
              <div className="teste">
                <h5>{item.name}</h5>
                <div>
                  <S.StyledInputGroup>
                    <button type="button" onClick={() => handleDecrement(item.id)}>
                      <BiCaretDown style={{ fontSize: '16px', lineHeight: '16px' }} />
                    </button>
                    <input
                      type="text"
                      className="form-control text-center border-dark"
                      value={item.quantity}
                      readOnly
                    />
                    <button type="button" onClick={() => handleIncrement(item.id)}>
                      <BiCaretUp style={{ fontSize: '16px', lineHeight: '16px' }} />
                    </button>
                    <button type="button" className="btn-outline-danger border-dark" onClick={() => handleRemoveItem(item.id)}>
                      <BiTrash style={{ fontSize: '16px', lineHeight: '16px' }} />
                    </button>
                  </S.StyledInputGroup>
                  <div className="text-end mt-2">
                    <span className="text-dark">
                      Valor Item: R$ {handleSumItems(item.price, item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </S.CartItem>
          ))}
        </ul>
        <p>{items.length} produtos no carrinho</p>
        <p><small>Total de R$ {items.reduce((total, item) => total + handleSumItems(item.price, item.quantity), 0).toFixed(2)}</small></p>
        <div className="area-buttons">
          <ButtonDefault
            title="Clique aqui para continuar com a compra"
            type="button"
            className="small transparent"
          > Continuar comprando</ButtonDefault>
          <ButtonDefault
            title="Clique aqui para finalizar a compra"
            type="button"
            className="small"
          > Fechar compra</ButtonDefault>
        </div>
      </S.SideBar>
    </S.CartContainer>
  );
};

export default Cart;
