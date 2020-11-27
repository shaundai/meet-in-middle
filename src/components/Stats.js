import React from 'react'

const Stats = ({destinationAddress, distance, duration, originAddress}) => {
        return (
            <div>
                {originAddress ? `Finding meeting points between ${originAddress} and ${destinationAddress}` : null}
                The distance between {distance} {duration}
                Middle points are {} and will take each party {} to get to
            </div>
        )
}

export default Stats