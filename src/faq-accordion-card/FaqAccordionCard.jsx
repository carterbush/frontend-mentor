import React from 'react'
import styled from 'styled-components'
import Accordion from './Accordion.jsx'

import MobileIllustration from './images/illustration-woman-online-mobile.svg'
import MobileBg from './images/bg-pattern-mobile.svg'

import DesktopIllustrationBox from './images/illustration-box-desktop.svg'
import DesktopIllustration from './images/illustration-woman-online-desktop.svg'
import DesktopBg from './images/bg-pattern-desktop.svg'

const faqData = [
    { 
        question: 'How many team members can I invite?',
        answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    },
    {
        question: 'What is the maximum file upload size?',
        answer: 'No more than 2GB. All files in your account must fit your allotted storage space.'
    },
    {
        question: 'How do I reset my password?',
        answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
    },
    {
        question: 'Can I cancel my subscription?',
        answer: 'Yes! Send us a message and we’ll process your request no questions asked.'
    },
    {
        question: 'Do you provide additional support?',
        answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
    }
]

const Wrapper = styled.div`
    background: white;
    border-radius: 25px;
    padding: 25px;
    width: 100%;
    max-width: 925px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${props => props.theme.sizes.desktop}) {
        flex-direction: row;
        padding: 0px;
    }
`


const MobileArt = styled.div`
    display: none;

    @media (max-width: ${props => props.theme.sizes.desktop}) {
        display: flex;
        flex-direction: column;
        max-width: 250px;
        margin-top: -130px
    }
`

const MobileImage = styled.img`
    margin-left: -30px;
`

const MobileBackground = styled.img`
    margin-top: -90px;
`

const DesktopArt = styled.div`
    display: none;

    @media (min-width: ${props => props.theme.sizes.desktop}) {
        flex: 1 0 50%;
        height: 100%;
        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: center;
`

const DesktopHiddenArt = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        overflow: hidden;
        position: relative;
`

const DesktopImage = styled.img`
    position: absolute;
    left: -85px;
`

const DesktopBoxImage = styled.img`
    position: absolute;
    margin-top: 90px;
    left: -93px;
`

const DesktopBackground = styled.img`
    margin-top: -150px;
    position: absolute;
    left: -580px;
`

const QuestionWrapper = styled.div`
    flex: 1 0 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 25px;

    @media (min-width: ${props => props.theme.sizes.desktop}) {
        padding: 0;
        margin: 50px 100px 50px 0;
    }
`

const QuestionBlock = styled.div`
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${props => props.theme.sizes.desktop}) {
        align-items: start;
    }
`

const Title = styled.h1`
    margin: 0;
    padding: 25px 0 20px 0;
    font-size: 32px;
    color: black;
`

const FaqAccordionCard = (props) => {
    return (
        <Wrapper className={props.className}>
            <MobileArt>
                <MobileImage alt='' src={MobileIllustration}/>
                <MobileBackground alt='' src={MobileBg}/>
            </MobileArt>
            <DesktopArt>
                <DesktopHiddenArt>
                    <DesktopBackground alt='' src={DesktopBg} />
                    <DesktopImage alt='' src={DesktopIllustration} />
                </DesktopHiddenArt>
                <DesktopBoxImage alt='' src={DesktopIllustrationBox} />
            </DesktopArt>
            <QuestionWrapper>
                <QuestionBlock>
                    <Title>FAQ</Title>
                    {faqData.map(data => <Accordion key={data.question} header={data.question} body={data.answer} />)}
                </QuestionBlock>
            </QuestionWrapper>
        </Wrapper>
    )
}

export default FaqAccordionCard