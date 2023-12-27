import { Link } from "react-router-dom"
import { ButtonDefault } from "../../styles"
import * as S from './styles'

const SectionKitParty = () => (
  <S.containerKitParty>
    <h2>Kits para Festa</h2>
    <div className="content-text">
      <p>
        Kits personalizados para festas de todos os tipos e tamanhos
        Variedade de opções de salgados, doces e bolos
        Entrega rápida e eficiente em toda a região
        Produtos frescos e de alta qualidade
        Atendimento personalizado e profissional
      </p>
    </div>
    <div>
      <ButtonDefault as={Link} to={'/cardapio'}>Fazer pedido</ButtonDefault>
    </div>
  </S.containerKitParty>
)

export default SectionKitParty