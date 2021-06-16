import React from 'react';
import Header from '../../components/Header/Header'
import ProductCardList from '../../components/ProductCardList/ProductCardList';
import Footer from '../../components/Footer/Footer'

function Products() {
    return (
        <div>
            <Header />
            <main>
                <ProductCardList />
            </main>
            <Footer />
        </div>
    )
}

export default Products;