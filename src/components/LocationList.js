import React from 'react'
import styled from 'styled-components'

import { Colors } from './util/Colors'


const LocationList = (originAddress) => {
        return (
            <LocationListContainer>
                <div>Check out these meeting places:</div>
            </LocationListContainer>
        )
}

export default LocationList

const LocationListContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border: 1px solid black;
    font-family: Montserrat;
`