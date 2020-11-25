const axios = require('axios');

const path = "http://localhost:3001"

const Google = {


}

export default Google

    //finds travel distance and time to get to two locations based on recommended route on roads
    //start and end locations should be either lat/long separated by a comma or words separated by + signs
export const findDistanceBetweenTwoLocations = async (startLocation, endLocation) => {
        return axios.get(`${path}/api/google/distance?searchorigins=${startLocation}&searchdestinations=${endLocation}`)
    }
