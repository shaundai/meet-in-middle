import React from 'react'
import styled from 'styled-components'

import { Colors } from './util/Colors'

const NavBar = () =>  {
        return (
            <NavContainer>
                <HeaderText>
                    <div>Let's</div><div> Meet In The Middle</div>
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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const HeaderText = styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
`