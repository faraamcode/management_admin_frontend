import React from 'react'
import styled from 'styled-components'
import { ContainerStyled } from './FooterDetails'
import PartnerImage from '../../../assets/images/microsoft.jpeg'
const ImageWrapper = styled.span`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  background: yellow;
`
export default function FooterGallery () {
  return (
    <ContainerStyled>
      <h5>Our partners</h5>
      <ImageWrapper>
        <img src={PartnerImage} />
        <img src={PartnerImage} />
        <img src={PartnerImage} />
        <img src={PartnerImage} />
      </ImageWrapper>
    </ContainerStyled>
  )
}
