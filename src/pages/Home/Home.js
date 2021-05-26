import React from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <h1 className="home__title"><b>Bebidas geladas</b> a <b>preço</b> de mercado na sua casa <b>agora</b></h1>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Home;