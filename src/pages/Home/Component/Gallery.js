import React from 'react'
import { Wrapper } from '../../../common/Global.Style'
import styled from 'styled-components'
import GalleryImage from '../../../assets/images/cheerful.jpg'

const GalleryGrid = styled.div`
  width: 100%;
  min-height: 70vh;
  display: grid;
  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    place-item: center;
  }
  @media screen and (min-width: 1000px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      '  a b c'
      'a d e';
  }
`
//   max-width: 400px;
//   max-height: 400px;
const SingleGalleryStyle = styled.div`
  position: relative;
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : gridArea)};
  img {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  div {
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    width: 80%;
    height: 80%;
    top: 10%;
    left: 10%;
    z-index: 2;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h5 {
    text-align: center;
    font-size: 20px;
    color: white;
  }
`

const SingleGallery = ({ gridArea }) => {
  return (
    <SingleGalleryStyle gridArea={gridArea}>
      <img src={GalleryImage} />
      <div>
        <h5>lorem ipsum lorem ipsum lorem ipsum</h5>
      </div>
    </SingleGalleryStyle>
  )
}
export default function Gallery () {
  return (
    <Wrapper>
      <GalleryGrid>
        <SingleGallery gridArea='a' />
        <SingleGallery gridArea='b' />
        <SingleGallery gridArea='c' />
        <SingleGallery gridArea='d' />
        <SingleGallery gridArea='e' />
      </GalleryGrid>
    </Wrapper>
  )
}
