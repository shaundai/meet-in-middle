import React, { useState } from 'react'
import { Form } from 'react-final-form'

import AddressForm from './AddressForm'
import Stats from './Stats'
import LocationList from './LocationList'
import Yelp from './util/yelpApi'
import { findDistanceBetweenTwoLocations } from './util/googleApi'

const AddressFormContainer = () => {

    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [midDuration, setMidDuration] = useState('')
    const [originAddress, setOriginAddress] = useState('')
    const [destinationAddress, setDestinationAddress] = useState('')

        
    const findMiddlePoint = (duration) => {
        const midDuration = duration / 2
        setDuration(duration ? midDuration : null)
    }

    const onSubmit = async (values) => {
        try {
            const distanceBetween = await findDistanceBetweenTwoLocations(values.firstLocation, values.secondLocation)
            setOriginAddress(distanceBetween.origin_addresses)
            setDestinationAddress(distanceBetween.destination_addresses)
            setDistance(distanceBetween.rows[0].elements[0].distance.text)
            setDuration(distanceBetween.rows[0].elements[0].duration.text)
            setMidDuration(distanceBetween.rows[0].elements[0].duration.value / 2) //doesnt work..need to convert mins
        }
        catch(err){
          console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
        }
    }


        return (
            <div>
                <Form 
                    onSubmit={onSubmit}
                    render={({ handleSubmit, form, values, submitting, pristine }) => (
                        <AddressForm handleSubmit={handleSubmit} />
                    )}
                />
                <Stats
                    originAddress={originAddress}
                    destinationAddress={destinationAddress}
                    distance={distance}
                    duration={duration}
                />
                <LocationList
                    originAddress={originAddress}
                />
                {midDuration} hi there {duration}
                 </div>
        )
}

export default AddressFormContainer