import React from 'react'
import { CardStyle } from './main.style'
import styled from 'styled-components'
const HomeCard = ({ background, title, text, icon }) => {
  return (
    <HomeCardStyle background={background}>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <span>{icon}</span>
    </HomeCardStyle>
  )
}

export default HomeCard

const HomeCardStyle = styled(CardStyle)`
  background: ${({ background }) => (background ? background : 'red')};
  h4 {
    margin: 0;
    font-size: 30px;
    font-weight: 600;
  }
  p {
    margin: 0;
    padding: 0 !important;
  }
  svg {
    font-size: 60px;
  }
  span {
    display: flex;
    justify-content: end;
    flex: 1;
  }
`
