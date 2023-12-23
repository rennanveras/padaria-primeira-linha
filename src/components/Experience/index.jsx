import bannerExperience from '../../assets/images/banner-experiencia.png'

import { MdArrowRightAlt } from "react-icons/md";

import * as S from './styles'

const Experience = () => {
  return (
    <S.ContainerExperience>
      <img src={bannerExperience} alt="" />
      <div className='content-infos'>
        <h2>27 Anos de <br/> Tradição</h2>
        <p>Há 27 anos a Primeira Linha é seu lugar preferido para café da manhã, almoço, sobremesas e jantas, estando sempre presente no seu dia a dia</p>
        <S.ButtonNoBorder className='transparent'>
          Ver mais <MdArrowRightAlt fontSize={30} />
        </S.ButtonNoBorder>
      </div>
    </S.ContainerExperience>

  )
}

export default Experience