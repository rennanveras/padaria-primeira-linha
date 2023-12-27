class Product {
  title;
  price;
  quantity;
  image;
  id;

  constructor(
    title,
    price,
    quantity,
    image,
    id
  ) {
    this.title = title
    this.price = price
    this.quantity = quantity
    this.image = image
    this.id = id
  }
}

export default Product