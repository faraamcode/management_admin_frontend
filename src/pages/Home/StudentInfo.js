import React from 'react'
import styled from 'styled-components'
import Image1 from '../../assets/images/principal.JPG'
import Image2 from '../../assets/images/chairman.JPG'
import {
  RowSection,
  Underline,
  UnderlineStyle,
  Wrapper,
  CurveWrapper
} from '../../common/Global.Style'

export default function StudentInfo () {
  return (
    <CurveWrapper>
      <Wrapper background='rgb(255,255,255, 0.8)'>
        <Title>Our student Perspectives</Title>
        <UnderlineCenter></UnderlineCenter>
        <ImageWrapper>
          <div>
            <img src={Image1} />
            <img src={Image1} />
            <img src={Image2} />
            <img src={Image1} />
            <img src={Image2} />
            <img src={Image1} />
            <img src={Image1} />
          </div>
        </ImageWrapper>
        <UserTitle>
          <h5>Lorem Ipsum</h5>
          <span>Microsoft</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            officia laborum praesentium distinctio libero doloremque eveniet
            porro culpa dolorem explicabo sunt, quam suscipit voluptate itaque
            molestiae ullam eaque similique beatae.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quibusdam officia laborum praesentium
            distinctio libero doloremque eveniet porro culpa dolorem explicabo
            sunt, quam suscipit voluptate itaque molestiae ullam eaque similique
            beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam officia laborum praesentium distinctio libero doloremque
            eveniet porro culpa dolorem explicabo sunt, quam suscipit voluptate
            itaque molestiae ullam eaque similique beatae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            officia laborum praesentium distinctio libero doloremque eveniet
            porro culpa dolorem explicabo sunt, quam suscipit voluptate itaque
            molestiae ullam eaque similique beatae.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quibusdam officia laborum praesentium
            distinctio libero doloremque eveniet porro culpa dolorem explicabo
            sunt, quam suscipit voluptate itaque molestiae ullam eaque similique
            beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam officia laborum praesentium distinctio libero doloremque
            eveniet porro culpa dolorem explicabo sunt, quam suscipit voluptate
            itaque molestiae ullam eaque similique beatae.
          </p>
        </UserTitle>
      </Wrapper>
    </CurveWrapper>
  )
}
{
  /* <RowSection></RowSection> */
}

const ImageWrapper = styled(RowSection)`
  align-self: center;
  width: 100%;
  justify-content: center;
  div {
    display: flex;
    justify-self: center;
    align-items: center;
    justify-content: center;
    align-self: center;
    min-width: 300px;
    max-width: 100%;
    overflow-x: hidden;
  }
  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    padding: 20px;

    &:hover {
      cursor: pointer;
    }
  }
`

const UserTitle = styled.div`
  display: flex;
  flex-direction: column;
  h5 {
    text-align: center;
    margin: 0;
  }
  span {
    margin: 0;
    text-align: center;
    margin-bottom: 20px;
  }
  p {
    align-self: center;
    margin-top: 5px;
    text-align: center;
    max-width: 500px;
  }
`

const UnderlineCenter = styled(UnderlineStyle)`
  align-self: center;
`
const Title = styled.h2`
  text-align: center;
`
