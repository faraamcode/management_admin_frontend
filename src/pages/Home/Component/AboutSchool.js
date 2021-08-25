import React from 'react'
import { CardContainer } from '../../../components/Card'
import styled from 'styled-components'
import { H2 } from '../../../common/Global.Style'

import { StyleLink } from '../../../components/Button'
import { Underline } from '../../../common/Global.Style'

const Container = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Heading = styled(H2)`
  font-size: 25px;
  text-align: center;
  margin-bottom: 10px;

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
const Links = styled(StyleLink)`
  margin-left: 0;
`

export default function AboutSchool ({ heading, text, url, linkText, image }) {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Underline />
      <CardContainer>
        <img src={image} width='100%' height='50%' />
        <Paragraph>{text}</Paragraph>
        <Links to={url}>{linkText}</Links>
      </CardContainer>
    </Container>
  )
}
