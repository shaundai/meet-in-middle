import React, { useState } from 'react'
import styled from 'styled-components'

const Form = () => {
    const [startAndEnd, setStartAndEnd] = useState({start: '', end: '', locationType: 'All'})

        return (
            <FormContainer>
            <label>
              First Address/City:
            <InputBox type="text" value={startAndEnd.start} onChange={e => {setStartAndEnd({...startAndEnd, start: e.target.value})}}></InputBox>
            </label>
            <label>
              Second Address/City:
            <InputBox type="text" value={startAndEnd.end} onChange={e => {setStartAndEnd({...startAndEnd, end: e.target.value})}}></InputBox>
            </label>
            <label>
              Meeting Location Type:
              <select value={startAndEnd.locationType} onChange={e => {setStartAndEnd({...startAndEnd, locationType: e.target.value})}}>
                <option value="All">Any</option>
                <option value="food">Restaurant/Bar</option>
                <option value="active">Things to Do</option>
                <option value="shopping">Shopping</option>
              </select>
            </label>
    
            <SubmitButton type="submit" value="Submit" />
    
    
          </FormContainer>
        )
}


export default Form;


const FormContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
`

const InputBox = styled.input`
display: flex;
`
const SubmitButton = styled.input`
display: flex;
`