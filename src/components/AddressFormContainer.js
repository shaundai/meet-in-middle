import React, { useState } from 'react'
import { Form } from 'react-final-form'

import AddressForm from './AddressForm'
import Yelp from './util/yelpApi'
import { findDistanceBetweenTwoLocations } from './util/googleApi'

const AddressFormContainer = () => {

    const [distance, setDistance] = useState('')
    const [originAddress, setOriginAddress] = useState('')
    const [destinationAddress, setDestinationAddress] = useState('')

    const onSubmit = async (values) => {
        try {
            const distanceBetween = await findDistanceBetweenTwoLocations(values.firstLocation, values.secondLocation)
            setDistance(distanceBetween.distance.text)
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
            hi {distance}
                 </div>
        )
}

export default AddressFormContainer