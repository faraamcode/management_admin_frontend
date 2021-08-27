import React from 'react'
import InfoSection from './InfoSection'
import SchoolNewsAndEvents from './SchoolNewsAndEvents'
import News from './News'
import Gallery from './Component/Gallery'
// import {White_} from '../../utils/color'

export default function Home () {
  return (
    <>
      <InfoSection />
      <SchoolNewsAndEvents />
      <News />
      <Gallery />
    </>
  )
}
