import React from 'react';
import location from '../../assets/image/location.png'
import './Input.css'

const Input = () => {
    return (
        <div className="input">
            <input className="input__container" placeholder="Insira endereço para ver preço"/>
            <img className="input__img" src={location} alt="icone localização"/>
        </div>
    )
}

export default Input;