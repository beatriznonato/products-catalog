import React from 'react';
import './ProductCard.css'


function ProductCard({ product }) {
  return (
    <div key={`${product.title}`} className="product__item">
      <img className="product__img" src={product.images[0].url} />
      <hr />
      <h3 className="product__title">{product.title}</h3>
      <p className="product__p">R$ {product.productVariants[0].price}</p>
    </div>   
  )
}

export default ProductCard;