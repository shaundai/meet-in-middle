import React from 'react'
import styled from 'styled-components'

import { Colors } from './util/Colors'

const Stats = ({destinationAddress, distance, duration, originAddress}) => {

    const meetingPointsLine = <MeetingLineContainer>Finding meeting points between <DistanceAndDuration>{originAddress}</DistanceAndDuration> and <DistanceAndDuration>{destinationAddress}</DistanceAndDuration></MeetingLineContainer>
    const distanceLine = <DistanceLineContainer>Distance per person is <DistanceAndDuration>{duration}</DistanceAndDuration> or <DistanceAndDuration>{distance}</DistanceAndDuration>.</DistanceLineContainer>

        return (
            <StatsContainer>
                <div>{originAddress ? meetingPointsLine : null}</div>
                <div>{originAddress ? distanceLine : null}</div>
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
    max-width: 1060px;
    padding: 15px 0;
    text-align: center;
`

const DistanceLineContainer = styled.div`
    color: ${Colors.lightGrey};

`

const MeetingLineContainer = styled.div`
`

const DistanceAndDuration = styled.span`
    color: ${Colors.mainLavender};
    font-weight: bold;
`