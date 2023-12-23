import { Link } from "react-router-dom"

// eslint-disable-next-line no-unused-vars
import { FaInstagram, FaFacebookF} from "react-icons/fa";

import * as S from './styles'

const Footer = () => {
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
    <S.ContainerFooter>
      <div className="container">
        <S.NavLinksFooter>
          <ul>
            {navLink.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </S.NavLinksFooter>
        <S.ListSocialMidia>
          <a target="_blanck" href="https://www.facebook.com/primeiralinhapadaria/?locale=pt_BR">
            <FaFacebookF fontSize={26} color="white" />
          </a>
          <a target="_blanck" href="https://www.instagram.com/padariaprimeiralinha/">
            <FaInstagram fontSize={26} color="white" />
          </a>
        </S.ListSocialMidia>
        <S.InfosFooter>
          <p>
              &copy;2023 - Padaria Primeira Linha
          </p>
          <address>
            Rua Tavares Coutinho, 1871 - Varjota, Fortaleza - CE, 60160-130
          </address>
          <p>
            CPNJ 99.999.999/0001-99
          </p>
        </S.InfosFooter>
      </div>
    </S.ContainerFooter>
  )
}

export default Footer