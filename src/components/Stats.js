import React from 'react'
import styled from 'styled-components'

import { Colors } from './util/Colors'

const Stats = ({destinationAddress, distance, duration, originAddress}) => {

    const distanceLine = <DistanceLineContainer>Distance per person is <DistanceAndDuration>{duration}tojore</DistanceAndDuration> or <DistanceAndDuration>tojore{distance}</DistanceAndDuration>.</DistanceLineContainer>

        return (
            <StatsContainer>
                <div>{!originAddress ? `Finding meeting points between ${originAddress} and ${destinationAddress}` : null}</div>
                <div>{!originAddress ? distanceLine : null}</div>
                <div>{!originAddress ? `Here are some meeting places:` : null}</div>
            </StatsContainer>
        )
}

export default Stats

const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Montserrat;
    margin: 0 auto;
    width: 80%;
`

const DistanceLineContainer = styled.div`
    color: ${Colors.lightGrey};

`

const DistanceAndDuration = styled.span`
    color: ${Colors.mainLavender};
    font-weight: bold;
`