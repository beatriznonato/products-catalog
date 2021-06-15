import React from 'react';
import Header from '../../components/Header/Header'
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer'

function Products() {
    return (
        <div>
            <Header />
            <main>
                <ProductCard />
            </main>
            <Footer />
        </div>
    )
}

export default Products;