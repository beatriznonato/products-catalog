import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className="home__container">
                <header className="home__header">
                    <img className="home__logo" src="https://courier-images-web.imgix.net/static/img/white-logo.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png"/>
                    <button className="home__button home__button--tex">ENTRAR</button>
                </header>
            <main>
                <img className="main__img" src="https://images5.alphacoders.com/326/326180.jpg"/>
                <h1 className="home__title"><b>Bebidas geladas</b> a <b>preço</b> de mercado na sua casa <b>agora</b></h1>
            </main>
        </div>
    )
}

export default Home;