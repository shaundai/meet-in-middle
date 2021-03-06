import React from 'react'
import styled from 'styled-components'
import { Field } from 'react-final-form'

import { Colors } from './util/Colors'


const AddressForm = ({handleSubmit, form, values, submitting, pristine}) => {

    const required = value => (value ? undefined : 'Required')

        return (
            <FormContainer onSubmit={handleSubmit}>
            <AddressesContainer>

                <Field
                    name="firstLocation"
                    validate={required}
                    render={({ input, meta }) => (
                    <SingleInputContainer>
                        <LabelContainer>
                            <Label>First Location:</Label>
                            {meta.error && meta.touched && <FieldError>{meta.error}</FieldError>}
                        </LabelContainer>
                        <InputBox type="text" {...input} placeholder="ex. 123 Sesame Street or Boston, MA" ></InputBox>
                    </SingleInputContainer>
                    )}
                />

                <Field
                    name="secondLocation"
                    validate={required}
                    render={({ input, meta }) => (
                        <SingleInputContainer>
                            <LabelContainer>
                                <Label>Second Location:</Label>
                                {meta.error && meta.touched && <FieldError>{meta.error}</FieldError>}
                            </LabelContainer>
                            <InputBox type="text" {...input} placeholder="ex. 123 Sesame Street or Boston, MA" ></InputBox>
                        </SingleInputContainer>
                    )}
                />

            </AddressesContainer>

            <LocationTypeContainer>
                <Field
                    name="locationType"
                    initialValue={"all"}
                    render={({ input }) => (
                    <SingleInputContainer>
                        <Label>Location Type (optional):</Label>
                        <SelectBox {...input}>
                            <option value="all">Any</option>
                            <option value="food">Restaurant/Bar</option>
                            <option value="active">Things to Do</option>
                            <option value="shopping">Shopping</option>
                        </SelectBox>
                    </SingleInputContainer>
                    )}
                />
            </LocationTypeContainer>

            <SubmitContainer>
                <SubmitButton
                    type="submit"
                    value="Find A Place"
                    disabled={submitting || pristine}
               />
            </SubmitContainer>
    
    
          </FormContainer>
        )
}


export default AddressForm;


const FormContainer = styled.form`
width: 80%;
max-width: 1060px;
padding: 15px 0;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
font-family: Montserrat;
`

const LabelContainer = styled.div`
    display: flex;
    justify-content: space-between
    `

const Label = styled.label`
color: ${Colors.lightGrey};
`

const SingleInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 1160px) {
        margin-top: 20px;
    }
`

const AddressesContainer = styled.div`
display: flex;
width: 80%;
justify-content: space-between;
margin: 0 auto;
padding: 40px 0px;
font-family: Montserrat;
@media (max-width: 1160px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px 0 0 0;
  }
`

const InputBox = styled.input`
display: flex;
background-color: ${Colors.offWhite};
border-radius: 8px;
height: 30px;
width: 320px;
margin-top: 10px;
padding: 0 10px;
font-family: Montserrat;
font-size: .9em;
`

const FieldError = styled.span`
color: ${Colors.errorRed};
font-weight: bold;
padding-right: 15px;
justify-self: right;
margin-bottom: 0;
`

const LocationTypeContainer = styled.div`
display: flex;
width: 80%;
justify-content: center;
margin-top: 5px;
@media (max-width: 1160px) {
        margin: 0;
    }
`

const SelectBox = styled.select`
margin-top: 10px;
background-color: ${Colors.offWhite};
padding: 0 9px;
border-radius: 8px;
font-family: Montserrat;
font-size: .9em;
color: ${Colors.mainBlack};
height: 35px;
width: 230px;
border-width: 2px;
border-style: inset;
border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
`

const SubmitContainer = styled.div`
display: flex;
`

const SubmitButton = styled.input`
margin: 30px 0 20px;
padding: 5.5px 9px;
width: 140px;
border-width: 1px;
border-radius: 20px;
font-weight: bold;
font-size: 1em;
font-family: Montserrat;
background-color: ${Colors.mainPurple};
color: ${Colors.offWhite};
`