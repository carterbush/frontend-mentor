import React from 'react'
import styled from 'styled-components'
import iconArrowDown from './images/icon-arrow-down.svg'

const Wrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.colors.lightgrayishblue};
    padding: 15px 0;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    ${props => props.strong ? 'color: black; font-weight: 700;' : ''}

    &:hover {
        color: ${props => props.theme.colors.softred};
    }
`

const Bottom = styled.div`
    margin-top: 15px;
    line-height: 1.5em;
    color: ${props => props.theme.colors.darkgrayishblue};
`

const DownArrow = (props) => <div><img className={props.className} alt='' src={iconArrowDown}/></div>
const UpArrow = styled(DownArrow)`
    transform: rotate(180deg);
`


const Accordion = (props) => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <Wrapper onClick={() => setIsOpen(!isOpen)}>
            {isOpen ?
                <>
                    <Top strong>{props.header}<UpArrow/></Top>
                    <Bottom>{props.body}</Bottom>
                </> :
                <Top>{props.header}<DownArrow/></Top>
            }
        </Wrapper>
    )
}

export default Accordion