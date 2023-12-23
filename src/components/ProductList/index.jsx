import React from 'react';

import foto1 from '../../assets/images/padariaprimeiralinha_1.jpeg'
import foto2 from '../../assets/images/padariaprimeiralinha_2.jpeg'
import foto3 from '../../assets/images/padariaprimeiralinha_3.jpeg'
import { ButtonDefault } from '../../styles';

const ProductList = () => {
  // Adicione o estado para o filtro e a lista de produtos
  const [filter, setFilter] = React.useState('');
  const [products, setProducts] = React.useState([
    // Adicione seus produtos aqui
    {
      id: 1,
      name: 'Teste',
      price: 4.50,
      image: foto1,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      pricePerKg: 0.00,
    },
    {
      id: 2,
      name: 'teste',
      price: 4.50,
      image: foto2,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      pricePerKg: 0.00,
    },
    {
      id: 13,
      name: 'teste fdsakjfmkdsajfk fdsajkljfdkaslj',
      price: 4.50,
      image: foto3,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      pricePerKg: 0.00,
    },
    {
      id: 23,
      name: 'Teste',
      price: 4.50,
      image: foto3,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      pricePerKg: 0.00,
    },
    // Adicione mais produtos conforme necessário
  ]);

  // Função para filtrar produtos com base no texto de pesquisa
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const getDescription = (description) => {
    return description.length > 10
      ? `${description.slice(0, 45)}...`
      : description
  }
  const getTitle = (title) => {
    return title.length > 10
      ? `${title.slice(0, 9)}...`
      : title
  }

  // Função para renderizar um produto
  const renderProduct = (product) => (
    <div key={product.id} className="col-12 col-sm-6 col-md-6 col-lg-4 mb-5" style={{ height: '100%'}}>
      <div className="card text-center bg-light ">
        <img 
          src={product.image} 
          className="card-img-top object-fit-cover" 
          alt={product.name} 
          style={{ maxHeight: '200px'}}
          />
        <div className="card-header">
          R$ {product.price.toFixed(2)}
        </div>
        <div className="card-body">
          <h5 className="card-title">{getTitle(product.name)}</h5>
          <p className="card-text truncar-3l">
            {getDescription(product.description)}
          </p>
        </div>
        <div className="card-footer">
          <ButtonDefault className='my-2 d-block w-full' style={{ width: '100%', fontSize: '16px'}}> Adicionar ao carrinho</ButtonDefault>
          <small className="text-success">Preço do Kg: R${product.pricePerKg.toFixed(2)}</small>
        </div>
      </div>
    </div>
  );

  return (
    <div className="d-flex flex-column wrapper" style={{marginTop: '30px'}}>
      <main className="flex-fill">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5">
              <form className="justify-content-center justify-content-md-start mb-3 mb-md-0">
                <div className="input-group input-group-sm">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Digite aqui o que procura"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  />
                  <button className="btn btn-warning" style={{backgroundColor: '#4A1D1F', color: '#FBEDCD'}}>Buscar</button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-7">
              <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start">
                <form className="d-inline-block">
                  <select className="form-select form-select-sm">
                    <option>Ordenar pelo nome</option>
                    <option>Ordenar pelo menor preço</option>
                    <option>Ordenar pelo maior preço</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <hr className="mt-3" />
          {/* Utilize a classe "row" para criar um grid */}
          <div className="row gap-y-4">
            {filteredProducts.map(renderProduct)}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductList;
