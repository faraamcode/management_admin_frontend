import React from 'react'
import { CurveWrapper, RowSection, Wrapper } from '../../common/Global.Style'
import AboutSchool from './Component/AboutSchool'
import SchoolImg from '../../assets/images/cheerful.jpg'
import Event from './Component/Events'
import ContactForm from './Component/ContactForm'

export default function SchoolNewsAndEvents () {
  return (
    <CurveWrapper>
      <Wrapper minHeight='70vh' background='rgb(255,255,255, 0.8)'>
        <RowSection maxWidth='1200px' marginBottom='true'>
          <AboutSchool
            heading='Lorem, ipsum dolor sit amet consectetur adipisicing elit'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          officia laborum praesentium distinctio libero doloremque eveniet porro
          culpa dolorem explicabo sunt, quam suscipit voluptate itaque molestiae
          ullam eaque similique beatae.'
            linkText='Read more...'
            url='/'
            image={SchoolImg}
          />
          <Event />
          <ContactForm />
        </RowSection>
      </Wrapper>
    </CurveWrapper>
  )
}
