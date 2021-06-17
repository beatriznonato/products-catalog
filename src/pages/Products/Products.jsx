import React from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CategoryCard from '../../components/CategoryCard/CategoryCard';

function Products() {
    return (
        <div>
            <Header />
            <main className="main__main">
                <CategoryCard />
            </main>
            <Footer />
        </div>
    )
}

export default Products;