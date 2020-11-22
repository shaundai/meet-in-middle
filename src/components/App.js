import React from 'react';
import styled from 'styled-components'

import { Colors } from './util/Colors'
import AddressForm from './AddressForm'
import LocationList from './LocationList'
import NavBar from './NavBar'


const App = () => {

  return (
    <AppContainer>
      <NavBar />
      <AddressForm />
      <LocationList />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background-color: ${Colors.darkGrey}
`
