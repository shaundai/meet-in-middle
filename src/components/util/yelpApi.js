const axios = require('axios');

const path = "http://localhost:3001"

const Yelp = {
    getBusinessesAndSort(){
        return axios.get(`${path}/api/team/id/${userId}`)
    }
}