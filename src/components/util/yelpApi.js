const axios = require('axios');

const path = "http://localhost:3001"

const Yelp = {
    getBusinessesAndSort(sortby, searchTerm, searchLocation){
        return axios.get(`${path}/api/yelp/${sortby}?term=${searchTerm}&location=${searchLocation}`)
    }
}

export default Yelp