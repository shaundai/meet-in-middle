import React, { useState } from 'react';
import styled from 'styled-components'

const App = () => {
  const [startAndEnd, setStartAndEnd] = useState({start: '', end: ''})

  return (
    <AppContainer>
      <input type="text" value={startAndEnd.start} onChange={e => {setStartAndEnd({...startAndEnd, start: e.target.value})}}></input>
      <input type="text" value={startAndEnd.end} onChange={e => {setStartAndEnd({...startAndEnd, end: e.target.value})}}></input>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
`