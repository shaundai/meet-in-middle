import React from 'react'
import { Form } from 'react-final-form'

import AddressForm from './AddressForm'

const AddressFormContainer = () => {

    const onSubmit = async values => {
        window.alert(JSON.stringify(values, 0, 2))
    }
    
        return (
            <Form 
                onSubmit={onSubmit}
                validate={null}
                render={({ handleSubmit, form, values, submitting, pristine }) => (
                    <AddressForm handleSubmit={handleSubmit} />
                )}
            />
                
        )
}

export default AddressFormContainer