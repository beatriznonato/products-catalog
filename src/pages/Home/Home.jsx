import React from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import InputAddress from '../../components/InputAddress/InputAddress'
import './Home.css'

function Home() {
    return (
        <>
            <Header />
            <main>
                <section className="section__section">
                    <h1 className="section__h1"><b>Bebidas geladas</b> a <b>preço</b> de mercado na sua casa <b>agora</b></h1>
                    <InputAddress />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home;