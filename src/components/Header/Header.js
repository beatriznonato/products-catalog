import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header__container">
            <header className="header__background">
                <img className="header__logo" src="https://courier-images-web.imgix.net/static/img/white-logo.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png"/>
            </header>
        </div>
    )
}

export default Header;