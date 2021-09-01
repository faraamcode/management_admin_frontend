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
  height: 100vh;
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
  opacity: ${({ position }) => (position == 4 ? 1 : 1)};
  width: ${({ position }) =>
    position == 0 || position == 4 ? '100%' : '250px'};
  height: ${({ position }) =>
    position == 0 || position == 4 ? '100%' : '300px'};
  position: ${({ position }) => (position == 0 ? null : 'absolute')};
  padding-right: ${({ position }) =>
    position == 0 || position == 4 ? 0 : '20px'};
  transition: all 3s ease-in-out;
  bottom: ${({ position }) => (position == 0 || position == 4 ? 0 : '40%')};
  top: ${({ position }) => (position == 0 || position == 4 ? 0 : '40%')};
  left: ${({ position }) => (position == 0 || position == 4 ? 0 : '45%')};
  z-index: ${({ position }) => (position == 0 ? -1 : 3)};
  img {
    border-radius: ${({ position }) =>
      position == 0 || position == 4 ? 0 : '5px'};
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 600px) {
    ${({ position }) => (position !== 0 ? 'display: none;' : null)}
  }
  transform: translateX(
    ${({ position }) => (position == 4 ? null : position)}00%
  );
`

const HeroImage = () => {
  return (
    <ImageContainer>
      <img src='https://res.cloudinary.com/faraamit/image/upload/v1600987519/_large_image_4_lni1se.jpg' />
    </ImageContainer>
  )
}
const OtherImage = ({ position, image }) => {
  return (
    <OtherImageContainer position={position}>
      <img src={image} />
    </OtherImageContainer>
  )
}
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
    }, 5000)
    return () => {
      clearInterval(IntervalFunction)
    }
  }, [position])

  return (
    <Wrapper>
      <OtherImage
        image='https://res.cloudinary.com/faraamit/image/upload/v1601037172/images-12_b4a6ex.jpg'
        position={position[0]}
      />
      <OtherImage
        image='https://res.cloudinary.com/faraamit/image/upload/v1599586342/slide2_ktghrp.jpg'
        position={position[1]}
      />
      <OtherImage
        image='https://res.cloudinary.com/faraamit/image/upload/v1600987519/_large_image_4_lni1se.jpg'
        position={position[2]}
      />
      <OtherImage
        image='https://res.cloudinary.com/faraamit/image/upload/v1595011299/sample.jpg'
        position={position[3]}
      />
      <OtherImage image={Image5} position={position[4]} />
    </Wrapper>
  )
}
