import imgHero from '../../assets/images/banner.png'
import { ButtonDefault } from '../../styles'

import * as S from './styles'

const Hero = () => {
  return (
    <S.Hero>
      <S.ContentInfos>
        <div>
          <S.TitleSmall>
            Padaria
          </S.TitleSmall>
          <S.Title>
            Primeira Linha
          </S.Title>
        </div>
        <p>27 anos de tradição e sabor fresquinho todos os dias!</p>
        <div className='content-button'>
          <ButtonDefault>Pedir agora</ButtonDefault>
          <ButtonDefault className='transparent'>Menu</ButtonDefault>
        </div>
      </S.ContentInfos>
      <S.BannerHero style={{ backgroundImage: `url(${imgHero})` }}></S.BannerHero>
    </S.Hero>
  )
}

export default Hero
