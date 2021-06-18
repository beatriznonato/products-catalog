import React from 'react';
import { Link } from 'react-router-dom'
import { useCartCount } from '../../contexts/MiniCartCount';
import shoppingBag from '../../assets/image/shoppingBag.png'
import './Header.css'


const Header = () => {
    const { cartCount } = useCartCount();

    return (
        <header className="header__background">
            <Link to="/">
                <img className="header__logo" src="https://courier-images-web.imgix.net/static/img/white-logo.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png"/>
            </Link>
            <div>
                <p className="header__p--count">
                    {cartCount}
                </p>
                <img src={shoppingBag} alt="Sacola de Compras" />
            </div>
        </header>
    )
}

export default Header;