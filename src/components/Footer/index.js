import React from 'react'
import { RowSection, Wrapper } from '../../common/Global.Style'
import FooterBase from './Component/FooterBase'
import FooterDetails from './Component/FooterDetails'
import FooterGallery from './Component/FooterGallery'

export default function Footer () {
  return (
    <>
      <Wrapper background='black'>
        <RowSection>
          <FooterGallery />
          <FooterDetails />
          <FooterDetails />
        </RowSection>
      </Wrapper>
      <FooterBase />
    </>
  )
}
