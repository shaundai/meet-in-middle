import React from 'react';
import styled from 'styled-components'

import { Colors } from './util/Colors'
import AddressFormContainer from './AddressFormContainer'
import NavBar from './NavBar'


const App = () => {

  return (
    <AppContainer>
      <NavBar />
      <AddressFormContainer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-width: 540px;
background-color: ${Colors.darkGrey}
`
