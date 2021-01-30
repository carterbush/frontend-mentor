import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

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
    }
}

const GlobalStyle = createGlobalStyle`
`

const Screen = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(${props => props.theme.colors.softviolet}, ${props => props.theme.colors.softblue});
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