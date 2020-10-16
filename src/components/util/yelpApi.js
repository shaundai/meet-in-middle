const axios = require('axios');

const path = "http://localhost:3001"

const Yelp = {
    //returns list of businesses after search by term, location, and a sorting method
    getBusinessesAndSort(searchTerm, searchLocation, sortBy){
        return axios.get(`${path}/api/yelp/businesses/list?searchterm=${searchTerm}&searchlocation=${searchLocation}&sortby=${sortBy}`)
    }
}

export default Yelp