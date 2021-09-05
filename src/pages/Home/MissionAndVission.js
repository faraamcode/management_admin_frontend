import React from 'react'
import styled from 'styled-components'
import { RowSection, Wrapper } from '../../common/Global.Style'
import VissionImage from '../../assets/images/Vission.png'
import SchoolImage from '../../assets/images/School-Icon.png'

const SingleInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  align-items: center;
  margin: 20px 0;
  justify-content: center;
  img {
    flex: 1;
    margin-bottom: 20px;
    max-width: 100px;
    max-height: 100px;
  }
  p {
    text-align: center;
  }
  h5 {
    text-align: center;
    text-transform: uppercase;
  }
  @media screen and(min-width : 760px) {
    margin: 0;
  }
`

const SingleInfo = ({ image, text, title }) => {
  return (
    <SingleInfoWrapper>
      <img src={image} />
      <div>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </SingleInfoWrapper>
  )
}
export default function MissionAndVission () {
  return (
    <Wrapper minHeight='40vh'>
      <RowSection maxWidth='1200px'>
        <SingleInfo
          image='https://res.cloudinary.com/faraamit/image/upload/v1630415082/mission_pc3p7y.png'
          text='          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ea
          molestiae cupiditate nisi iste quaerat, voluptate debitis sequi
          expedita enim deleniti quos, libero eos aliquid illo omnis quam
          nostrum error. Vel quaerat doloribus modi magnam soluta necessitatibus
          quasi repellat culpa?
          '
          title='our vision'
        />
        <SingleInfo
          image={VissionImage}
          text='          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ea
          molestiae cupiditate nisi iste quaerat, voluptate debitis sequi
          expedita enim deleniti quos, libero eos aliquid illo omnis quam
          nostrum error. Vel quaerat doloribus modi magnam soluta necessitatibus
          quasi repellat culpa?
          '
          title='our mission'
        />
        <SingleInfo
          image={SchoolImage}
          text='          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ea
          molestiae cupiditate nisi iste quaerat, voluptate debitis sequi
          expedita enim deleniti quos, libero eos aliquid illo omnis quam
          nostrum error. Vel quaerat doloribus modi magnam soluta necessitatibus
          quasi repellat culpa?
          '
          title='our school'
        />
      </RowSection>
    </Wrapper>
  )
}
