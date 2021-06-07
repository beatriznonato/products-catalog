import React, { useState } from 'react';
import axios from 'axios';
import location from '../../assets/image/location.png'
import './Input.css'

function Input() {
    const [address, setAddress] = useState('')

    const zeApi = async () => {
        const resultZe = await axios.post("https://api.code-challenge.ze.delivery/public/graphql", {
            query: `
            query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
                pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
                  address {
                    __typename
                    address1
                    address2
                    number
                    city
                    province
                    zip
                    coordinates
                  }
                }
              }
            `,
            variables: {
                algorithm: "NEAREST",
                lat: "-23.632919",
                long: "-46.699453",
                now: "2017-08-01T20:00:00.000Z"
            }
        }).then((result) => {
            console.log(result.data)
        })
    } 
    
    const googleMaps = async () => {
        const resultGoogleMaps = await axios.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key=AIzaSyBqPblsbU-npXGGomuXMC21oR4kb13-K6E");
        const {data} = resultGoogleMaps
        // console.log(data)

        if(data.status == "OK"){
            await zeApi(data.results[0].geometry.location)
        } 
        // console.log(resultGoogleMaps)
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

                    