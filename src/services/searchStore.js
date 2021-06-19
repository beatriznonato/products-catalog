import axios from 'axios';

export const searchNearest = async (latLng) => {
    const response = await axios.post("https://api.code-challenge.ze.delivery/public/graphql", {
        query: `
        query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
            pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
               id
            }
        }
        `,
        variables: {
            algorithm: "NEAREST",
            lat: latLng.lat,
            long: latLng.lng,
            now: new Date().toISOString()
        }
    },
    {
        headers: {
          'Content-Type': 'application/json'
       }
    })

    return response.data.data.pocSearch[0]?.id 
}


export const googleMaps = async (address) => {
    const resultGoogleMaps = await axios.get("https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(address)+"&key=AIzaSyBqPblsbU-npXGGomuXMC21oR4kb13-K6E");
    const {data} = resultGoogleMaps

    if(data.status != "OK"){
        return false
    }

    return data.results[0].geometry.location 
}