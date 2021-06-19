import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { searchNearest, googleMaps } from '../../services/searchStore';
import Loader from '../Loader/Loader'
import location from '../../assets/image/location.png'
import './InputAddress.css'

function InputAddress() {
    const [address, setAddress] = useState('')
    const [loading, setLoading] = useState(false)

    const history = useHistory();
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        
        setLoading(true)
        const latLng = await googleMaps(address)

        if (latLng) {
            const id = await searchNearest(latLng)
            if (id) {
                history.push("/produtos?id="+id)
            } else {
                setLoading(false)
                alert("Endereço não encontrado")
            }
        }

    }

    return (
        <form onSubmit={handleSubmit} className="form__form">
            <button className="form__button">
                <img className="form__button--img" src={location} alt="icone localização" />
            </button>
            <input 
             className="form__input" 
             placeholder="Insira endereço para ver preço" 
             type="string"
             value={address}
             onChange={e => setAddress(e.target.value)}
            />
            <Loader loading={loading} />
        </form>
    )
}

export default InputAddress;

                    