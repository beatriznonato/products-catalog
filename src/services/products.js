import axios from 'axios';

export const getProducts = async (id) => {
    const response = await axios.post("https://api.code-challenge.ze.delivery/public/graphql", {
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
          id: id,
          search: "",
          categoryId: null
      }
    })

   return response.data.data.poc.products
}
