import React from 'react'
import styled from 'styled-components'

import { Colors } from './util/Colors'

const NavBar = () =>  {
        return (
            <NavContainer>
                <HeaderText>
                    <span>Let's</span> Meet In The Middle
                </HeaderText>
            </NavContainer>
        )
}

export default NavBar

const NavContainer = styled.div`
    color: ${Colors.offWhite};
    display: flex;
    justify-content: center;
    height: 50px;
`

const HeaderText = styled.div`
    font-weight: bold;
`