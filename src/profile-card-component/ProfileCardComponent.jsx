import React from 'react'
import styled from 'styled-components'

import bgPatternCard from './images/bg-pattern-card.svg'
import victor from './images/image-victor.jpg'

const StatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Value = styled.div`
`

const Label = styled.div`
    color: ${props => props.theme.colors.darkgrey};
    font-size: 12px;
`

const Stat = ({ value, label }) => (
    <StatWrapper>
        <Value><strong>{value}</strong></Value>
        <Label>{label}</Label>
    </StatWrapper>
)


const Card = styled.div`
    width: 325px;
    height: 375px;
    display: flex;
    flex-direction: column;

    border-radius: 20px;
    background-image: url(${bgPatternCard});
`

const CardContent = styled.div`
    margin-top: 135px;

    display: flex;
    flex-direction: column;
    align-items: center;

    flex-grow: 1;
    background-color: white;
    border-radius: 0 0 20px 20px;
    font-size: 18px;
    font-weight: 400;
`

const Avatar = styled.img`
    margin-top: -50px;

    border-radius: 50px;
    border: 5px solid white;
`

const Padding = styled.div`
    flex-grow: 1;
`

const Stats = styled.div`
    align-self: stretch;

    display: flex;
    justify-content: space-around;

    padding: 25px 10px;
    border-top: 1px solid ${props => props.theme.colors.darkgrey};
`

const NameAge = styled.div`
    margin: 20px 0 5px 0;
`

const Name = styled.span`
    font-weight: 700;
    margin-right: 10px;
`

const Age = styled.span`
    color: ${props => props.theme.colors.darkgrey};
`

const Location = styled.div`
    color: ${props => props.theme.colors.darkgrey};
    font-size: 16px;
`

const ProfileCardComponent = ({
    name = 'Victor Crest',
    age = 26,
    location ='London',
    followers = '80K',
    likes = '803K',
    photos = '1.4K'
}) => {
    return (
        <Card>
            <CardContent>
                <Avatar src={victor} />
                <NameAge>
                    <Name>{name}</Name>
                    <Age>{age}</Age>
                </NameAge>
                <Location>{location}</Location>
                <Padding />
                <Stats>
                    <Stat value={followers} label='Followers'/>
                    <Stat value={likes} label='Likes'/>
                    <Stat value={photos} label='Photos'/>
                </Stats>
            </CardContent>
        </Card>
    )
}
export default ProfileCardComponent