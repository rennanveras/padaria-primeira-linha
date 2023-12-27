import { useState } from "react";
import Header from "../../components/Header"
import ProductList from "../../components/ProductList"
import Footer from "../../container/Footer"

import foto1 from '../../assets/images/padariaprimeiralinha_1.jpeg'
import foto2 from '../../assets/images/padariaprimeiralinha_2.jpeg'
import foto3 from '../../assets/images/padariaprimeiralinha_3.jpeg'

const Menu = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Lanche',
      price: 4.50,
      image: foto1,
      description: 'Lorem ',
      pricePerKg: 2.00,
      quantity: 1
    },
    {
      id: 2,
      name: 'bolo',
      price: 1.50,
      image: foto2,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      pricePerKg: 0.30,
      quantity: 1
    },
    {
      id: 13,
      name: 'teste fdsakjfmkdsajfk fdsajkljfdkaslj',
      price: 4.50,
      image: foto3,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      pricePerKg: 0.00,
      quantity: 1
    },
    {
      id: 23,
      name: 'Teste',
      price: 6.50,
      image: foto3,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      pricePerKg: 0.00,
      quantity: 1
    }
]);
  return(
    <div >
      <Header />
      <ProductList products={products} />
      <Footer/>
    </div>
  )
}

export default Menu