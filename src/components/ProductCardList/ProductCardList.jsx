import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { getProducts } from '../../services/products';
import './ProductCardList.css'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ProductCard() {
  const [products, setProducts] = useState({})

  let query = useQuery();

  useEffect(async () => {
    setProducts(await getProducts(query.get('id')))
  }, [])

  if(!products.length) {
    return <span> tô carregando...</span>
  }
  
  const renderProduct = (product) => {
    return (
      <div className="card__container">
        <img className="card__img" src={product.images[0].url} />
        <hr />
        <h3 className="card__title">{product.title}</h3>
        <p className="card__p">R$ {product.productVariants[0].price}</p>
      </div>
    )
  }

  return <>
  {
    products.map(renderProduct)
  }
  </>

}

export default ProductCard;