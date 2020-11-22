import React from 'react'
import styled from 'styled-components'

import { Colors } from './util/Colors'

const NavBar = () =>  {
        return (
            <NavContainer>
                <HeaderText>
                    <Lets>Let's</Lets><MeetInMiddle> Meet In The Middle</MeetInMiddle>
                </HeaderText>
            </NavContainer>
        )
}

export default NavBar

const NavContainer = styled.div`

    color: ${Colors.offWhite};
    display: flex;
    justify-content: center;
    height: 70px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const HeaderText = styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 2.5em;
`

const Lets = styled.div`
    font-style: italic;
    font-family: Montserrat;
    padding-right: .4em;
    color: #C0C0F2;
`
const MeetInMiddle = styled.div`
    font-family: Barlow;
`