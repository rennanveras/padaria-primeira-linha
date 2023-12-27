import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonDefault } from '../../styles';
import { add, open } from '../../store/reducers/cart';
import { Row, Col, Form } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const ProductList = ({ products }) => {
  const [filter, setFilter] = useState('');
  const [sortOption, setSortOption] = useState('name');
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(add(item));
    dispatch(open());
  };

  const getSortedProducts = () => {
    const sortedProducts = [...filteredProducts];

    if (sortOption === 'name') {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'priceLow') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceHigh') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts;
  };

  // eslint-disable-next-line react/prop-types
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(filter.toLowerCase()) ||
      product.description.toLowerCase().includes(filter.toLowerCase())
  );

  const getDescription = (description) =>
    description.length > 46 ? `${description.slice(0, 45)}...` : description;

  const getTitle = (title) => (title.length > 18 ? `${title.slice(0, 16)}...` : title);

  const renderProduct = (product) => (
    <Col key={product.id} xs={12} sm={6} md={6} lg={4} className="mb-5">
      <div className="card text-center bg-light">
        <img
          src={product.image}
          className="card-img-top object-fit-cover"
          alt={product.name}
          style={{ maxHeight: '200px' }}
        />
        <div className="card-header">R$ {product.price.toFixed(2)}</div>
        <div className="card-body">
          <h5 className="card-title">{getTitle(product.name)}</h5>
          <p className="card-text truncar-3l" style={{ height: '60px' }}>
            {getDescription(product.description)}
          </p>
        </div>
        <div className="card-footer">
          <ButtonDefault
            className="my-2 d-block w-full"
            style={{ width: '100%', fontSize: '16px' }}
            onClick={() => addToCart(product)}
          >
            Adicionar ao carrinho
          </ButtonDefault>
          <small className="text-success">Preço do Kg: R${product.pricePerKg.toFixed(2)}</small>
        </div>
      </div>
    </Col>
  );

  return (
    <div className="d-flex flex-column wrapper" style={{ marginTop: '30px' }}>
      <main className="flex-fill">
        <div className="container">
          <Row>
            <Col xs={12} md={5}>
              <Form className="justify-content-center justify-content-md-start mb-3 mb-md-0">
                <Form.Group className="input-group input-group-sm">
                  <Form.Control
                    type="text"
                    placeholder="Digite aqui o que procura"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col xs={12} md={7}>
              <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start">
                <Form className="d-inline-block">
                  <Form.Select
                    className="form-select form-select-sm"
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="name">Ordenar pelo nome</option>
                    <option value="priceLow">Ordenar pelo menor preço</option>
                    <option value="priceHigh">Ordenar pelo maior preço</option>
                  </Form.Select>
                </Form>
              </div>
            </Col>
          </Row>
          <hr className="mt-3" />
          {filteredProducts.length === 0 ? (
            <Row className="text-center mb-5 pb-5">
              <h3 className="text-center my-5 pb-5">Produto não encontrado</h3>
            </Row>
          ) : (
            <Row className="gap-y-4">{getSortedProducts().map(renderProduct)}</Row>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProductList;
