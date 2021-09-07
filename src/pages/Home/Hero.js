import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image1 from '../../assets/images/cheerful.jpg'
import Image2 from '../../assets/images/dashboard.png'
import Image3 from '../../assets/images/chairman.JPG'
import Image4 from '../../assets/images/graduands.JPG'
import Image5 from '../../assets/images/principal.JPG'
const Wrapper = styled.div`
  position: relative;
  padding: 0;
  width: 100%;
  height: 70vh;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`
const OtherImageContainer = styled.div`
  opacity: ${({ position }) => (position == 4 ? 0.3 : null)};
  width: ${({ position }) =>
    position == 0 || position == 4 ? '100%' : '300px'};
  height: ${({ position }) =>
    position == 0 || position == 4 ? '100%' : '250px'};
  position: ${({ position }) => (position == 0 ? null : 'absolute')};
  padding-right: ${({ position }) =>
    position == 0 || position == 4 ? 0 : '20px'};
  transition: all 3s linear;
  top: ${({ position }) => (position == 0 || position == 4 ? 0 : '40%')};
  right: ${({ position }) => (position == 0 || position == 4 ? 0 : '45%')};
  z-index: ${({ position }) => (position == 0 ? -1 : 4)};
  ${({ position }) => (position == 4 ? 'z-index: -2;' : null)}
  img {
    border-radius: ${({ position }) =>
      position == 0 || position == 4 ? 0 : '5px'};
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 760px) {
    ${({ position }) => (position !== 0 ? 'display: none;' : null)}
  }
  transform: translateX(
    ${({ position }) => (position == 4 ? '-100%' : position)}00%
  );

  div {
    position: absolute;
    left: 10%;
    bottom: 10%;
  }
  h5 {
    color: white;
    max-width: ${({ position }) => (position == 0 ? '200px' : '100px')};
    font-size: ${({ position }) => (position == 0 ? '40px' : '10px')};
    text-transform: uppercase;
    letter-spacing: 5px;
    margin: 0;
  }
  p {
    color: white;
    font-size: ${({ position }) => (position == 0 ? '10px' : '5px')};
    text-transform: uppercase;
    letter-spacing: 5px;
    margin: 0;
  }
`

const OtherImage = ({ position, image, title, text }) => {
  return (
    <OtherImageContainer position={position}>
      <img src={image} />
      <div>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </OtherImageContainer>
  )
}

const NavigationContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 40px;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  div {
    width: 15px;
    background: rgba(0, 0, 0, 0.5);
    height: 15px;
    border-radius: 50%;
    margin: 0 5px;
    opacity: 1;
  }
`

export default function Hero () {
  const [position, setPosition] = useState([0, 1, 2, 3, 4])

  const RotatePosition = position => {
    const newPosition = position.map(position => {
      if (position >= 4) {
        return 0
      }
      return position + 1
    })
    setPosition(newPosition)
  }
  useEffect(() => {
    const IntervalFunction = setInterval(() => {
      RotatePosition(position)
      console.log(position)
    }, 15_000)
    return () => {
      clearInterval(IntervalFunction)
    }
  }, [position])

  return (
    <Wrapper>
      <OtherImage
        image='https://res.cloudinary.com/faraamit/image/upload/v1630948172/design/pexels-tima-miroshnichenko-5428267_tzx3uj.jpg'
        position={position[0]}
        text='our school is one of the best'
        title='roemichs'
      />
      <OtherImage
        image='https://res.cloudinary.com/faraamit/image/upload/v1630948116/design/pexels-max-fischer-5211430_rsts4i.jpg'
        position={position[1]}
        text='our school is one of the best'
        title='Early years and Primary'
      />
      <OtherImage
        image='https://res.cloudinary.com/faraamit/image/upload/v1630948074/design/pexels-max-fischer-5212703_k6bvht.jpg'
        position={position[2]}
        text='our school is one of the best'
        title='Primary'
      />
      <OtherImage
        image='https://res.cloudinary.com/faraamit/image/upload/v1630947920/design/pexels-daria-shevtsova-942419_kcja4k.jpg'
        position={position[3]}
        text='our school is one of the best'
        title='Upper Primary'
      />
      <OtherImage
        image='https://res.cloudinary.com/faraamit/image/upload/v1630948112/design/pexels-olia-danilevich-5088184_fp8urk.jpg'
        position={position[4]}
        text='our school is one of the best'
        title='secondary school'
      />
      <NavigationContainer>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </NavigationContainer>
    </Wrapper>
  )
}
