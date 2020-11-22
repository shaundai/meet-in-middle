import React, { useState } from 'react'
import styled from 'styled-components'

import { Colors } from './util/Colors'


const Form = () => {
    const [startAndEnd, setStartAndEnd] = useState({start: '', end: '', locationType: 'All'})

        return (
            <FormContainer>
            <AddressesContainer>

                <Label>
                First Address/City:
                <InputBox type="text" value={startAndEnd.start} onChange={e => {setStartAndEnd({...startAndEnd, start: e.target.value})}}></InputBox>
                </Label>

                <Label>
                Second Address/City:
                <InputBox type="text" value={startAndEnd.end} onChange={e => {setStartAndEnd({...startAndEnd, end: e.target.value})}}></InputBox>
                </Label>
            </AddressesContainer>

            <Label>
              Meeting Location Type:
              <select value={startAndEnd.locationType} onChange={e => {setStartAndEnd({...startAndEnd, locationType: e.target.value})}}>
                <option value="All">Any</option>
                <option value="food">Restaurant/Bar</option>
                <option value="active">Things to Do</option>
                <option value="shopping">Shopping</option>
              </select>
            </Label>
    
            <SubmitButton type="submit" value="Submit" />
    
    
          </FormContainer>
        )
}


export default Form;


const FormContainer = styled.div`
width: 75%;
padding: 15px 0;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
font-family: Montserrat;
border: 1px solid black;
`

const Label = styled.label`
color: ${Colors.lightGrey}
`

const AddressesContainer = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
margin: 0 auto;
padding: 40px 0;
font-family: Montserrat;
`

const InputBox = styled.input`
display: flex;
background-color: ${Colors.offWhite};
border-radius: 8px;
height: 30px;
width: 280px;
margin-top: 10px;
`
const SubmitButton = styled.input`
padding: 5px;
width: 120px;
border-width: 1px;
border-radius: 20px;
font-weight: bold;
font-size: 1em;
font-family: Montserrat;
background-color: ${Colors.mainPurple};
color: ${Colors.offWhite};
`