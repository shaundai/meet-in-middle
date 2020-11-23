import React from 'react'
import { Form } from 'react-final-form'

import AddressForm from './AddressForm'

const AddressFormContainer = () => {

    const onSubmit = () => {
        return
    }

    const handleSubmit = () => {
        return
    }

        return (
            <Form 
                onSubmit={onSubmit}
                validate={null}
                render={({ handleSubmit }) => (
                    <AddressForm />
                )}
            />
                
        )
}

export default AddressFormContainer