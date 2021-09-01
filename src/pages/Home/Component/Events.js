import React from 'react'
import { CardContainer } from '../../../components/Card'
import styled from 'styled-components'
import { H2 } from '../../../common/Global.Style'
import { VscLocation } from 'react-icons/vsc'
import { WiTime4 } from 'react-icons/wi'
import { StyleLink } from '../../../components/Button'
import { Underline } from '../../../common/Global.Style'

const Container = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  min-height: 600px;
`
const Heading = styled(H2)`
  font-size: 25px;
  text-align: left;
  margin-bottom: 10px;
  margin-left: 0;

  @media (max-width: 500px) {
    font-size: 25px;
  }
  @media (min-width: 501px) and (max-width: 750px) {
    font-size: 25px;
  }
  @media (min-width: 751px) and (max-width: 1000px) {
    font-size: 25px;
  }
`
const Paragraph = styled.p`
  font-size: 15px;
`
const ViewAllLink = styled(StyleLink)`
  margin-top: 20px;
  margin-left: 0;
`

const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const EventWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  padding-top: 10px;
`
const EventDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 60px;
  min-width: 60px;
  height: 60px;
  h5 {
    margin: 0;
    font-weight: 700;
    font-size: 20px;
  }
  p {
    margin: 0;
  }
`
const DetailsContainer = styled.div`
  margin: 0;
  padding: 0;
  //   width: 300px;
  margin-left: 30px;
  h5 {
    margin: 0;
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 10px;
  }
  div {
    display: flex;
    justify-items: center;
  }
  span {
    display: flex;
    justify-items: center;
    margin-right: 10px;
  }
`

const Links = styled(StyleLink)`
  margin-left: 0;
`
const SingleEvent = ({ time, day, month, venue, title }) => {
  return (
    <EventWrapper>
      <EventDate>
        <h5>{day}</h5>
        <p>{month}</p>
      </EventDate>
      <DetailsContainer>
        <h5>{title}</h5>
        <div>
          <span>
            <WiTime4 />
            {time}
          </span>
          <span>
            <VscLocation />
            {venue}
          </span>
        </div>
      </DetailsContainer>
    </EventWrapper>
  )
}
export default function Event ({}) {
  return (
    <Container>
      <Heading>Events</Heading>
      <Underline />
      <EventsContainer>
        <SingleEvent
          time='9:00'
          day='08'
          month='Apr'
          venue='assembly hall'
          title='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        />
        <SingleEvent
          time='9:00'
          day='08'
          month='Apr'
          venue='assembly hall'
          title='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        />
        <SingleEvent
          time='9:00'
          day='08'
          month='Apr'
          venue='assembly hall'
          title='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        />
        <ViewAllLink to='/'> Read more...</ViewAllLink>
      </EventsContainer>
    </Container>
  )
}
