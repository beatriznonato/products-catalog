import React from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Input from '../../components/Input/Input'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="section">
                    <h1 className="section__h1"><b>Bebidas geladas</b> a <b>preço</b> de mercado na sua casa <b>agora</b></h1>
                    <Input />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Home;