import React, { useState } from 'react';
import styled from 'styled-components'

const App = () => {
  const [startAndEnd, setStartAndEnd] = useState({start: '', end: ''})

  return (
    <AppContainer>

      <FormContainer>
        <InputBox type="text" value={startAndEnd.start} onChange={e => {setStartAndEnd({...startAndEnd, start: e.target.value})}}></InputBox>
        <InputBox type="text" value={startAndEnd.end} onChange={e => {setStartAndEnd({...startAndEnd, end: e.target.value})}}></InputBox>
        <InputBox type="submit" value="Submit" />
      </FormContainer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
display: flex;
width: 100%;
`

const FormContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
`

const InputBox = styled.input`
display: flex;
`