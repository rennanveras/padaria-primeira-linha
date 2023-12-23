const Product = (product) => {
 /*  const getText= (text) => {
    return text.length > 10
      ? `${text.slice(0, 9)}...`
      : text
  } */
  
  return (
    <div key={product.id} className="col-12 col-sm-6 col-md-4 mb-10" style={{ height: '100%' }}>
      <div className="card text-center bg-light ">
        <img
          src={product.image}
          className="card-img-top object-fit-cover"
          alt={product.name}
          style={{ maxHeight: '200px' }}
        />
        <div className="card-header">
          R$ {product.price}
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text truncar-3l">
            {product.description}
          </p>
        </div>
        <div className="card-footer">
          <a href="carrinho.html" className="btn btn-warning mt-2 d-block">
            Adicionar ao Carrinho
          </a>
          <small className="text-success">Preço do Kg: R${product.pricePerKg}</small>
        </div>
      </div>
    </div>
  )
};

export default Product

