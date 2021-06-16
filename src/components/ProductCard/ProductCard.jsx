import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductCard.css'

function ProductCard() {
  const [data, setData] = useState({})

  useEffect(async () => {
    const productsDetail = await axios.post("https://api.code-challenge.ze.delivery/public/graphql", {
      query: `
      query poc($id: ID!, $categoryId: Int, $search: String){
          poc(id: $id) {
            id
            products(categoryId: $categoryId, search: $search) {
              id
              title
              images {
                url
              }
              productVariants {
                price
                subtitle
              }
            }
          }
        }
      `,
      variables: {
          id: "532",
          search: "",
          categoryId: null
      }
    })
    setData(productsDetail.data)
    console.log(data)
  }, [])

  if(!data.data) {
    return <span> tô carregando...</span>
  }
  return(
    <div className="card__container">
      <img className="card__img" src={data.data.poc.products[0].images[0].url} />
      <hr />
      <h3 className="card__title">{data.data.poc.products[0].title}</h3>
      <p className="card__p">R$ {data.data.poc.products[0].productVariants[0].price}</p>
    </div>
  )

}

export default ProductCard;