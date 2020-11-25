import React, { useState } from 'react'
import { Form } from 'react-final-form'

import AddressForm from './AddressForm'
import Yelp from './util/yelpApi'
import { findDistanceBetweenTwoLocations } from './util/googleApi'

const AddressFormContainer = () => {

    const onSubmit = async (values) => {
        try {
            const distanceBetween = await findDistanceBetweenTwoLocations(values.firstLocation, values.secondLocation)
            return distanceBetween
            console.log(distanceBetween)
        }
        catch(err){
          console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
        }
    }
    
        return (
            <Form 
                onSubmit={onSubmit}
                render={({ handleSubmit, form, values, submitting, pristine }) => (
                    <AddressForm handleSubmit={handleSubmit} />
                )}
            />
                
        )
}

export default AddressFormContainer