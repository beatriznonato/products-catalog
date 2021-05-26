import React from 'react';
import Footer from '../../components/Footer/Footer'
import './Home.css'

const Home = () => {
    return (
        <div className="home__container">
            <header className="home__header">
                <img className="home__logo" src="https://courier-images-web.imgix.net/static/img/white-logo.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png"/>
            </header>
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