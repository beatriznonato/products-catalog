import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { searchNearest, googleMaps } from '../../services/searchAddress';
import location from '../../assets/image/location.png'
import './Input.css'

function Input() {
    const [address, setAddress] = useState('')

    const history = useHistory();
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        const latLng = await googleMaps(address)

        if (latLng) {
            const id = await searchNearest(latLng)
            history.push("/produtos?id="+id)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="input">
            <input 
             className="input__container" 
             placeholder="Insira endereço para ver preço" 
             type="string"
             value={address}
             onChange={e => setAddress(e.target.value)}
            />
            <button>
                <img className="input__img" src={location} alt="icone localização" />
            </button>
        </form>
    )
}

export default Input;

                    