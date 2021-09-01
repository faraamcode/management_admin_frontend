import React from 'react'
import InfoSection from './InfoSection'
import SchoolNewsAndEvents from './SchoolNewsAndEvents'
import News from './News'
import Gallery from './Component/Gallery'
import Hero from './Hero'
// import {White_} from '../../utils/color'

export default function Home () {
  return (
    <>
      <Hero />
      <InfoSection />
      <SchoolNewsAndEvents />
      <News />
      <Gallery />
    </>
  )
}
