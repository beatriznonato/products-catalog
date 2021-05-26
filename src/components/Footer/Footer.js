import React from 'react';
import twitter from '../../assets/image/twitter.png'
import facebook from '../../assets/image/facebook.png'
import instagram from '../../assets/image/instagram.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer__container">
            <footer className="footer__background">
                <div className="footer__container--info">
                    <figure>
                        <img className="footer__logo" src="https://courier-images-web.imgix.net/static/img/white-logo.png?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2&fm=png"/>
                     </figure>
                    <div className="footer__container--socialnetworks">
                        <a href="https://twitter.com/ZeDelivery">
                            <img src={twitter} alt="Logo Twitter" />
                        </a>
                        <a href="https://www.facebook.com/zedeliverydebebidas">
                            <img src={facebook} alt="Logo Facebook" />
                        </a>
                        <a href="https://www.instagram.com/zedelivery/?hl=pt">
                            <img src={instagram} alt="Logo Instagram" />
                        </a>
                    </div>
                </div>
                <div className="footer__container--address">
                    <p className="footer__addresstext">ZX COMMERCE COMERCIO DE BEBIDAS LTDA - CNPJ: 37.657.197/0001-46</p>
                    <p className="footer__addresstext">Rua Fradique Coutinho, 1632 - CEP: 05.416-002</p>
                    <p className="footer__addresstext">Pinheiros - São Paulo/SP</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;