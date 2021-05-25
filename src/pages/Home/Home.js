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
                <img className="main__img" src="https://t4.ftcdn.net/jpg/04/30/30/71/240_F_430307155_zitxBFe8nvvUfc45pbIcHR3AvMrMm39b.jpg"/>
                <h1 className="home__title">Bebidas geladas a preço de mercado na sua casa agora</h1>
            </main>
        </div>
    )
}

export default Home;