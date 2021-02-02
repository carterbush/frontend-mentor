import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import kumbhSansRegular from '../fonts/KumbhSans-Regular.ttf'
import kumbhSansBold from '../fonts/KumbhSans-Bold.ttf'
import kumbhSansLight from '../fonts/KumbhSans-Light.ttf'

import FaqAccordionCard from './FaqAccordionCard'

const theme = {
    colors: {
        verydarkdesaturatedblue: 'hsl(238, 29%, 16%)',
        softred: 'hsl(14, 88%, 65%)',
        softviolet: 'hsl(273, 75%, 66%)',
        softblue: 'hsl(240, 73%, 65%)',
        verydarkgrayishblue: 'hsl(237, 12%, 33%)',
        darkgrayishblue: 'hsl(240, 6%, 50%)',
        lightgrayishblue: 'hsl(240, 5%, 91%)'
    },
    sizes: {
        mobile: '375px',
        desktop: '1440px'
    }
}

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Kumbh Sans';
        src: url(${kumbhSansRegular});
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Kumbh Sans';
        src: url(${kumbhSansBold});
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Kumbh Sans';
        src: url(${kumbhSansLight});
        font-weight: 300;
        font-style: normal;
    }

    * {
        font-family: 'Kumbh Sans';
        font-size: 12px;
        box-sizing: border-box;
        color: ${props => props.theme.colors.verydarkgrayishblue};
    }
`

const Screen = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(${props => props.theme.colors.softviolet}, ${props => props.theme.colors.softblue});

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

const FaqAccordionCardScreen = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Screen>
                <FaqAccordionCard />
            </Screen>
        </ThemeProvider>
    )
}

export default FaqAccordionCardScreen