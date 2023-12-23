import { CardItem } from "./styles"

// eslint-disable-next-line react/prop-types
const CardSlide = ({ img, title }) => {
  return (
    <CardItem>
      <img src={img} alt="" />
      <h3>{title}</h3>
    </CardItem>
  )
}

export default CardSlide
