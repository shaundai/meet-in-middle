import React from 'react'
import { Form } from 'react-final-form'

import AddressForm from './AddressForm'
import { Yelp } from './util/yelpApi'

const AddressFormContainer = () => {

    const onSubmit = async values => {
        window.alert(JSON.stringify(values.locationType, 0, 2))
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