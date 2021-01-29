import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import ProfileCardComponent from './ProfileCardComponent'

import bgPatternBottom from './images/bg-pattern-bottom.svg'
import bgPatternTop from './images/bg-pattern-top.svg'
import kumbhSansRegular from './fonts/KumbhSans-Regular.ttf'
import kumbhSansBold from './fonts/KumbhSans-Bold.ttf'
import kumbhSansLight from './fonts/KumbhSans-Light.ttf'

const theme = {
    colors: {
        darkcyan: 'hsl(185, 75%, 39%)',
        verydarkdesaturatedblue: 'hsl(229, 23%, 23%)',
        darkgrayishblue: 'hsl(227, 10%, 46%)',
        darkgrey: 'hsl(0, 0%, 59%)',
    },
}

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Kumbh Sans';
        src: url(${kumbhSansRegular});
        fonr-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Kumbh Sans';
        src: url(${kumbhSansBold});
        fonr-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Kumbh Sans';
        src: url(${kumbhSansLight});
        fonr-weight: 300;
        font-style: normal;
    }

    * {
        font-family: 'Kumbh Sans';
    }
`

const Screen = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.darkcyan};
    background-image: url(${bgPatternTop}), url(${bgPatternBottom});
    background-position: top left, bottom right;
    background-repeat: no-repeat, no-repeat;
`

const ProfileCardComponentScreen = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Screen>
                <ProfileCardComponent />
            </Screen>
        </ThemeProvider>
    )
}

export default ProfileCardComponentScreen