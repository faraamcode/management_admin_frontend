import React from 'react'
import { RowSection, Wrapper } from '../../common/Global.Style'
import AboutSchool from './Component/AboutSchool'
import SchoolImg from '../../assets/images/cheerful.jpg'

export default function SchoolNewsAndEvents () {
  return (
    <Wrapper>
      <RowSection>
        <AboutSchool
          heading='Welcome to Roemichs International Schools'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          officia laborum praesentium distinctio libero doloremque eveniet porro
          culpa dolorem explicabo sunt, quam suscipit voluptate itaque molestiae
          ullam eaque similique beatae.'
          linkText='Read more...'
          url='/'
          image={SchoolImg}
        />
      </RowSection>
    </Wrapper>
  )
}
