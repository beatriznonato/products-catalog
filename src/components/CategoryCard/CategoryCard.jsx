import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { getProducts } from '../../services/products';
import ProductCard from '../ProductCard/ProductCard'
import './CategoryCard.css'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function CategoryCard() {
  const [products, setProducts] = useState({})
  const [filteredProducts, setFilteredProducts] = useState({})

  let query = useQuery();

  useEffect(async () => {
    setProducts(await getProducts(query.get('id')))
 
  }, [])

  useEffect(() => {
    let productsObj = {};

    if (Object.keys(products).length) {
      products.map(product => {
        const category = product.productVariants[0].subtitle;

        if (!productsObj[category]) {
          productsObj[category] = [];
        }
  
        productsObj[category].push({
          id: product.id,
          images: product.images,
          productVariants: product.productVariants,
          title: product.title        
        })
      });
    }

    delete productsObj["null"];

    setFilteredProducts(productsObj);
  }, [products]);

  if(!products.length) {
    return <span>carregando...</span>
  }

  return <>
   {
     Object.keys(filteredProducts).length && 
      Object.keys(filteredProducts).map(category => {
        const arrProducts = filteredProducts[category];

        return (
          <div className="category__container">
            <h1 className="category__title">{category}</h1>
            <div className="category__container--products">
              {
                arrProducts.map((product, index) => {
                    if (index > 6) return <></>;
                    return <ProductCard product={product} />
                })
              }
            </div>
          </div>
        )
      })
   }
  </>
}

export default CategoryCard;