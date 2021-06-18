import React from 'react';
import AddToCart from '../AddToCart/AddToCart';
import './ProductCard.css'


function ProductCard({ product }) {
  return (
    <div key={`${product.title}`} className="product__container">
      <img className="product__img" src={product.images[0].url} />
      <hr className="product__hr" />
      <h3 className="product__title">{product.title}</h3>
      <p className="product__p">R$ {product.productVariants[0].price}</p> 
        <AddToCart />
    </div>
  )
}

export default ProductCard;