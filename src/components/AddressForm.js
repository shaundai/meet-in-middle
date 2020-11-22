import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import styled from 'styled-components'

import { Colors } from './util/Colors'


const AddressForm = () => {
    const [startAndEnd, setStartAndEnd] = useState({start: '', end: '', locationType: 'All'})

        return (
            <FormContainer>
            <AddressesContainer>

                <SingleAddressContainer>
                <Label>First Location:</Label>
                <InputBox type="text" placeholder="ex. 123 Sesame Street or Boston, MA" value={startAndEnd.start} onChange={e => {setStartAndEnd({...startAndEnd, start: e.target.value})}}></InputBox>
                </SingleAddressContainer>

                <Label>
                Second Location:
                <InputBox type="text" placeholder="ex. 123 Sesame Street or Boston, MA" value={startAndEnd.end} onChange={e => {setStartAndEnd({...startAndEnd, end: e.target.value})}}></InputBox>
                </Label>

            </AddressesContainer>

            <LocationTypeContainer>

                <SingleAddressContainer>
                <Label>Location Type (optional):</Label>
                <SelectBox value={startAndEnd.locationType} onChange={e => {setStartAndEnd({...startAndEnd, locationType: e.target.value})}}>
                    <option value="All">Any</option>
                    <option value="food">Restaurant/Bar</option>
                    <option value="active">Things to Do</option>
                    <option value="shopping">Shopping</option>
                </SelectBox>
                </SingleAddressContainer>

            </LocationTypeContainer>

            <SubmitContainer>
                <SubmitButton type="submit" value="Find A Place" />
            </SubmitContainer>
    
    
          </FormContainer>
        )
}


export default AddressForm;


const FormContainer = styled.div`
width: 75%;
padding: 15px 0;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
font-family: Montserrat;
`

const Label = styled.label`
color: ${Colors.lightGrey};
`

const SingleAddressContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const AddressesContainer = styled.div`
display: flex;
width: 80%;
justify-content: space-between;
margin: 0 auto;
padding: 40px 0;
font-family: Montserrat;
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

const LocationTypeContainer = styled.div`
display: flex;
width: 80%;
justify-content: center;
margin-top: 5px;
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