const axios = require('axios');

const path = "http://localhost:3001"

const Google = {

    //finds travel distance and time to get to two locations based on recommended route on roads
    //start and end locations should be either lat/long separated by a comma or words separated by + signs
    findDistanceBetweenTwoLocations(startLocation, endLocation){
        return axios.get(`${path}/api/google/distance?searchorigins=${startLocation}&searchdestinations=${endLocation}`)
    },

    

}

export default Google