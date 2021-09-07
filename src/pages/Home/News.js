import React from 'react'
import { RowSection, Wrapper } from '../../common/Global.Style'
import { CardContainerStyle } from '../../components/Card/card.style'
import styled from 'styled-components'
import NewsImage from '../../assets/images/kids.png'
import { StyleLink } from '../../components/Button'

const NewsGallery = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  background: red;
  img {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  span {
    position: absolute;
    left: 50%;
    bottom: 0;
    background: green;
    padding: 10px 5px;
    transform: translateY(-50%);
    transform: translate(-50%, 50%);
    min-width: 250px;
    z-index: 2;
  }
`
const NewLink = styled(StyleLink)`
  font-size: 18px;
  margin-top: 40px;
  margin-bottom: 40px;
  color: blue;
`
const SingleNewsWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`
const SingleNews = ({ title, info, image }) => {
  return (
    <SingleNewsWrapper>
      <NewsGallery>
        <img src={image} />
        <span>{title}</span>
      </NewsGallery>
      <NewLink>{info}</NewLink>
    </SingleNewsWrapper>
  )
}
export default function News () {
  return (
    <Wrapper>
      <RowSection>
        <SingleNews
          title='Fire outbreak'
          info='the fire outbreak in Jalingo claimed two lives. '
          image='https://res.cloudinary.com/faraamit/image/upload/v1630948172/design/pexels-tima-miroshnichenko-5428267_tzx3uj.jpg'
        />
        <SingleNews
          title='Fire outbreak'
          info='the fire outbreak in Jalingo claimed two lives. '
          image='https://res.cloudinary.com/faraamit/image/upload/v1630948172/design/pexels-tima-miroshnichenko-5428267_tzx3uj.jpg'
        />
        <SingleNews
          title='Fire outbreak'
          info='the fire outbreak in Jalingo claimed two lives. '
          image='https://res.cloudinary.com/faraamit/image/upload/v1630948172/design/pexels-tima-miroshnichenko-5428267_tzx3uj.jpg'
        />
        <SingleNews
          title='Fire outbreak'
          info='the fire outbreak in Jalingo claimed two lives. '
          image='https://res.cloudinary.com/faraamit/image/upload/v1630948172/design/pexels-tima-miroshnichenko-5428267_tzx3uj.jpg'
        />
      </RowSection>
    </Wrapper>
  )
}
