function ProductDetails({ product }) {
  if (!product) return null;

  return (
    <div>
      <img src={product.images?.[0]} width="200" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price} DH</p>
    </div>
  );
}

export default ProductDetails;
