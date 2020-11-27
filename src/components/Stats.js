import React from 'react'
import styled from 'styled-components'

const Stats = ({destinationAddress, distance, duration, originAddress}) => {
        return (
            <StatsContainer>
                {originAddress ? `Finding meeting points between ${originAddress} and ${destinationAddress}` : null}
                {originAddress ? `Distance per person ${duration} or ${distance}` : null}
                {originAddress ? `Here are some meeting places:` : null}
            </StatsContainer>
        )
}

export default Stats

const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
`