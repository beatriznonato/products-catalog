import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import { useCartCount } from '../../contexts/MiniCartCount';


const Header = () => {
    const { cartCount } = useCartCount();

    return (
        <header className="header__background">
            <Link to="/">
                <img className="header__logo" src="https://courier-images-web.imgix.net/static/img/white-logo.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png"/>
            </Link>
            <p>
                {cartCount}
            </p>
        </header>
    )
}

export default Header;