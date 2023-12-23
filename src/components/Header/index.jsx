import logo from '../../assets/images/logo.png'

import * as S from './styles'

import { BsCart } from 'react-icons/bs'
import { IoPersonOutline } from 'react-icons/io5'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [menuIsOpen, setmenuIsOpen] = useState(false)

  const navLink = [
    {
      title: 'início',
      link: '/'
    },
    {
      title: 'Cardápio',
      link: '/cardapio'
    },
    {
      title: 'Sobre nós',
      link: '/sobre-nos'
    },
    {
      title: 'Contato',
      link: '/contato'
    }
  ]
  
  return (
    <>
      <S.HeaderContainer className='container'>
        <Link to={'/'}><img src={logo} alt="" /></Link>
        <S.NavLinks>
          <ul>
            {navLink.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </S.NavLinks>
        <S.ContentItens>
          <S.IconsContainer>
            <Link to={'/login'}>
              <div className="area-carrinho">
                <IoPersonOutline size={24} color={`#000`} />
              </div>
            </Link>
            <Link to={'/carrinho'}>
              <div className="area-carrinho">
                <BsCart size={24} color={`#000`} />
                <span>2</span>
              </div>
            </Link>
          </S.IconsContainer>
          <S.BtnMenuHamburguer>
            {menuIsOpen ? (
              <FaTimes
                size={24}
                color={`${`#000`}`}
                onClick={() => setmenuIsOpen(false)}
              />
            ) : (
              <FaBars
                size={24}
                color={`${`#000`}`}
                onClick={() => setmenuIsOpen(true)}
              />
            )}
          </S.BtnMenuHamburguer>
        </S.ContentItens>
      
      </S.HeaderContainer>
      {menuIsOpen &&
        <S.MenuMobile className={menuIsOpen ? 'is-open' : ''}>
          <S.ListMenuMobile>
            {navLink.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </S.ListMenuMobile>
        </S.MenuMobile>
      }
    </>
  )
}

export default Header
