import React, { useState } from 'react';
import axios from 'axios';
import location from '../../assets/image/location.png'
import './Input.css'

function Input() {
    const [address, setAddress] = useState('')

    const googleMaps = async () => {
        const result = await axios.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key=AIzaSyBqPblsbU-npXGGomuXMC21oR4kb13-K6E");
        console.log(result)
    }

    const handleKeyDown = async (event) => {
        if (event.charCode == 13 || event.key == "Enter") {
            await googleMaps();
        }
    }

    return (
        <div className="input">
            <input 
             className="input__container" 
             placeholder="Insira endereço para ver preço" 
             type="string"
             value={address}
             onChange={e => setAddress(e.target.value)}
             onKeyDown={handleKeyDown}
            >
            </input>
            <img className="input__img" src={location} alt="icone localização"/>
        </div>
    )
}

export default Input;

                    